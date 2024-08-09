"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import React from "react";

export default function HomeLink({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  const { selected, setSelected, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div
      onClick={() => {
        setSelected("Home");
        setTimeOfLastClick(Date.now());
      }}
      className={`text-3xl font-bold ${selected === "Home" ? "text-pink-700" : ""}`}
    >
      <Link href={link}>
        <span className="tracking-wide">{name}</span>
      </Link>
    </div>
  );
}
