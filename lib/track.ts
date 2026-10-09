declare global {
  interface Window {
    mtrack?: (event: string) => void;
  }
}

/** Report a submitted form as a lead to the Montis dashboard (script loaded in app/layout.tsx). */
export function trackLead() {
  if (typeof window !== "undefined" && window.mtrack) window.mtrack("lead");
}
