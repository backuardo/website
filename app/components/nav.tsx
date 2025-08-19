"use client";

import { usePathname } from "next/navigation";
import { InternalLink } from "app/components/link";

import { Logo } from "./logo";

const NAV_ITEMS = {
  "/": {
    name: "home",
  },
  "/workbench": {
    name: "workbench",
  },
};

export function Navbar() {
  const pathname = usePathname();

  const getBreadcrumb = () => {
    let breadcrumb = "~";
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `${breadcrumb}/HOME`;
    }

    const formattedSegments = segments.map((segment) =>
      segment.toUpperCase().replace(/ /g, "-"),
    );

    if (pathname === "/") {
      return `${breadcrumb}/HOME`;
    }

    return `${breadcrumb}/${formattedSegments.join("/")}`;
  };

  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 space-y-4">
        <a href="/">
          <Logo className="-ml-1" />
        </a>
        <nav
          className="flex flex-row items-start relative fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row uppercase w-full justify-between items-center text-sm">
            <div className="flex flex-row space-x-2">
              {Object.entries(NAV_ITEMS).map(([path, { name }]) => (
                <InternalLink
                  key={path}
                  href={path}
                  className={
                    pathname === path ||
                    (path !== "/" && pathname.startsWith(path))
                      ? "font-bold !text-gruvbox-orange"
                      : ""
                  }
                >
                  {name}
                </InternalLink>
              ))}
            </div>
            <span className="flex align-middle relative text-gruvbox-lime text-xs">
              {getBreadcrumb()}
            </span>
          </div>
        </nav>
      </div>
    </aside>
  );
}
