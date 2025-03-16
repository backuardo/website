import { Posts } from "app/components/posts";

/**
 * - Aspiring red teamer
 * - In my spare time I like to find vulnerabilities and write exploits.
 */

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter uppercase">
        Ben Eisner{" "}
        <span className="font-normal text-gruvbox-lime">(a.k.a Backuardo)</span>
      </h1>
      <p className="mb-4 text-sm">
        I'm a software tactician and aspiring red teamer.
      </p>
      <p className="mb-4 text-sm">
        I began programming while serving as an infantry squad leader (0331) in
        the US Marine Corps. After my service, I studied computer science at
        Dartmouth College and started getting involved in startups. I was an
        early engineer at Cameo from 2017 to 2023, where I helped scale the
        platform to millions of users and later led its crypto initiatives.
        Currently, I'm the lead engineer at Cedar, a seed-stage startup
        developing the operating system for urban development.
      </p>
      <p className="mb-4 text-sm">
        My current focus is offensive security &mdash; I spend my free time
        finding vulnerabilities and developing exploits. I also consult and
        advise organizations on TTPs for threat defense and incident response.
      </p>
      <div className="my-8">
        <Posts />
      </div>
    </section>
  );
}
