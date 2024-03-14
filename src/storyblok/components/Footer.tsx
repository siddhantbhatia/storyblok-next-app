import { FooterStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react";

interface FooterComponentProps {
  blok: FooterStoryblok;
}

const Footer = ({ blok }: FooterComponentProps) => {
  return (
    <div
      className="px-5 py-12 mx-auto bg-gray-50  sm:px-6 md:flex md:items-center md:justify-between lg:px-20"
      {...storyblokEditable(blok)}
    >
      <div className="mt-8 md:mt-0 md:order-1">
        <span className="mt-2 text-sm font-light text-gray-500">
          {blok.trademark}
        </span>
      </div>
    </div>
  );
};

export default Footer;
