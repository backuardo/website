import Link from "next/link";
import { File } from "@phosphor-icons/react/dist/ssr";

import { formatDate, getBlogPosts } from "app/workbench/utils";

export function Posts() {
  let allBlogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  );

  return (
    <div className="bg-neutral-50 border-1 border-neutral-200 p-2 space-y-4">
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1"
          href={`/workbench/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 text-sm align-center text-xs">
            <File weight="bold" className="text-green-500 mt-0.5" />
            <p className="text-neutral-600 w-[100px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
