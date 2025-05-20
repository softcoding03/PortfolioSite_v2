import { useCallback } from 'react';

export const useUtils = () => {
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const mapRange = useCallback((value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }, []);

  const getScrollPercentage = useCallback(() => {
    return (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  }, []);

  const isInViewport = useCallback((element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }, []);

  const createObserver = useCallback((callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
    return new IntersectionObserver(callback, options);
  }, []);

  const typeText = useCallback((element: HTMLElement, text: string, onComplete?: () => void) => {
    let i = 0;
    element.textContent = '';
    const interval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 15);
  }, []);

  return {
    debounce,
    mapRange,
    getScrollPercentage,
    isInViewport,
    createObserver,
    typeText
  };
}; 