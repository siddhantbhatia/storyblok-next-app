"use client";

import { useState } from "react";

import {
  FaqSectionStoryblok,
  FaqStoryblok,
} from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";

interface FaqSectionProps {
  blok: FaqSectionStoryblok;
}

type AccordionProps = Pick<FaqStoryblok, "question" | "answer">;

const Accordion = ({ question, answer }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b border-gray-300 py-4 px-4 cursor-pointer transition duration-300 hover:bg-gray-50 ${
        open ? "bg-gray-50" : ""
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <div
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <p itemProp="name" className="text-lg font-semibold">
            {question}
          </p>
        </div>
      </div>

      <div
        className={`mt-2 ${open ? "block" : "hidden"}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = ({ blok }: FaqSectionProps) => {
  return (
    <div className="py-12 bg-slate-200" {...storyblokEditable(blok)}>
      <div className="px-4 sm:px-0 sm:container mx-auto ">
        <h2 className="text-2xl font-bold mb-4">{blok.title}</h2>
        <div className="flex flex-col gap-4">
          {blok.question_answers.map((item) => (
            <Accordion
              key={item._uid}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
