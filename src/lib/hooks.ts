"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// custom hook that checks if a section is in view and sets the selected state for the header. Used a custom hook so that the code isn't repeated on each new component.
export function useSectionInView(sectionName: string, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setSelected, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setSelected(sectionName);
    }
  }, [inView, setSelected, timeOfLastClick, sectionName]);

  return { ref };
}
