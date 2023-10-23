import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const InfiniteScroller = ({
  direction,
  reverse,
  loop,
  children,
  className,
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const scrollDuration = 20; // Adjust the scrolling speed as needed.

    const scrollAnimation = () => {
      const scrollProps = {
        duration: scrollDuration,
        ease: "linear",
        onComplete: () => {
          if (loop) {
            gsap.set(content, { [direction]: 0 });
            scrollAnimation();
          }
        },
      };

      if (direction === "vertical") {
        gsap.to(content, {
          y: reverse ? content.offsetHeight : -content.offsetHeight,
          ...scrollProps,
        });
      } else if (direction === "horizontal") {
        gsap.to(content, {
          x: reverse ? content.offsetWidth : -content.offsetWidth,
          ...scrollProps,
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          scrollAnimation();
        } else {
          gsap.killTweensOf(content);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
      gsap.killTweensOf(content);
    };
  }, [direction, reverse, loop]);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      <div
        ref={contentRef}
        style={{ whiteSpace: "nowrap" }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
};

export default InfiniteScroller;
