"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type SectionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  sectionId: string;
};

export const SectionLink = ({ sectionId, onClick, ...props }: SectionLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey || window.location.pathname !== "/") return;
    const target = document.getElementById(sectionId);
    if (!target) return;
    event.preventDefault();
    const url = new URL(window.location.href);
    url.hash = sectionId;
    window.history.pushState(null, "", url.pathname + url.search + url.hash);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (target.hasAttribute("tabindex")) target.focus({ preventScroll: true });
  };
  return <a {...props} href={"/#" + sectionId} onClick={handleClick} />;
};
