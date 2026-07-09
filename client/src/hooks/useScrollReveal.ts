import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
