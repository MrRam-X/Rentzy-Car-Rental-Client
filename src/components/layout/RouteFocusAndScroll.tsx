// src/components/RouteScrollAndFocus.tsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Props:
 * - scrollTo?: "top" | string (CSS selector of element to scroll into view)
 * - behavior?: ScrollBehavior ("auto" or "smooth")
 * - focusSelector?: string (CSS selector to move focus to; defaults to main landmark)
 */
type Props = {
  scrollTo?: "top" | string;
  behavior?: ScrollBehavior;
  focusSelector?: string;
};

export default function RouteScrollAndFocus({
  scrollTo = "top",
  behavior = "auto",
  focusSelector = "main",
}: Props) {
  const { pathname } = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    // Skip on initial mount if you want browser to control initial position.
    if (firstRun.current) {
      firstRun.current = false;
      // still scroll to top on first navigation if desired:
      // return;
    }

    // 1) Scroll handling
    if (scrollTo === "top") {
      window.scrollTo({ top: 0, left: 0, behavior });
    } else {
      const el = document.querySelector(scrollTo);
      if (el) {
        // prefer scrollIntoView if target exists
        (el as HTMLElement).scrollIntoView({ behavior, block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior });
      }
    }

    // 2) Focus handling (a11y)
    const focusEl = document.querySelector(focusSelector) as HTMLElement | null;
    if (focusEl) {
      // ensure element is focusable
      const hadTabIndex = focusEl.hasAttribute("tabindex");
      if (!hadTabIndex) {
        focusEl.setAttribute("tabindex", "-1");
      }
      focusEl.focus({ preventScroll: true });
      // remove tabindex if we added it (optional keep depends on your app)
      if (!hadTabIndex) {
        // small timeout to allow focus to settle then remove
        window.setTimeout(() => focusEl.removeAttribute("tabindex"), 0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, scrollTo, behavior, focusSelector]);

  return null;
}