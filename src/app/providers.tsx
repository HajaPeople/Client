"use client";

import * as React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export function Providers({
  children,
  pageProps,
}: React.PropsWithChildren & AppProps["pageProps"]) {
  return (
    <SessionProvider session={pageProps?.session}>{children}</SessionProvider>
  );
}
