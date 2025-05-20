import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dots = useRef<HTMLDivElement[]>([]);
  const animationFrame = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Create dots
    const container = containerRef.current;
    const numDots = 50;
    
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'interactive-dot';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      container.appendChild(dot);
      dots.current.push(dot);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const animate = () => {
      dots.current.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const dotCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };

        const distance = Math.hypot(
          mousePosition.current.x - dotCenter.x,
          mousePosition.current.y - dotCenter.y
        );

        const maxDistance = 200;
        const scale = Math.max(0, 1 - distance / maxDistance);

        dot.style.transform = `scale(${1 + scale})`;
        dot.style.opacity = `${0.3 + scale * 0.7}`;
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      dots.current.forEach(dot => dot.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
    />
  );
};

export default InteractiveBackground;