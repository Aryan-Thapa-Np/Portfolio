import React, { useEffect, useRef, useState } from 'react';

export default function ScrollAnimate({
  children,
  effect = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getEffectStyles = () => {
    switch (effect) {
      case 'fade-up':
        return isInView
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-[0.97]';
      case 'fade-down':
        return isInView
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-12 scale-[0.97]';
      case 'fade-left':
        return isInView
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 translate-x-12 scale-[0.97]';
      case 'fade-right':
        return isInView
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 -translate-x-12 scale-[0.97]';
      case 'zoom-in':
        return isInView
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-88';
      case 'flip-up':
        return isInView
          ? 'opacity-100 [transform:rotateX(0deg)]'
          : 'opacity-0 [transform:rotateX(18deg)_translateY(24px)]';
      default:
        return isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform-gpu will-change-transform ${getEffectStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
