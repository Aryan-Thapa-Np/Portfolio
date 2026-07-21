import React, { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/picture.png';

/* ═══════════════════════════════════════════════════════
   SHOOTING STAR CANVAS (Universe Background)
═══════════════════════════════════════════════════════ */
function ShootingStarsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let stars = [];
    let shootingStars = [];

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : window.innerHeight;
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3800);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.008 + 0.003,
          dir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };
    resize();
    window.addEventListener('resize', resize);

    function spawnShootingStar() {
      const angle = Math.PI / 5 + (Math.random() - 0.5) * 0.4;
      shootingStars.push({
        x: Math.random() * canvas.width * 1.1,
        y: Math.random() * canvas.height * 0.75,
        vx: Math.cos(angle) * (Math.random() * 14 + 8),
        vy: Math.sin(angle) * (Math.random() * 14 + 8),
        alpha: 1,
        trail: [],
        thickness: Math.random() * 1.8 + 0.6,
        color: Math.random() > 0.5 ? [56, 189, 248] : [147, 51, 234],
      });
    }

    let spawnTimer = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Static background twinkling stars
      stars.forEach((s) => {
        s.alpha += s.speed * s.dir;
        if (s.alpha > 0.95 || s.alpha < 0.15) s.dir *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(215, 230, 255, ${s.alpha})`;
        ctx.fill();
      });

      // Spawn shooting stars continuously
      spawnTimer++;
      if (spawnTimer > 45) {
        spawnTimer = 0;
        if (Math.random() > 0.25) spawnShootingStar();
      }

      // Draw shooting stars with glowing trail
      shootingStars = shootingStars.filter((ss) => ss.alpha > 0.015);
      shootingStars.forEach((ss) => {
        ss.trail.push({ x: ss.x, y: ss.y });
        if (ss.trail.length > 24) ss.trail.shift();

        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.alpha -= 0.015;

        if (ss.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(ss.trail[0].x, ss.trail[0].y);
          for (let i = 1; i < ss.trail.length; i++) {
            ctx.lineTo(ss.trail[i].x, ss.trail[i].y);
          }
          const [r, g, b] = ss.color;
          const grad = ctx.createLinearGradient(
            ss.trail[0].x, ss.trail[0].y, ss.x, ss.y
          );
          grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
          grad.addColorStop(0.7, `rgba(${r},${g},${b},${ss.alpha * 0.6})`);
          grad.addColorStop(1, `rgba(${r},${g},${b},${ss.alpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = ss.thickness;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Glowing star head
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.thickness + 1, 0, Math.PI * 2);
        const [r, g, b] = ss.color;
        ctx.fillStyle = `rgba(${r},${g},${b},${ss.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* ═══════════════════════════════════════════════════════
   TECHNOLOGY DEFINITIONS (14 Orbit Planets)
═══════════════════════════════════════════════════════ */
const TECHNOLOGIES = [
  // Orbit 1 (Inner - 4 techs)
  {
    name: 'React',
    color: '#38bdf8',
    bg: '#0c2340',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'React Native',
    color: '#61dafb',
    bg: '#082535',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Tailwind CSS',
    color: '#06b6d4',
    bg: '#082535',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Node.js',
    color: '#22c55e',
    bg: '#0a2e12',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  // Orbit 2 (Mid - 5 techs)
  {
    name: 'JavaScript',
    color: '#eab308',
    bg: '#2b2504',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    color: '#3178c6',
    bg: '#081d36',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'MySQL',
    color: '#f97316',
    bg: '#2e1804',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'HTML5',
    color: '#e34f26',
    bg: '#2b0f07',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    color: '#1572b6',
    bg: '#061b2c',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  // Orbit 3 (Outer - 5 techs)
  {
    name: 'MongoDB',
    color: '#10b981',
    bg: '#062c1b',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Git',
    color: '#f05032',
    bg: '#2c0e08',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Java',
    color: '#f59e0b',
    bg: '#2b1b04',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Python',
    color: '#3b82f6',
    bg: '#0b1e36',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Redis',
    color: '#ef4444',
    bg: '#310a0a',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
];

/* 3 Orbit Rings with 10% increased radii & gaps */
const ORBITS = [
  { id: 'inner', rx: 116, ry: 53, speed: 0.024, techs: TECHNOLOGIES.slice(0, 4) },
  { id: 'mid',   rx: 204, ry: 92, speed: 0.017, techs: TECHNOLOGIES.slice(4, 9) },
  { id: 'outer', rx: 347, ry: 158, speed: 0.011, techs: TECHNOLOGIES.slice(9, 14) },
];

/* ASTEROID BELT — CENTER layer (radii increased by 10%) */
const ASTEROID_COUNT = 42;
const ASTEROID_RX = 275;
const ASTEROID_RY = 125;
const ASTEROID_SPEED = 0.013;

const ASTEROID_DATA = Array.from({ length: ASTEROID_COUNT }, (_, i) => ({
  angleOffset: (i / ASTEROID_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.18,
  radialJitter: (Math.random() - 0.5) * 14,
  size: Math.random() * 3 + 1.5,
  opacity: Math.random() * 0.7 + 0.3,
}));

/* ═══════════════════════════════════════════════════════
   SATELLITE COMPONENT (Physics, Draggable, Throwable, Bouncing)
═══════════════════════════════════════════════════════ */
const SATELLITE_DEFS = [
  {
    name: 'HTML5 Satellite',
    color: '#ea580c',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3 Satellite',
    color: '#2563eb',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript Satellite',
    color: '#eab308',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
];

function HeroSatellites() {
  const containerRef = useRef(null);
  const satellitesRef = useRef([
    {
      ...SATELLITE_DEFS[0],
      x: 0,
      y: 0,
      vx: 30,
      vy: 18,
      rotation: -6,
      vRot: 0.15,
      isDragging: false,
      dragOffset: { x: 0, y: 0 },
      velHistory: [],
    },
    {
      ...SATELLITE_DEFS[1],
      x: 0,
      y: 0,
      vx: -25,
      vy: 32,
      rotation: 12,
      vRot: -0.2,
      isDragging: false,
      dragOffset: { x: 0, y: 0 },
      velHistory: [],
    },
    {
      ...SATELLITE_DEFS[2],
      x: 0,
      y: 0,
      vx: 35,
      vy: -22,
      rotation: 8,
      vRot: 0.18,
      isDragging: false,
      dragOffset: { x: 0, y: 0 },
      velHistory: [],
    },
  ]);

  const [positions, setPositions] = useState([]);
  const lastTimeRef = useRef(performance.now());

  // Initialize satellite starting locations within container
  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const w = rect.width || window.innerWidth;
    const h = rect.height || window.innerHeight;

    satellitesRef.current[0].x = w * 0.08;
    satellitesRef.current[0].y = h * 0.15;

    satellitesRef.current[1].x = Math.max(w * 0.72, w - 160);
    satellitesRef.current[1].y = h * 0.35;

    satellitesRef.current[2].x = w * 0.15;
    satellitesRef.current[2].y = Math.max(h * 0.65, h - 140);

    setPositions(
      satellitesRef.current.map((s) => ({
        x: s.x,
        y: s.y,
        rotation: s.rotation,
        isDragging: s.isDragging,
      }))
    );
  }, []);

  // Physics animation loop with bouncing & throwing mechanics
  useEffect(() => {
    let animId;

    const updatePhysics = (now) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;

      if (!containerRef.current) {
        animId = requestAnimationFrame(updatePhysics);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const bounds = {
        minX: 10,
        maxX: Math.max(10, rect.width - 140),
        minY: 10,
        maxY: Math.max(10, rect.height - 70),
      };

      const sats = satellitesRef.current;

      // 1. Satellite Movement & Boundary Bouncing
      sats.forEach((sat) => {
        if (!sat.isDragging) {
          // Position integration
          sat.x += sat.vx * dt;
          sat.y += sat.vy * dt;
          sat.rotation += sat.vRot;

          // Smooth air friction dampening
          sat.vx *= 0.993;
          sat.vy *= 0.993;

          // Maintain pleasant ambient orbital drift
          const speed = Math.hypot(sat.vx, sat.vy);
          if (speed < 18) {
            const angle = Math.atan2(sat.vy || 1, sat.vx || 1);
            sat.vx += Math.cos(angle) * 10 * dt;
            sat.vy += Math.sin(angle) * 10 * dt;
          }

          // Wall Bouncing (Elasticity = 0.82)
          const elasticity = 0.82;
          if (sat.x <= bounds.minX) {
            sat.x = bounds.minX;
            sat.vx = Math.abs(sat.vx) * elasticity;
            sat.vRot = (Math.random() - 0.5) * 1.5;
          } else if (sat.x >= bounds.maxX) {
            sat.x = bounds.maxX;
            sat.vx = -Math.abs(sat.vx) * elasticity;
            sat.vRot = (Math.random() - 0.5) * 1.5;
          }

          if (sat.y <= bounds.minY) {
            sat.y = bounds.minY;
            sat.vy = Math.abs(sat.vy) * elasticity;
            sat.vRot = (Math.random() - 0.5) * 1.5;
          } else if (sat.y >= bounds.maxY) {
            sat.y = bounds.maxY;
            sat.vy = -Math.abs(sat.vy) * elasticity;
            sat.vRot = (Math.random() - 0.5) * 1.5;
          }
        }
      });

      // 2. Satellite-to-Satellite Collisions
      for (let i = 0; i < sats.length; i++) {
        for (let j = i + 1; j < sats.length; j++) {
          const s1 = sats[i];
          const s2 = sats[j];
          const dx = (s2.x + 60) - (s1.x + 60);
          const dy = (s2.y + 25) - (s1.y + 25);
          const dist = Math.hypot(dx, dy);
          const minDist = 110;

          if (dist < minDist && dist > 0) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = (minDist - dist) / 2;

            if (!s1.isDragging) {
              s1.x -= nx * overlap;
              s1.y -= ny * overlap;
            }
            if (!s2.isDragging) {
              s2.x += nx * overlap;
              s2.y += ny * overlap;
            }

            const kx = s1.vx - s2.vx;
            const ky = s1.vy - s2.vy;
            const p = nx * kx + ny * ky;

            if (p > 0) {
              if (!s1.isDragging) {
                s1.vx -= p * nx * 0.85;
                s1.vy -= p * ny * 0.85;
                s1.vRot = (Math.random() - 0.5) * 2;
              }
              if (!s2.isDragging) {
                s2.vx += p * nx * 0.85;
                s2.vy += p * ny * 0.85;
                s2.vRot = (Math.random() - 0.5) * 2;
              }
            }
          }
        }
      }

      setPositions(
        sats.map((s) => ({
          x: s.x,
          y: s.y,
          rotation: s.rotation,
          isDragging: s.isDragging,
        }))
      );

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer interaction handlers
  const handlePointerDown = (index, e) => {
    e.preventDefault();
    const sat = satellitesRef.current[index];
    sat.isDragging = true;
    sat.velHistory = [];

    sat.dragOffset = {
      x: e.clientX - sat.x,
      y: e.clientY - sat.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (index, e) => {
    const sat = satellitesRef.current[index];
    if (!sat || !sat.isDragging) return;

    const newX = e.clientX - sat.dragOffset.x;
    const newY = e.clientY - sat.dragOffset.y;

    const now = performance.now();
    sat.velHistory.push({ x: newX, y: newY, time: now });
    if (sat.velHistory.length > 6) sat.velHistory.shift();

    sat.x = newX;
    sat.y = newY;
  };

  const handlePointerUp = (index, e) => {
    const sat = satellitesRef.current[index];
    if (!sat || !sat.isDragging) return;

    sat.isDragging = false;

    if (sat.velHistory.length >= 2) {
      const first = sat.velHistory[0];
      const last = sat.velHistory[sat.velHistory.length - 1];
      const dt = (last.time - first.time) / 1000;
      if (dt > 0.005) {
        const vx = (last.x - first.x) / dt;
        const vy = (last.y - first.y) / dt;
        sat.vx = Math.min(Math.max(vx * 1.1, -1400), 1400);
        sat.vy = Math.min(Math.max(vy * 1.1, -1400), 1400);
        sat.vRot = Math.min(Math.max((vx / 90), -4), 4);
      }
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {satellitesRef.current.map((sat, idx) => {
        const pos = positions[idx] || { x: sat.x, y: sat.y, rotation: sat.rotation, isDragging: false };

        return (
          <div
            key={sat.name}
            className="hero-satellite-wrapper touch-none"
            style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.rotation}deg)`,
              cursor: pos.isDragging ? 'grabbing' : 'grab',
              zIndex: pos.isDragging ? 300 : 20,
            }}
            onPointerDown={(e) => handlePointerDown(idx, e)}
            onPointerMove={(e) => handlePointerMove(idx, e)}
            onPointerUp={(e) => handlePointerUp(idx, e)}
            onPointerCancel={(e) => handlePointerUp(idx, e)}
          >
            <div className={`satellite-structure group pointer-events-auto transition-transform ${pos.isDragging ? 'scale-110 shadow-2xl' : ''}`}>
              {/* Left Solar Panel */}
              <div className="solar-panel left-panel">
                <div className="solar-grid" />
              </div>

              {/* Panel Arm */}
              <div className="panel-arm" />

              {/* Satellite Body Capsule */}
              <div className="satellite-body" style={{ borderColor: sat.color }}>
                {/* Antenna */}
                <div className="satellite-antenna">
                  <div className="antenna-tip" style={{ backgroundColor: sat.color }} />
                </div>

                {/* Communication Dish */}
                <div className="satellite-dish" />

                {/* Blinking Beacon LED */}
                <div className="beacon-led" />

                {/* Tech Icon inside satellite */}
                <img src={sat.icon} alt={sat.name} className="satellite-tech-icon" />
              </div>

              {/* Panel Arm */}
              <div className="panel-arm" />

              {/* Right Solar Panel */}
              <div className="solar-panel right-panel">
                <div className="solar-grid" />
              </div>

              {/* Label on Hover / Drag */}
              <div className="satellite-label" style={{ borderColor: sat.color, color: sat.color }}>
                {sat.name} (Drag &amp; Throw)
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SOLAR SYSTEM COMPONENT
═══════════════════════════════════════════════════════ */
function SolarSystem() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [angles, setAngles] = useState([0, 0, 0, 0]);

  // Compute responsive scale ratio relative to base 760px container width
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const currentWidth = rect.width || 760;
        setScale(currentWidth / 760);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const update = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      setAngles((prev) => [
        (prev[0] + ORBITS[0].speed * delta * 40) % (Math.PI * 2),
        (prev[1] + ORBITS[1].speed * delta * 40) % (Math.PI * 2),
        (prev[2] + ORBITS[2].speed * delta * 40) % (Math.PI * 2),
        (prev[3] + ASTEROID_SPEED * delta * 40) % (Math.PI * 2),
      ]);

      animId = requestAnimationFrame(update);
    };

    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div ref={containerRef} className="solar-system-container" aria-hidden="true">

      {/* SVG Orbit Lines — exact 760x400 coordinate space */}
      <svg className="solar-orbits-svg" viewBox="-380 -200 760 400" preserveAspectRatio="xMidYMid meet">
        {/* 3 Planet Orbit Lines */}
        {ORBITS.map((orbit) => (
          <ellipse
            key={orbit.id}
            cx="0"
            cy="0"
            rx={orbit.rx}
            ry={orbit.ry}
            className="orbit-ellipse-line"
          />
        ))}

        {/* Center Asteroid Belt Orbit Line */}
        <ellipse
          cx="0"
          cy="0"
          rx={ASTEROID_RX}
          ry={ASTEROID_RY}
          className="asteroid-belt-line"
        />
      </svg>

      {/* Sun Center — Developer Avatar */}
      <div className="sun-center">
        <div className="sun-sphere">
          <div className="sun-avatar-wrap">
            <img
              src={profilePic}
              alt="Developer"
              className="sun-avatar-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="sun-avatar-fallback">AT</div>
          </div>
        </div>
        <div className="sun-corona-glow" />
      </div>

      {/* Center Asteroid Belt Particles Revolving */}
      {ASTEROID_DATA.map((ast, idx) => {
        const currentAngle = angles[3] + ast.angleOffset;
        const rx = (ASTEROID_RX + ast.radialJitter) * scale;
        const ry = (ASTEROID_RY + ast.radialJitter * 0.45) * scale;
        const x = rx * Math.cos(currentAngle);
        const y = ry * Math.sin(currentAngle);
        const zIndex = Math.floor(95 + y * 0.5);

        return (
          <div
            key={idx}
            className="asteroid-particle"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              width: `${Math.max(1, ast.size * scale)}px`,
              height: `${Math.max(1, ast.size * scale)}px`,
              opacity: ast.opacity,
              zIndex,
            }}
          />
        );
      })}

      {/* 9 Tech Planets revolving precisely on their assigned 3 orbits */}
      {ORBITS.map((orbit, orbitIdx) => {
        const baseAngle = angles[orbitIdx];

        return orbit.techs.map((tech, techIdx) => {
          const offsetAngle = (techIdx / orbit.techs.length) * Math.PI * 2;
          const currentAngle = baseAngle + offsetAngle;

          const currentRx = orbit.rx * scale;
          const currentRy = orbit.ry * scale;

          const x = currentRx * Math.cos(currentAngle);
          const y = currentRy * Math.sin(currentAngle);

          const depthScale = (0.85 + (y / (currentRy || 1)) * 0.22) * Math.max(0.65, scale);
          const zIndex = Math.floor(120 + y);

          return (
            <div
              key={tech.name}
              className="planet-sphere-node"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${depthScale})`,
                zIndex,
                '--planet-color': tech.color,
                '--planet-bg': tech.bg,
              }}
            >
              {/* 3D Sphere Planet Body */}
              <div className="planet-sphere-body">
                {/* 3D Specular Shading */}
                <div className="planet-sphere-shading" />
                {/* Tech Icon Cover */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="planet-tech-icon"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <span className="planet-tech-fallback">{tech.name[0]}</span>
              </div>

              {/* Tooltip on Hover */}
              <div className="planet-tooltip">{tech.name}</div>
            </div>
          );
        });
      })}

    </div>
  );
}

export { ShootingStarsCanvas, SolarSystem, HeroSatellites };

