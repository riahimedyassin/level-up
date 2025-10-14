import { TableOfContents } from "@/components/table-of-content";
import ProblemStatement from "@/content/problem-statement.mdx";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "LevelUP | SDGS",
};

export default function DocsPage() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "root-causes", title: "Major Root Causes" },
    { id: "conclusion", title: "Conclusion" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 lg:px-8 py-8 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <ProblemStatement />
        </article>
      </div>
      <TableOfContents sections={sections} />
    </div>
  );
}
