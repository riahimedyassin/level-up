import type React from "react";
export function DocsContent({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-slate dark:prose-invert">
      {children}
    </article>
  );
}
