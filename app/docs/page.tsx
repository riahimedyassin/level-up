import { TableOfContents } from "@/components/table-of-content";
import GettingStartedContent from "@/content/getting-started.mdx";

export default function DocsPage() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "getting-started", title: "Getting Started" },
    { id: "features", title: "Key Features" },
    { id: "installation", title: "Installation" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-8 py-8 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <GettingStartedContent />
        </article>
      </div>

      <TableOfContents sections={sections} />
    </div>
  );
}
