import type { ReactNode } from "react";

import { PageJsonLd, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("/training");

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageJsonLd path="/training" />
      {children}
    </>
  );
}
