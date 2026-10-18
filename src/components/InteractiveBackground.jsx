// InteractiveBackground.jsx
// A full‑screen canvas that renders subtle data‑science / AI visual effects.
// The component adapts its visual style based on the "mode" prop (e.g., "hero", "about", "pipeline", "skills", "projects", "dsa", "education", "contact").
// It respects prefers‑reduced‑motion, uses requestAnimationFrame, and avoids React state updates on every frame.

import React, { useRef, useEffect } from 'react';

// Utility to clamp a value.
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

// Determine particle count based on viewport size and mode.
const getParticleCount = (mode) => {
  const base = window.innerWidth < 600 ? 30 : window.innerWidth < 1024 ? 60 : 100;
  switch (mode) {
    case 'hero':
      return base + 40;
    case 'about':
    case 'contact':
      return base - 20;
    case 'pipeline':
    case 'skills':
    case 'projects':
    case 'dsa':
      return base + 20;
    default:
      return base;
  }
};

// Simple vector class for convenience.
class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  mul(s) {
    this.x *= s;
    this.y *= s;
    return this;
  }
  dist(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.hypot(dx, dy);
  }
}

// Particle representing a floating data point, line segment, or label.
class Particle {
  constructor(canvas, mode) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.reset(mode);
  }
  reset(mode) {
    const { width, height } = this.canvas;
    this.pos = new Vec2(Math.random() * width, Math.random() * height);
    const speed = 0.05 + Math.random() * 0.07;
    const angle = Math.random() * Math.PI * 2;
    this.vel = new Vec2(Math.cos(angle) * speed, Math.sin(angle) * speed);
    // Visual style based on mode.
    const styles = {
      hero: '#2F80ED', // electric blue
      about: '#22D3EE',
      pipeline: '#8B5CF6',
      skills: '#2F80ED',
      projects: '#22D3EE',
      dsa: '#8B5CF6',
      education: '#2F80ED',
      contact: '#22D3EE',
    };
    this.color = styles[mode] || '#2F80ED';
    this.size = 1 + Math.random() * 2;
    this.opacity = 0.05 + Math.random() * 0.15;
    this.life = 0;
    this.maxLife = 200 + Math.random() * 200;
  }
  update(cursorPos) {
    // simple flocking‑like attraction to mouse within a radius.
    const influenceRadius = 120;
    if (cursorPos) {
      const d = this.pos.dist(cursorPos);
      if (d < influenceRadius) {
        const dir = new Vec2(cursorPos.x - this.pos.x, cursorPos.y - this.pos.y)
          .mul(0.001 * (1 - d / influenceRadius));
        this.vel.add(dir);
        // brighten when close
        this.opacity = clamp(this.opacity + 0.02, 0.05, 0.4);
      } else {
        // fade back
        this.opacity = clamp(this.opacity - 0.001, 0.05, 0.4);
      }
    }
    this.pos.add(this.vel);
    const { width, height } = this.canvas;
    // wrap around edges
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
    this.life++;
    if (this.life > this.maxLife) this.reset(this.mode);
  }
  draw() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Main component.
