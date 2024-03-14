import { HeaderStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

interface HeaderComponentProps {
  blok: HeaderStoryblok;
}

const Header = ({ blok }: HeaderComponentProps) => {
  return (
    <nav className="bg-gray-900 text-white p-4" {...storyblokEditable(blok)}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={blok.logo?.filename}
            alt={blok.logo?.alt}
            className="h-8 mr-4"
          />
        </div>
        <div className="flex">
          {blok.nav_links && (
            <ul className="flex">
              {blok.nav_links.map((navLink) => (
                <li
                  className="mr-4 hover:text-blue-500 cursor-pointer"
                  key={navLink._uid}
                >
                  <Link href={navLink.href.url}>{navLink.label}</Link>
                </li>
              ))}
            </ul>
          )}
          {blok.cta?.map((button) => (
            <Link
              key={button._uid}
              href={button.href.cached_url ?? ""}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
