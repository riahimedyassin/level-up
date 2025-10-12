"use client"
import GettingStartedContent from "@/content/getting-started.mdx";

export default function HomePage() {
  return (
    <div className="flex">
      <div className="flex-1 px-8 py-8 max-w-4xl">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <GettingStartedContent />
        </article>
      </div>
    </div>
  );
}
