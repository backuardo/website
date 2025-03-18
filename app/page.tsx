import { Posts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter uppercase">
        Ben Eisner{" "}
        <span className="font-normal text-gruvbox-lime text-sm md:text-2xl">
          (a.k.a Backuardo)
        </span>
      </h1>
      <p className="mb-4 text-sm">
        I'm a lead software engineer and emerging red teamer.
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
        Right now, I'm deeply focused on offensive security &mdash; I spend my
        free time finding vulnerabilities and developing exploits. I also
        consult and advise organizations on TTPs for threat defense.
      </p>
      <div className="my-8">
        <Posts />
      </div>
    </section>
  );
}
