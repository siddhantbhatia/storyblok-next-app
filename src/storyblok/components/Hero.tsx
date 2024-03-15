import { HeroStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

interface HeroComponentProps {
  blok: HeroStoryblok;
}

const Hero = ({ blok }: HeroComponentProps) => {
  return (
    <section className="relative" {...storyblokEditable(blok)}>
      <div className="relative h-[calc(100vh-80px)] w-full">
        <Image
          src={blok.background_image.filename}
          alt={blok.background_image.alt ?? ""}
          fill={true}
          priority={true}
          loading="eager"
          sizes="100vw"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col gap-3 md:p-16 p-8">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-3 text-center">
          {blok.title}
        </h1>
        <p className="text-2xl md:text-3xl text-white font-light text-center">
          {blok.subtitle}
        </p>
        <Link href={blok.cta_href?.cached_url ?? ""}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
            {blok.cta_label}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
