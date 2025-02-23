import { ExternalLink, InternalLink } from "app/components/link";

const FOOTER_ITEMS = [
  {
    href: "/rss",
    children: "rss",
    Component: InternalLink,
  },
  {
    href: "https://github.com/backuardo",
    children: "github",
    Component: ExternalLink,
  },
  {
    href: "https://github.com/backuardo/website",
    children: "view source",
    Component: ExternalLink,
  },
];

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col md:space-x-2 space-y-2 uppercase md:flex-row md:space-y-0">
        {FOOTER_ITEMS.map(({ href, children, Component }) => (
          <li key={href}>
            <Component href={href} className="text-xs">
              {children}
            </Component>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs">
        © {new Date().getFullYear()} Backuardo Labs LLC
      </p>
    </footer>
  );
}
