import { useEffect, useState } from "react";

const useOnScreen = (ref: any, threshold = 0.3) => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry?.isIntersecting ?? false)
        }, {
            rootMargin: "0px",
            threshold
        })
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef)
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [ref, threshold])
    return isIntersecting;
}

export default useOnScreen;