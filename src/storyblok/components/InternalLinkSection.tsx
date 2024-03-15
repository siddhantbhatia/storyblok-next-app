import { InternalLinkSectionStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

interface InternalLinkSectionProps {
  blok: InternalLinkSectionStoryblok;
}

const InternalLinkSection = ({ blok }: InternalLinkSectionProps) => {
  return (
    <div className="container mx-auto py-12" {...storyblokEditable(blok)}>
      <h2 className="text-2xl font-bold mb-4">{blok.title}</h2>
      <div className="grid grid-cols-3 gap-3">
        {blok.internal_links.map((internal_link) => (
          <Link
            href={internal_link.href.cached_url ?? ""}
            key={internal_link._uid}
            className="hover:text-blue-500 cursor-pointer"
          >
            {internal_link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InternalLinkSection;
