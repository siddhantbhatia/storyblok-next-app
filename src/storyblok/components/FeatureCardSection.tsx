import { FeatureCardSectionStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

interface FeatureCardSectionProps {
  blok: FeatureCardSectionStoryblok;
}

const FeatureCardSection = ({ blok }: FeatureCardSectionProps) => {
  return (
    <section className="bg-gray-200 py-12" {...storyblokEditable(blok)}>
      <div className="container mx-auto">
        {blok.features.map((feature, idx) => {
          let textOrder;
          if (idx % 2 === 0) {
            textOrder = "order-last";
          } else {
            textOrder = "order-first";
          }

          return (
            <div
              className="min-h-72 flex flex-col sm:flex-row bg-white rounded-lg shadow-md mb-8"
              key={feature._uid}
            >
              <div className="relative w-full sm:w-1/3">
                <Image
                  src={feature.image.filename}
                  alt={feature.image.alt ?? ""}
                  fill={true}
                  className={`w-full h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none`}
                />
              </div>
              <div className={`p-6 w-full sm:w-2/3 ${textOrder}`}>
                <p className="text-xl font-bold mb-4">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCardSection;
