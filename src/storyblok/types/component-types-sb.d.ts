import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface AnchorStoryblok {
  label: string;
  href: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "anchor";
  [k: string]: any;
}

export interface FaqStoryblok {
  question: string;
  answer: string;
  _uid: string;
  component: "faq";
  [k: string]: any;
}

export interface FaqSectionStoryblok {
  title: string;
  question_answers: FaqStoryblok[];
  _uid: string;
  component: "faq_section";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface FeatureCardStoryblok {
  title: string;
  description: string;
  image: AssetStoryblok;
  _uid: string;
  component: "feature_card";
  [k: string]: any;
}

export interface FeatureCardSectionStoryblok {
  features: FeatureCardStoryblok[];
  _uid: string;
  component: "feature_card_section";
  [k: string]: any;
}

export interface FooterStoryblok {
  trademark: string;
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | AnchorStoryblok
    | FaqStoryblok
    | FaqSectionStoryblok
    | FeatureStoryblok
    | FeatureCardStoryblok
    | FeatureCardSectionStoryblok
    | FooterStoryblok
    | GridStoryblok
    | HeaderStoryblok
    | HeroStoryblok
    | InternalLinkStoryblok
    | InternalLinkSectionStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeaderStoryblok {
  logo: AssetStoryblok;
  nav_links?: AnchorStoryblok[];
  cta?: AnchorStoryblok[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HeroStoryblok {
  title: string;
  subtitle: string;
  background_image: AssetStoryblok;
  cta_label?: string;
  cta_href?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface InternalLinkStoryblok {
  label?: string;
  href: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "internal_link";
  [k: string]: any;
}

export interface InternalLinkSectionStoryblok {
  title: string;
  internal_links: InternalLinkStoryblok[];
  _uid: string;
  component: "internal_link_section";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AnchorStoryblok
    | FaqStoryblok
    | FaqSectionStoryblok
    | FeatureStoryblok
    | FeatureCardStoryblok
    | FeatureCardSectionStoryblok
    | FooterStoryblok
    | GridStoryblok
    | HeaderStoryblok
    | HeroStoryblok
    | InternalLinkStoryblok
    | InternalLinkSectionStoryblok
    | PageStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
