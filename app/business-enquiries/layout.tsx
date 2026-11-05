import type { ReactNode } from "react";

import { PageJsonLd, pageMetadata } from "@/lib/seo";

export const generateMetadata = () => pageMetadata("/business-enquiries");

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageJsonLd path="/business-enquiries" />
      {children}
    </>
  );
}
