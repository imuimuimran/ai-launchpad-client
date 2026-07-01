"use client";

import { usePathname } from "next/navigation";

export default function PageTitle() {
  const pathname = usePathname();

  const title =
    pathname
      .split("/")
      .pop()
      ?.replace("-", " ");

  return (
    <h1 className="text-2xl font-bold capitalize">
      {title === "dashboard"
        ? "Overview"
        : title}
    </h1>
  );
}