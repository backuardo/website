import { CustomMDX } from "app/components/mdx";

export const metadata = {
  title: "Now",
  description: "What I am working on right now, updated ~monthly.",
};

const markdownContent = `
  *Last updated: 18-MAR-2025*

  ### 1. New exploit posts
  Last week, I [kicked off a series of exploit posts](https://beneisner.io/workbench/exploiting-cve-2025-27152) &mdash; picking an interesting CVE, building a self-contained proof-of-concept, and writing about it.
  Over the next ~two weeks, I'll be working on two more of these posts based on recent CVEs that caught my eye.

  ### 2. RTFM and being intentional with LLM
  _"Desirable difficulty"_, a term coined by psychologist Robert Bjork, suggests that learning is more effective when it involves some level of challenge or effort.
  I've noticed myself RTFM less, and asking an LLM for assistance on scripting/coding tasks more over the last few months.
  While this is efficient, I feel like I've been missing out on some of the cognitive load that leads to _actual_ learning.

  Lately, I've become more intentional about when, why, and how I reference an LLM for such tasks, vs. consulting the documentation.

  ### 3. Bash refresh
  Tied to my RTFM vs. LLM shift, I realized my Bash scripting was getting rusty (which pains me).
  This month I've been refreshing and leveling-up my Bash skills &mdash; writing recon and exploit scripts during CTF challenges.

  ### 4. Road to CPTS and OSCP
  I'm a few months into preparing for CPTS (Certified Penetration Testing Specialist) and OSCP (Offensive Security Certified Professional), and the grind continues.
`;

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter uppercase">
        Now{" "}
        <span className="font-normal text-gruvbox-lime text-sm md:text-2xl">
          (18-MAR-25)
        </span>
      </h1>
      <p className="mb-4 text-sm">
        What I am working on right now, updated ~monthly.
      </p>
      <article className="prose">
        <CustomMDX source={markdownContent} />
      </article>
    </section>
  );
}
