"use client";

import dynamic from "next/dynamic";
import type { DarkVeilProps } from "./DarkVeilInner";

const DarkVeilInner = dynamic(() => import("./DarkVeilInner"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#00050a]/10" />
});

export default function DarkVeil(props: DarkVeilProps) {
  return <DarkVeilInner {...props} />;
}
