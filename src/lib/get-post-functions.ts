import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "src", "app", "blog", "_posts");

export type FrontMatter = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
};

export type Post = {
  meta: {
    title: string;
    date: string;
    author: string;
    excerpt: string;
    tags: string[];
    slug: string;
  };
  content: string;
} | null;

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const postPath = path.join(rootDirectory, `${realSlug}.mdx`);
  //if someone tries to access a path without a matching slug
  if (!fs.existsSync(postPath)) {
    return null;
  }
  const postContent = fs.readFileSync(postPath, "utf-8");
  const { data, content } = await matter(postContent);
  const frontmatter: FrontMatter = data as FrontMatter;
  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export async function getAllPostsMeta() {
  const files = fs.readdirSync(rootDirectory);
  let posts = [];

  for (const file of files) {
    const post = await getPostBySlug(file);
    if (!post) {
      throw new Error(`Post not found: ${file}`);
    }
    const { meta } = post;
    posts.push(meta);
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}
