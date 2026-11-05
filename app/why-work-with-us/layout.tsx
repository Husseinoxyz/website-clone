import type { Metadata } from "next";
import type { ReactNode } from "react";

import { noIndex } from "@/lib/seo";

export const metadata: Metadata = noIndex("Why Work With Us");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
