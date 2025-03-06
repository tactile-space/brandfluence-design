
import React, { useEffect, useRef } from 'react';

const NetworkAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create dots
    const dotCount = Math.floor(containerWidth * containerHeight / 15000);
    const dots: HTMLDivElement[] = [];
    const lines: HTMLDivElement[] = [];
    const positions: {x: number, y: number, vx: number, vy: number}[] = [];
    
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      
      // Random position
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;
      
      // Random size (3-6px)
      const size = 3 + Math.random() * 3;
      
      // Random velocity
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.animationDelay = `${Math.random() * 3}s`;
      
      container.appendChild(dot);
      dots.push(dot);
      positions.push({x, y, vx, vy});
    }
    
    // Create lines
    for (let i = 0; i < dotCount; i++) {
      for (let j = i + 1; j < dotCount; j++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.zIndex = '1';
        line.style.transformOrigin = 'left center';
        line.style.pointerEvents = 'none';
        container.appendChild(line);
        lines.push(line);
      }
    }
    
    // Animation
    const animate = () => {
      for (let i = 0; i < dotCount; i++) {
        // Update position
        positions[i].x += positions[i].vx;
        positions[i].y += positions[i].vy;
        
        // Bounce off walls
        if (positions[i].x <= 0 || positions[i].x >= containerWidth) {
          positions[i].vx *= -1;
        }
        if (positions[i].y <= 0 || positions[i].y >= containerHeight) {
          positions[i].vy *= -1;
        }
        
        // Apply new position
        dots[i].style.left = `${positions[i].x}px`;
        dots[i].style.top = `${positions[i].y}px`;
      }
      
      // Update lines
      let lineIndex = 0;
      for (let i = 0; i < dotCount; i++) {
        for (let j = i + 1; j < dotCount; j++) {
          const x1 = positions[i].x;
          const y1 = positions[i].y;
          const x2 = positions[j].x;
          const y2 = positions[j].y;
          
          const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          
          // Only draw lines between nearby dots
          if (distance < 150) {
            const angle = Math.atan2(y2 - y1, x2 - x1);
            const opacity = 1 - distance / 150;
            
            lines[lineIndex].style.width = `${distance}px`;
            lines[lineIndex].style.height = '1px';
            lines[lineIndex].style.left = `${x1}px`;
            lines[lineIndex].style.top = `${y1}px`;
            lines[lineIndex].style.transform = `rotate(${angle}rad)`;
            lines[lineIndex].style.background = `rgba(69, 147, 255, ${opacity * 0.2})`;
            lines[lineIndex].style.display = 'block';
          } else {
            lines[lineIndex].style.display = 'none';
          }
          
          lineIndex++;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    let animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden"
    />
  );
};

export default NetworkAnimation;
