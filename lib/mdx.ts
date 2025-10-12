import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface MdxMetadata {
  title: string;
  description: string;
  slug: string;
}

export function getAllMdxFiles(): MdxMetadata[] {
  const files = fs.readdirSync(contentDirectory);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      
      return {
        title: data.title || slug,
        description: data.description || "",
        slug,
      };
    });
}

export function getMdxBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  
  return {
    metadata: data,
    content,
  };
}
