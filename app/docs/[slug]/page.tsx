import { getAllMdxFiles, getMdxBySlug } from "@/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MdxRenderer } from "@/components/mdx-renderer";
import { notFound } from "next/navigation";

// Ain't really gonna use it but who knows
interface PageProps {
  params: Promise<{ slug: string }>;
}

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
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    });

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
          <MdxRenderer source={mdxSource} />
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
