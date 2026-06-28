import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { HomeView } from "@/components/home/HomeView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/home");

export default function MiInicioPage() {
  return (
    <PageShell>
      <HomeView />
    </PageShell>
  );
}
