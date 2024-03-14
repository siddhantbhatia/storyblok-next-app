import { FeatureCardSectionStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";

interface FeatureCardSectionProps {
  blok: FeatureCardSectionStoryblok;
}

const FeatureCardSection = ({ blok }: FeatureCardSectionProps) => {
  return (
    <section className="bg-gray-200 py-12" {...storyblokEditable(blok)}>
      <div className="container mx-auto">
        {blok.features.map((feature, idx) => {
          return (
            <div
              className="bg-white rounded-lg shadow-md mb-8"
              key={feature._uid}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3">
                  <Image
                    src={feature.image.filename}
                    alt={feature.image.alt ?? ""}
                    height={200}
                    width={200}
                    className="w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                  />
                </div>
                <div className="p-6 w-full sm:w-2/3">
                  <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCardSection;
