import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import $ from "jquery";

const CustomCursor = () => {
  const ball = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ball scroll animation
      gsap.set(ball.current, { xPercent: -50, yPercent: -50, zIndex: 99999 });
      // gsap.to(ball.current, 3, {rotation:"360", ease: 'Linear.easeNone', repeat:1});
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.2;
      const xSet = gsap.quickSetter(ball.current, "x", "px");
      const ySet = gsap.quickSetter(ball.current, "y", "px");
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
      // mouseenter scaling
      $(".link").on("mouseenter", function () {
        gsap.to(ball.current, { scale: 1.5, duration: 0.5 });
      });
      $(".link").on("mouseleave", function () {
        gsap.to(ball.current, { scale: 1, duration: 0.5 });
      });
    }
  }, []);
  return (
    <>
      {/* <div className="custom-cursor"></div> */}
      <div className="ball" ref={ball}></div>
    </>
  );
};

export default CustomCursor;
