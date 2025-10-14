import { TableOfContents } from "@/components/table-of-content";
import Challenges from "@/content/challenges.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LevelUP | Challenges",
};

export default function DocsPage() {
  const sections = [
    { id: "funding", title: "Funding" },
    { id: "logistics", title: "Logistics" },
    { id: "recruiting ", title: "Recruiting" },
    { id: "infrastructure", title: "Infrastructure" },
    { id: "engagement", title: "Engagement" },
    { id: "partnership", title: "Partnership" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-8 py-8 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <Challenges />
        </article>
      </div>
      <TableOfContents sections={sections} />
    </div>
  );
}
