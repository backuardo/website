import { Posts } from "app/components/posts";

export const metadata = {
  title: "workbench",
  description: "",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter uppercase">
        Workbench
      </h1>
      <p className="mb-4 text-sm">
        {`A collection of ideas, experiments, and helpful snippets.`}
      </p>
      <p className="mb-4 text-sm">
        {`Much of the content here will draw inspiration from the efforts of
					others, including direct references to their work. I'm committed to
					acknowledging their contributions and ensuring proper credit is
					given to the original authors.`}
      </p>
      <Posts />
    </section>
  );
}
