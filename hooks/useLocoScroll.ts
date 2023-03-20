import { useEffect } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";

const useLocoScroll = (start: boolean, ele: HTMLElement | null) => {
  useEffect(() => {
    if (!start) return;
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const dataScrollContainer = document.querySelector(
          "[data-scroll-container]"
        );

        if (!dataScrollContainer) {
          console.warn(
            "locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work."
          );
        }
        //@ts-ignore
        window.locomotive = new LocomotiveScroll({
          // @ts-ignore
          el: dataScrollContainer ?? undefined,
          smooth: true,
          multiplier: 1,
          class: 'is-reveal',
          scrollFromAnywhere: true
        });
      } catch (error) {}
    })();

    // return () => {
    //   //@ts-ignore
    //   window.locomotive?.destroy();
    // };
  }, [start]);
  return;
};

export default useLocoScroll;
