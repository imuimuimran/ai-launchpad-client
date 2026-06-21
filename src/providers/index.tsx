"use client";

import { ReactNode } from "react";

import QueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import SonnerProvider from "./sonner-provider";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
        <SonnerProvider />
      </QueryProvider>
    </ThemeProvider>
  );
}