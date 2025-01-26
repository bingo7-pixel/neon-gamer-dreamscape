import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
      alpha: number;
      pulse: number;
      connections: number;
    }> = [];

    const colors = ['#9b87f5', '#D946EF', '#1EAEDB', '#7E69AB'];
    const particleCount = 150;
    const connectionDistance = 150;
    const baseRadius = 2;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * baseRadius + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random(),
        pulse: Math.random() * 0.1,
        connections: 0
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(26, 31, 44, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.alpha += particle.pulse;
        particle.connections = 0;

        if (particle.alpha >= 1 || particle.alpha <= 0) {
          particle.pulse = -particle.pulse;
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * (1 + Math.sin(Date.now() * 0.003) * 0.2), 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.alpha})`);
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 4
        );
        gradient.addColorStop(0, particle.color.replace(')', ', 0.3)'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections
        particles.forEach(p2 => {
          if (particle === p2) return;
          
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance && particle.connections < 3 && p2.connections < 3) {
            particle.connections++;
            p2.connections++;

            const alpha = (1 - distance / connectionDistance) * 0.3;
            const gradient = ctx.createLinearGradient(particle.x, particle.y, p2.x, p2.y);
            gradient.addColorStop(0, particle.color.replace(')', `, ${alpha})`));
            gradient.addColorStop(1, p2.color.replace(')', `, ${alpha})`));

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
    };

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleBackground;