import { HeroStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

interface HeroComponentProps {
  blok: HeroStoryblok;
}

const Hero = ({ blok }: HeroComponentProps) => {
  return (
    <section className="relative" {...storyblokEditable(blok)}>
      <img
        src={blok.background_image.filename}
        alt={blok.background_image.alt}
        className="w-full h-auto"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl text-white font-bold mb-3">{blok.title}</h1>
          <p className="text-4xl text-white font-light">{blok.subtitle}</p>
          <Link href={blok.cta_href?.url}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
              {blok.cta_label}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
