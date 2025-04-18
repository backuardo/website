import Link from "next/link";
import { File } from "@phosphor-icons/react/dist/ssr";

import { formatDate, getBlogPosts } from "app/workbench/utils";

export function Posts() {
  let allBlogs = getBlogPosts().sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  );

  return (
    <div>
      <h2 className="mb-4 text-base font-bold tracking-tighter uppercase">
        Recent Posts
      </h2>
      <div className="bg-neutral-900 border-1 border-stone-500/20 p-2 space-y-4">
        {allBlogs.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 group hover:underline-offset-2"
            href={`/workbench/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 text-sm align-center text-xs">
              <div className="flex flex-row space-x-2">
                <File weight="bold" className="text-gruvbox-orange mt-0.5" />
                <p className="w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
              <p className="tracking-tight group-hover:underline group-hover:decoration-stone-300 decoration-[0.05em]">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
