import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import $ from "jquery";

const Header = () => {
  const heroTitle = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (heroTitle.current) {
        // getting elements
        const heroTitleSplitType = SplitType.create(heroTitle.current ?? "");
        // getting elements chars
        const titleChars = heroTitleSplitType.chars;
        // title reveal animation
        gsap.fromTo(
          titleChars,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 2,
            ease: "power2",
          }
        );
      }
    }
  }, []);
  //   useEffect(() => {
  //     const split = new SplitText("#header-text", {
  //       type: "lines",
  //       linesClass: "lineChildren",
  //     });
  //     const splitParent = new SplitText("#header-text", {
  //       type: "lines",
  //       linesClass: "lineParent",
  //     });
  //     gsap.to(split.lines, {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.1,
  //       duration: 2,
  //       ease: "power4.out",
  //     });
  //   }, []);
  return (
    <>
      <section className="header-container relative" data-scroll-section>
        <ul className="header-menu absolute left-0 top-[100px] tracking-[1px] font-syncopateBold text-[#626262] uppercase z-[99999]">
          <li className="my-[10px]">Intro</li>
          <li className="my-[10px]">About</li>
          <li className="my-[10px]">Featured</li>
        </ul>
        <h1
          id="header-text"
          className="text-[18vw] uppercase text-center font-baiJamjureeSemiBold600 leading-[16vw] flex flex-col justify-center items-center overflow-hidden"
          ref={heroTitle}
        >
          Art Objects
        </h1>
      </section>
    </>
  );
};

export default Header;
