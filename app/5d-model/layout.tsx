import type { ReactNode } from "react";

import { PageJsonLd, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("/5d-model");

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageJsonLd path="/5d-model" />
      {children}
    </>
  );
}
