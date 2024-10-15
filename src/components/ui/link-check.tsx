"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex pt-10 justify-center items-center">
      <LinkPreview url="https://github.com/rahulbuilds" className="font-bold">
        GitHub
        </LinkPreview>{" "}
        <LinkPreview url="https://x.com/rahulbuilds" className="font-bold">
          X
        </LinkPreview>{" "}
    </div>
  );
}
