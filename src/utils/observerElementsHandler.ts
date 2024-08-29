export function observeElementInView(
  element: Element,
  callback: () => void,
  loop: boolean = false
) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        callback();
        if (!loop) {
          observer.disconnect(); // Stop observing after first intersection
        }
      }
    },
    { threshold: 0.6 } // Trigger when 10% of the element is visible
  );

  observer.observe(element);

  return () => observer.disconnect(); // Return a cleanup function
}
