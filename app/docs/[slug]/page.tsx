import { getAllMdxFiles, getMdxBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { MDXComponents } from "mdx/types";

// Ain't really gonna use it but who knows
interface PageProps {
  params: Promise<{ slug: string }>;
}

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-semibold mb-3 mt-6">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mb-2 mt-4">{children}</h3>
  ),
  p: ({ children }) => <p className="mb-4 text-muted-foreground">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
  code: ({ children }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4">
      {children}
    </blockquote>
  ),
};

export async function generateStaticParams() {
  const files = getAllMdxFiles();
  return files.map((file) => ({
    slug: file.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const { metadata } = getMdxBySlug(slug);
    return {
      title: metadata.title,
      description: metadata.description,
    };
  } catch {
    return {
      title: "Not Found",
    };
  }
}

export default async function MdxPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    const { content, metadata } = getMdxBySlug(slug);

    return (
      <div className="flex">
        <div className="flex-1 px-8 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
            {metadata.description && (
              <p className="text-xl text-muted-foreground">
                {metadata.description}
              </p>
            )}
          </div>
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote source={content} components={components} />
          </article>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
