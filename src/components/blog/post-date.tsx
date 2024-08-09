import { format } from "date-fns";
import React from "react";

export default function PostDate({ date }: { date: string }) {
  function readableDate(date: string) {
    return format(new Date(date), "MMMM dd, yyyy");
  }

  return <p className="font-bold sm:mr-10">{readableDate(date)}</p>;
}
