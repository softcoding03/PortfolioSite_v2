import React, { useEffect, useRef, useState } from 'react';
import { useUtils } from '../../hooks/useUtils';
import './Character.css';

interface CharacterProps {
  timelineWidth: number;
}

export function Character({ timelineWidth }: CharacterProps) {
  const [position, setPosition] = useState(0);
  const [isWalking, setIsWalking] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const characterRef = useRef<HTMLDivElement>(null);
  const walkingTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const { mapRange } = useUtils();

  useEffect(() => {
    if (!characterRef.current) return;

    // Create fallback pixel art character
    const canvas = document.createElement('canvas');
    canvas.width = 32; // Two frames
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // First frame (standing)
      ctx.fillStyle = '#00ffff';
      // Head
      ctx.fillRect(4, 0, 8, 8);
      // Body
      ctx.fillRect(4, 8, 8, 4);
      // Legs
      ctx.fillRect(4, 12, 2, 4);
      ctx.fillRect(10, 12, 2, 4);
      // Arms
      ctx.fillRect(2, 8, 2, 4);
      ctx.fillRect(12, 8, 2, 4);
      
      // Second frame (walking)
      ctx.fillStyle = '#00ffff';
      // Head
      ctx.fillRect(20, 0, 8, 8);
      // Body
      ctx.fillRect(20, 8, 8, 4);
      // Legs (different position)
      ctx.fillRect(20, 12, 2, 3);
      ctx.fillRect(26, 12, 2, 4);
      // Arms (different position)
      ctx.fillRect(18, 7, 2, 4);
      ctx.fillRect(28, 8, 2, 4);
      
      // Export as data URL
      const spriteSheet = canvas.toDataURL();
      
      // Only set background if main image fails to load
      const img = new Image();
      img.onerror = () => {
        if (characterRef.current) {
          characterRef.current.style.backgroundImage = `url(${spriteSheet})`;
        }
      };
      img.src = 'src/assets/character-sprite.png';
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const newPosition = mapRange(scrollPercent, 0, 100, 0, timelineWidth);
      
      // Determine direction
      setDirection(newPosition > position ? 'right' : 'left');
      setPosition(newPosition);
      
      // Update walking state
      updateWalkingState(Math.abs(newPosition - position) > 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [position, timelineWidth, mapRange]);

  const updateWalkingState = (isMoving: boolean) => {
    clearTimeout(walkingTimeoutRef.current);
    
    if (isMoving) {
      setIsWalking(true);
    } else {
      walkingTimeoutRef.current = setTimeout(() => {
        setIsWalking(false);
      }, 200);
    }
  };

  return (
    <div
      ref={characterRef}
      id="character"
      className={isWalking ? 'walking' : ''}
      style={{
        left: `${position}px`,
        transform: `translateY(-100%) ${direction === 'left' ? 'scaleX(-1)' : ''}`
      }}
    />
  );
} 