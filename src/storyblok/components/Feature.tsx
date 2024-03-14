import { storyblokEditable } from "@storyblok/react/rsc";
import { FeatureStoryblok } from "@/storyblok/types/component-types-sb";

interface FeatureProps {
  blok: FeatureStoryblok;
}

const Feature = ({ blok }: FeatureProps) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
