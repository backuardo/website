import NextLink from "next/link";
import { ArrowElbowRightUp } from "@phosphor-icons/react/dist/ssr";

import { classNames } from "../utils/class-names";

const linkClassName =
  "transition-all hover:text-neutral-500 flex align-middle relative";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function InternalLink({
  href,
  children,
  className = "",
  ...props
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={classNames(linkClassName, className)}
      {...props}
    >
      [{children}]
    </NextLink>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={classNames(linkClassName, className)}
      {...props}
    >
      [{children} <ArrowElbowRightUp weight="bold" className="ml-0.5 mt-0.5" />]
    </a>
  );
}
