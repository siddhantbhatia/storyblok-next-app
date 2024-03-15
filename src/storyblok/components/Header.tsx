import { HeaderStoryblok } from "@/storyblok/types/component-types-sb";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

interface HeaderComponentProps {
  blok: HeaderStoryblok;
}

const Header = ({ blok }: HeaderComponentProps) => {
  return (
    <nav
      className="bg-gray-900 text-white p-4 h-20"
      {...storyblokEditable(blok)}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={blok.logo.filename}
          alt={blok.logo.alt ?? ""}
          height={60}
          width={60}
          className="rounded-md"
          priority={true}
        />

        <div className="hidden md:flex">
          {blok.nav_links && (
            <ul className="flex items-center">
              {blok.nav_links.map((navLink) => (
                <li
                  className="mr-4 hover:text-blue-500 cursor-pointer"
                  key={navLink._uid}
                >
                  <Link href={navLink.href.cached_url ?? ""}>
                    {navLink.label}
                  </Link>
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
