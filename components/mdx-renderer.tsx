"use client";

import { useMDXComponents } from "@/mdx-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

export function MdxRenderer({ source }: MdxRendererProps) {
  const components = useMDXComponents({});

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </article>
  );
}
