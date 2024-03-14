import { GridStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

interface GridProps {
  blok: GridStoryblok;
}

const Grid = ({ blok }: GridProps) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
