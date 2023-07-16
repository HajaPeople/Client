"use client";

import { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-white fixed top-0 left-0 right-0 flex items-center justify-center h-[48px] border-b border-b-gray-200">
        헤더
      </header>
      <main className="pt-[48px] pb-[56px] h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
