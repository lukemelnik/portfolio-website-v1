import React from "react";
import Image from "next/image";

export default function BlogImage({ src, alt }: { src: string; alt: string }) {
  return <Image alt={alt} src={src} width={650} height={400} priority={true} />;
}
