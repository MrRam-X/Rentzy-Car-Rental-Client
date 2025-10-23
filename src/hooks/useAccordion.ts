import { useCallback, useEffect, useRef, useState } from "react";

const useAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<string[]>(Array(length).fill("0px"));

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const isOpen = useCallback(
    (index: number) => openIndex === index,
    [openIndex]
  );

  // Update heights whenever openIndex changes or window resizes
  useEffect(() => {
    const updateHeights = () => {
      const newHeights = contentRefs.current.map((ref, idx) => {
        if (ref && openIndex === idx) {
          return `${ref.scrollHeight}px`;
        }
        return "0px";
      });
      setHeights(newHeights);
    };

    updateHeights(); // run immediately

    window.addEventListener("resize", updateHeights);

    // Cleanup: remove listener on unmount
    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, [openIndex]);

  return { isOpen, toggle, contentRefs, heights };
};

export default useAccordion;
