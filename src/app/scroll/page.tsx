"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteImageScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs after the component is mounted
  }, []);

  useEffect(() => {
    if (!isClient) return; // Prevent execution on the server

    const images = [
      "/assets/images/banner.png",
      "/assets/images/banner.png",
      "/assets/images/banner.png",
    ];

    const container = containerRef.current;
    const totalImages = images.length;

    if (container) {
      let currentIndex = 0;

      gsap.to(container, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom+=1000 top",
          scrub: 1,
          onUpdate: (self) => {
            const newIndex =
              Math.floor(self.progress * totalImages) % totalImages;

            if (newIndex !== currentIndex) {
              gsap.to(container.children[currentIndex], {
                opacity: 0,
                duration: 1,
              });
              gsap.to(container.children[newIndex], {
                opacity: 1,
                duration: 1,
              });
              currentIndex = newIndex;
            }
          },
        },
      });
    }
  }, [isClient]);

  if (!isClient) return null; // Render nothing on the server

  return (
    <div style={{ height: "300vh" }}>
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {["/assets/images/banner.png", "/assets/images/logo.png"].map(
          (src, index) => (
            <div
              key={index}
              className="image"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: index === 0 ? 1 : 0,
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default InfiniteImageScroll;
