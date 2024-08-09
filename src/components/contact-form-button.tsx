"use client";
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import PaperAirplaneIcon from "./icons/paper-airplane-icon";

export default function ContactFormButton() {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <Button disabled className="w-36 rounded-xl group relative">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </Button>
    );
  }
  return (
    <Button className="w-36 rounded-xl group relative mt-3">
      <span className="text-base">Submit</span>
      <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 -rotate-45 duration-500 relative -top-[1px]">
        <PaperAirplaneIcon />
      </span>
    </Button>
  );
}
