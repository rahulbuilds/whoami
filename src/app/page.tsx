import React from "react";
import { FlipWordsDemo } from "@/components/ui/about-me";
import { FloatingDockDemo } from "@/components/ui/contact-me";


export default function Home() {
  return (
    <main>
      
      <div className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      @RahulBuilds
      </h2>
      <div className="flex justiy-center text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I am
      </div>
      <FlipWordsDemo/>
      </div>
      <FloatingDockDemo/>
    </main>
  );
}



