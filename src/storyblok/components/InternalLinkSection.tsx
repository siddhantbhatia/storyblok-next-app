import { InternalLinkSectionStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

interface InternalLinkSectionProps {
  blok: InternalLinkSectionStoryblok;
}

const InternalLinkSection = ({ blok }: InternalLinkSectionProps) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      <h2>{blok.title}</h2>
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
  );
};

export default InternalLinkSection;
