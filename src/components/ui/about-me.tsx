import React from "react";
import { FlipWords } from "../ui/flip-words";


export function FlipWordsDemo() {
  const words = ["a Deep Thinker","an Indie Hacker", "a Versatile Engineer", "an Esotericist", "a First Principles Thinker","an Aspiring Stoic"];

  return (
    <div className="justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      <FlipWords words={words} />
      </div>
    </div>
  );
}
