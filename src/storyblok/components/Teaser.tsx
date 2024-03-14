import { TeaserStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";

interface TeaserProps {
  blok: TeaserStoryblok;
}

const Teaser = ({ blok }: TeaserProps) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