export default function InteractiveBackground({ mode = 'hero' }) {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  // Handle prefers‑reduced‑motion.
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialise particles.
    const initParticles = () => {
      const count = getParticleCount(mode);
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        const p = new Particle(canvas, mode);
        p.mode = mode; // store mode for reset.
        particlesRef.current.push(p);
      }
    };
    initParticles();

    // Cursor tracking.
    const updateCursor = (e) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current = new Vec2(e.clientX - rect.left, e.clientY - rect.top);
    };
    if (!prefersReduced.matches) {
      window.addEventListener('mousemove', updateCursor);
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Parallax: slight offset for background layer (slow drift).
      const time = performance.now() * 0.00002;
      ctx.save();
      ctx.translate(Math.sin(time) * 20, Math.cos(time) * 15);
      // Draw particles.
      particlesRef.current.forEach((p) => {
        p.update(cursorRef.current);
        p.draw();
      });
      ctx.restore();

      // Additional stylised elements per mode (neural net, grid, etc.)
      drawModeSpecific(ctx, mode);

      animationRef.current = requestAnimationFrame(render);
    };
    if (!prefersReduced.matches) {
      animationRef.current = requestAnimationFrame(render);
    }

    // Cleanup.
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(animationRef.current);
    };
    // Re‑run when mode changes or reduced‑motion preference changes.
  }, [mode]);

  // Simple static fallback when reduced motion is requested.
  if (prefersReduced.matches) {
    return (
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 -z-10 opacity-70"
        style={{ background: 'linear-gradient(145deg, #07111F, #0B1B2E)' }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}

// ---- Mode‑specific drawing helpers -------------------------------------------------
function drawModeSpecific(ctx, mode) {
  const { width, height } = ctx.canvas;
  // Helper to draw a faint grid.
  const drawGrid = (spacing, color, lineWidth = 0.5) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    for (let x = 0; x < width; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  if (mode === 'hero') {
    // Draw a very subtle neural‑network overlay.
    const nodes = [];
    const cols = 8;
    const rows = 4;
    const marginX = width * 0.1;
    const marginY = height * 0.2;
    const stepX = (width - 2 * marginX) / (cols - 1);
    const stepY = (height - 2 * marginY) / (rows - 1);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        nodes.push({ x: marginX + i * stepX, y: marginY + j * stepY });
      }
    }
    // Connections – only between successive columns to suggest layers.
    ctx.strokeStyle = 'rgba(139,92,246,0.08)'; // violet with low opacity.
    ctx.lineWidth = 1;
    for (let i = 0; i < cols - 1; i++) {
      const colA = nodes.filter((_, idx) => Math.floor(idx / rows) === i);
      const colB = nodes.filter((_, idx) => Math.floor(idx / rows) === i + 1);
      colA.forEach((a) => {
        colB.forEach((b) => {
          // random slight jitter for organic feel.
          const jitter = 4;
          ctx.beginPath();
          ctx.moveTo(a.x + (Math.random() - 0.5) * jitter, a.y + (Math.random() - 0.5) * jitter);
          ctx.lineTo(b.x + (Math.random() - 0.5) * jitter, b.y + (Math.random() - 0.5) * jitter);
          ctx.stroke();
        });
      });
    }
    // Nodes – pulse via sinusoidal opacity.
    const time = performance.now() * 0.002;
    nodes.forEach((n) => {
      const pulse = (Math.sin(time + n.x * 0.01) + 1) / 2; // 0‑1
      ctx.beginPath();
      ctx.arc(n.x, n.y, 3 + pulse * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139,92,246,${0.04 + pulse * 0.06})`;
      ctx.fill();
    });
  } else if (mode === 'about' || mode === 'contact') {
    drawGrid(80, 'rgba(47,128,237,0.04)'); // electric blue grid.
  } else if (mode === 'pipeline') {
    // Flowing data stream lines.
    ctx.strokeStyle = 'rgba(22,211,238,0.07)'; // cyan.
    ctx.lineWidth = 1.2;
    const segments = 12;
    for (let i = 0; i < segments; i++) {
      const t = i / segments;
      const startX = width * (0.2 + 0.6 * Math.random());
      const startY = height * (0.1 + 0.8 * Math.random());
      const endX = startX + (Math.random() - 0.5) * 200;
      const endY = startY + (Math.random() - 0.5) * 200;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(
        startX + 50,
        startY + 30,
        endX - 50,
        endY - 30,
        endX,
        endY
      );
      ctx.stroke();
    }
  } else if (mode === 'skills') {
    drawGrid(120, 'rgba(139,92,246,0.03)');
    // tiny tech‑symbol placeholders – we simply draw small circles with amber hue.
    const count = 15;
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245,158,11,0.12)'; // amber low opacity.
      ctx.fill();
    }
  } else if (mode === 'projects') {
    // Scatter‑plot like points.
    ctx.fillStyle = 'rgba(47,128,237,0.06)';
    const pts = 80;
    for (let i = 0; i < pts; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
  } else if (mode === 'dsa') {
    // Graph‑tree visual – simple lines connecting random nodes.
    const nodes = [];
    const n = 30;
    for (let i = 0; i < n; i++) {
      nodes.push({ x: Math.random() * width, y: Math.random() * height });
    }
    ctx.strokeStyle = 'rgba(22,211,238,0.05)';
    ctx.lineWidth = 0.7;
    for (let i = 0; i < n; i++) {
      const a = nodes[i];
      const b = nodes[(i + Math.floor(Math.random() * 3) + 1) % n];
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    nodes.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139,92,246,0.07)';
      ctx.fill();
    });
  } else if (mode === 'education') {
    // Minimal maths curves – sinusoid.
    ctx.strokeStyle = 'rgba(47,128,237,0.09)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < width; x++) {
      const y = height / 2 + Math.sin((x / width) * Math.PI * 4) * 40;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}
