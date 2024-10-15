"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/rahulbuilds",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/rahulbuilds",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[20rem] w-full">
      <FloatingDock
         // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
