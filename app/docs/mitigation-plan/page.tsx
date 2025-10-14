import { TableOfContents } from "@/components/table-of-content";
import MitigationPlan from "@/content/mitigation-plan.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LevelUP | Mitigation Plan",
};

export default function DocsPage() {
  const sections = [
    { id: "digital-hubs", title: "Digital Learning Hubs" },
    { id: "skills-development", title: "Skills Development" },
    { id: "mentorship", title: "Mentorship Network" },
    { id: "partnerships", title: "Public-Private Partnerships" },
    { id: "infrastructure", title: "Infrastructure Advocacy" },
    { id: "advocacy", title: "Awareness Campaigns" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 lg:px-8 py-8 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <MitigationPlan />
        </article>
      </div>
      <TableOfContents sections={sections} />
    </div>
  );
}
