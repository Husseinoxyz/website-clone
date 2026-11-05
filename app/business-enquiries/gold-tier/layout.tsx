import type { Metadata } from "next";
import type { ReactNode } from "react";

import { noIndex } from "@/lib/seo";

export const metadata: Metadata = noIndex("Gold Tier Partnership");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
