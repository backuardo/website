import { Posts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter uppercase">
        Ben Eisner <span className="font-normal">(a.k.a Backuardo)</span>
      </h1>
      <p className="mb-4 text-sm">
        I'm a software engineer with a broad toolkit, now specializing in
        offensive security.
      </p>
      <p className="mb-4 text-sm">
        I began programming while serving as an infantry squad leader (0331) in
        the US Marine Corps. After my service, I studied computer science at
        Dartmouth College and built early-stage products in the startup
        ecosystem. From 2017 to 2023, I was an early engineer at Cameo, where I
        helped scale the platform to millions of users and later led its crypto
        initiatives. Currently, I'm the lead engineer at Cedar, a seed-stage
        startup developing the operating system for urban development.
      </p>
      <p className="mb-4 text-sm">
        My current focus is offensive security &mdash; developing custom tooling
        and exploitation techniques. I'm actively pursuing CPTS and OSCP
        certifications to deepen my knowledge of system security and adversarial
        tactics.
      </p>
      <div className="my-8">
        <Posts />
      </div>
    </section>
  );
}
