import { Posts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter uppercase">
        Ben Eisner (a.k.a Backuardo)
      </h1>
      <p className="mb-4 text-sm">
        {`I'm a software engineer with a broad toolkit, now honing my offensive security skills.`}
      </p>
      <p className="mb-4 text-sm">
        {`
          I started learning to program while serving as an infantry (0331) squad leader in the US Marine Corps.
          After my service, I studied computer science at Dartmouth College and started getting involved with startups.
          From 2017 to 2023 I was an early engineer at Cameo, helping scale the platform to millions of users and later leading its crypto initiatives. 
          Currently, I'm lead engineer at Cedar, a seed-stage startup building the operating system for urban development.
          Right now I'm targeting CPTS and OSCP to master breaking and securing systems.
        `}
      </p>
      <div className="my-8">
        <Posts />
      </div>
    </section>
  );
}
