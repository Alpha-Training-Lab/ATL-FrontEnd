import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  const fileNames = fs.readdirSync(blogsDirectory);

  return fileNames.map((fileName) => {
    const filePath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: data.slug || fileName.replace(".md", ""),
    };
  });
}

export function getBlogBySlug(slug) {
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}
