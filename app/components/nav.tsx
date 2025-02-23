"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
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
      segment.toUpperCase().replace(/ /g, "-")
    );

    if (pathname === "/") {
      return `${breadcrumb}/HOME`;
    }

    return `${breadcrumb}/${formattedSegments.join("/")}`;
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row uppercase w-full justify-between items-center text-sm">
            <div className="flex flex-row">
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-300 flex align-middle relative px-1`}
                >
                  [{name}]
                </Link>
              ))}
            </div>
            <span className="flex align-middle relative px-2 text-neutral-500 text-xs">
              {getBreadcrumb()}
            </span>
          </div>
        </nav>
      </div>
    </aside>
  );
}
