import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CountUp = ({ value }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const countElement = countRef.current;

    if (countElement) {
      const startValue = 0;
      const duration = 2;

      // IntersectionObserver observes the given component in viewpoint
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const tl = gsap.timeline();

            tl.fromTo(
              countElement,
              { opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1, duration: 0.5 }
            ).to(countElement, {
              innerHTML: value,
              duration: duration,
              onUpdate: () => {
                const currentCount = Math.round(
                  startValue + (value - startValue) * tl.progress()
                );
                countElement.innerHTML = currentCount;
              },
            });
            observer.disconnect(); // Stop observing once animation is triggered.
          }
        },
        { threshold: 0.1 } // Adjust the threshold as needed
      );

      observer.observe(countElement);

      return () => {
        observer.disconnect();
      };
    }
  }, [value]);

  return <span className="count-up" ref={countRef} />;
};

export default CountUp;
