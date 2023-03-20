import { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import SplitType from "split-type";
import { gsap } from "gsap";
import useOnScreen from "@/hooks/useOnScreen";

const About = () => {
  const aboutText = useRef(null);
  const [reveal, setReveal] = useState<boolean>(false);
  const onScreen = useOnScreen(aboutText);
  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen)
    } else {
      setReveal(false)
    }
  }, [onScreen])
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (reveal && aboutText.current) {
        const heroTitleSplitType = SplitType.create(aboutText.current ?? "");
        const titleChars = heroTitleSplitType.chars;
        gsap.fromTo(
          titleChars,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.005,
            duration: 1,
            ease: "power2",
          }
        );
      }
    }
  }, [reveal]);
  // const wordAnimation = (item: HTMLElement | any, index: number) => {
  //   $(item).on("mouseenter", function () {
  //     gsap.to(item, {
  //       css: {
  //         mixBlendMode: "difference",
  //       },
  //     });
  //   });
  //   $(item).on("mouseleave", function () {
  //     gsap.to(item, {
  //       css: {
  //         mixBlendMode: "difference",
  //       },
  //     });
  //   });
  // };
  return (
    <>
      <section className={`about-section`} data-scroll-section>
        <SectionHeader title="About" />
        <p id="headline" className={`text-[70px] leading-[1.25] overflow-hidden ${reveal && 'is-reveal'}`} ref={aboutText}>
          Flirty Flowers are very soft, do not &quot;Touch&quot; them with hard hands...
          Similarly &quot;Feelings&quot; are like soft flowers, do not &quot;Touch&quot; them with
          harsh words... God opens millions of flowers without forcing the buds,
          it reminds us not to force anything for things happen in the right
          time.
        </p>
      </section>
    </>
  );
};

export default About;
