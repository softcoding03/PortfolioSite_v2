import React, { useEffect, useRef, useState } from 'react';
import { Character } from '../Character/Character';
import './Timeline.css';

interface Milestone {
  id: number;
  title: string;
  timestamp: string;
  date: string;
  description: string;
  achievements: string[];
  techStack: string[];
  icon: string;
}

interface TimelineProps {
  milestones: Milestone[];
}

export function Timeline({ milestones }: TimelineProps) {
  const [activeMilestoneId, setActiveMilestoneId] = useState<number | null>(null);
  const [markers, setMarkers] = useState<HTMLElement[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const timelineWidth = timelineRef.current.offsetWidth;
    const markerCount = milestones.length;
    const markerSpacing = timelineWidth / (markerCount - 1);

    const newMarkers = milestones.map((milestone, index) => {
      const marker = document.createElement('div');
      marker.className = 'timeline-marker';
      marker.style.left = `${index * markerSpacing}px`;
      marker.setAttribute('data-milestone-id', milestone.id.toString());
      marker.setAttribute('aria-label', milestone.title);
      marker.setAttribute('role', 'button');
      marker.setAttribute('tabindex', '0');

      // 클릭 이벤트 리스너
      marker.addEventListener('click', () => {
        setActiveMilestoneId(milestone.id);
        const section = document.getElementById(`milestone-${milestone.id}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });

      // 키보드 접근성
      marker.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          marker.click();
        }
      });

      return marker;
    });

    const markersContainer = document.getElementById('timeline-markers');
    if (markersContainer) {
      markersContainer.innerHTML = '';
      newMarkers.forEach(marker => markersContainer.appendChild(marker));
    }

    setMarkers(newMarkers);

    // 스크롤 이벤트 리스너
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 스크롤 위치에 따른 활성 마일스톤 업데이트
      milestones.forEach((milestone, index) => {
        const section = document.getElementById(`milestone-${milestone.id}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setActiveMilestoneId(milestone.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [milestones]);

  return (
    <div className="timeline-container">
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line"></div>
        <div id="timeline-markers"></div>
        <Character timelineWidth={timelineRef.current?.offsetWidth || 0} />
      </div>
    </div>
  );
} 