import { useEffect, useRef } from 'react';

const VS = `
  attribute vec3 aPos;
  attribute float aSize;
  attribute float aPhase;
  uniform float uTime;
  uniform vec2  uMouse;
  uniform mat4  uProj;
  varying float vAlpha;
  varying float vPhase;
  void main(){
    float t = uTime * 0.4 + aPhase;
    vec3 p = aPos;
    p.x += sin(t * 0.7 + aPos.y) * 0.35;
    p.y += cos(t * 0.5 + aPos.x) * 0.35;
    p.z += sin(t * 0.6) * 0.25;
    p.x += uMouse.x * 0.6 * (1.0 - abs(aPos.z) * 0.2);
    p.y += uMouse.y * 0.6 * (1.0 - abs(aPos.z) * 0.2);
    gl_Position  = uProj * vec4(p, 1.0);
    gl_PointSize = aSize * (1.0 / (1.0 + abs(p.z) * 0.25));
    vAlpha = 0.3 + 0.5 * sin(t * 2.0 + aPhase);
    vPhase = aPhase;
  }
`;

const FS = `
  precision mediump float;
  varying float vAlpha;
  varying float vPhase;
  void main(){
    float d = length(gl_PointCoord - vec2(0.5));
    if(d > 0.5) discard;
    float a = smoothstep(0.5, 0.05, d) * vAlpha;
    vec3 c1 = vec3(0.0,  0.94, 1.0);
    vec3 c2 = vec3(0.48, 0.18, 1.0);
    vec3 c3 = vec3(1.0,  0.18, 0.48);
    float t = mod(vPhase, 6.28318) / 6.28318;
    vec3 col = t < 0.5 ? mix(c1, c2, t * 2.0) : mix(c2, c3, (t - 0.5) * 2.0);
    gl_FragColor = vec4(col, a);
  }
`;

const LINE_VS = `
  attribute vec3 aPos;
  attribute float aPhase;
  uniform float uTime;
  uniform mat4  uProj;
  void main(){
    float t = uTime * 0.4 + aPhase;
    vec3 p = aPos;
    p.x += sin(t * 0.7 + aPos.y) * 0.35;
    p.y += cos(t * 0.5 + aPos.x) * 0.35;
    p.z += sin(t * 0.6) * 0.25;
    gl_Position = uProj * vec4(p, 1.0);
  }
`;

const LINE_FS = `
  precision mediump float;
  void main(){ gl_FragColor = vec4(0.0, 0.94, 1.0, 0.05); }
`;

function compileShader(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

function makeProgram(gl, vs, fs) {
  const prog = gl.createProgram();
  gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  return prog;
}

function perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan(fov / 2), nf = 1 / (near - far);
  return [
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ];
}

export default function WebGLBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Particles ────────────────────────────────────────────
    const N = 300;
    const pos    = new Float32Array(N * 3);
    const sizes  = new Float32Array(N);
    const phases = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) *  8;
      sizes[i]  = Math.random() * 3.5 + 1;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const particleProg = makeProgram(gl, VS, FS);

    function uploadAttr(prog, data, name, size) {
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, name);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
      return buf;
    }

    // ── Lines ─────────────────────────────────────────────────
    const lineProg = makeProgram(gl, LINE_VS, LINE_FS);

    const lineVerts = [];
    const linePhase = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pos[i*3]-pos[j*3], dy = pos[i*3+1]-pos[j*3+1], dz = pos[i*3+2]-pos[j*3+2];
        if (dx*dx + dy*dy + dz*dz < 3.5) {
          lineVerts.push(pos[i*3], pos[i*3+1], pos[i*3+2], pos[j*3], pos[j*3+1], pos[j*3+2]);
          linePhase.push(phases[i], phases[j]);
        }
      }
    }
    const lineData  = new Float32Array(lineVerts);
    const linePhaseData = new Float32Array(linePhase);

    // ── Mouse ─────────────────────────────────────────────────
    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouse);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    let rafId;
    const draw = (ts) => {
      const t = ts * 0.001;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const aspect = canvas.width / canvas.height;
      const proj   = perspective(0.8, aspect, 0.1, 100);

      // Draw lines
      gl.useProgram(lineProg);
      gl.uniformMatrix4fv(gl.getUniformLocation(lineProg, 'uProj'), false, proj);
      gl.uniform1f(gl.getUniformLocation(lineProg, 'uTime'), t);
      uploadAttr(lineProg, lineData,      'aPos',   3);
      uploadAttr(lineProg, linePhaseData, 'aPhase', 1);
      gl.drawArrays(gl.LINES, 0, lineData.length / 3);

      // Draw particles
      gl.useProgram(particleProg);
      gl.uniformMatrix4fv(gl.getUniformLocation(particleProg, 'uProj'),  false, proj);
      gl.uniform1f(gl.getUniformLocation(particleProg, 'uTime'),  t);
      gl.uniform2f(gl.getUniformLocation(particleProg, 'uMouse'), mx, my);
      uploadAttr(particleProg, pos,    'aPos',   3);
      uploadAttr(particleProg, sizes,  'aSize',  1);
      uploadAttr(particleProg, phases, 'aPhase', 1);
      gl.drawArrays(gl.POINTS, 0, N);

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
      }}
    />
  );
}
