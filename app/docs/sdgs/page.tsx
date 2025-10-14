import { TableOfContents } from "@/components/table-of-content";
import SDGS from "@/content/sdgs.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LevelUP | SDGS",
};

export default function DocsPage() {
  const sections = [
    { id: "sdgs", title: "Sustainable Development Goals" },
    { id: "sdg-10", title: "SDG 10" },
    { id: "why-sdg-10", title: "Why SDG 10" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 lg:px-8 py-8 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <SDGS />
        </article>
      </div>
      <TableOfContents sections={sections} />
    </div>
  );
}
