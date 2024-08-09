"use client";

import React, { createContext, useContext, useState } from "react";
export type ActiveSectionContextType = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selected, setSelected] = useState<string>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{ selected, setSelected, setTimeOfLastClick, timeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// this custom hook checks for the null condition and throws an error in case someone tries to use it outside of the context provider.
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider",
    );
  }
  return context;
}
