import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ target, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTime = null;
          let animId;

          const step = (now) => {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);

            // Smooth easeOutCubic curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              animId = requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          animId = requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={nodeRef} className="inline-block">
      {count}
      {suffix}
    </span>
  );
}
