import {
  PageStoryblok,
  SeoMetaTagsStoryblok,
} from "@/storyblok/types/component-types-sb";
import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import { Metadata } from "next";
import { headers } from "next/headers";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const domain = headersList.get("host");

  const url = `https://${domain}`;

  const { data } = await getStoryblokApi().get(
    `cdn/stories/home`,
    { version: "draft" },
    {
      cache: "no-store",
    }
  );

  const body = (data.story.content as PageStoryblok).body?.filter(
    (contentBlock) => contentBlock.component === "seo_meta_tags"
  );

  if (!body || !body.length) {
    return {};
  }

  const seoMetaTagsContent = body[0] as SeoMetaTagsStoryblok;

  return {
    title: seoMetaTagsContent.page_title,
    description: seoMetaTagsContent.page_desription,
    openGraph: {
      title: seoMetaTagsContent.og_title,
      description: seoMetaTagsContent.og_description,
      images: seoMetaTagsContent.og_image.filename,
      type: "website",
      url: url,
    },
    alternates: {
      canonical: url,
    },
  };
}
