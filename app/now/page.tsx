import { CustomMDX } from "app/components/mdx";

export const metadata = {
  title: "Now",
  description: "/now page, updated ~monthly.",
};

const markdownContent = `
  This is my [/now](https://nownownow.com/about) page, updated ~monthly.

  *Last updated: 18-APR-2025*

  ### 1. Exploit proofs-of-concept
  Last month, I [kicked off a series of exploit posts](https://beneisner.io/workbench/exploiting-cve-2025-27152) &mdash; picking an interesting CVE, building a self-contained proof-of-concept, and writing about it.
  Over the next few weeks, I'll be working on more of these posts based on recent CVEs that caught my eye.

  ### 2. RTFM and being intentional with LLMs
  _"Desirable difficulty"_, a term coined by psychologist Robert Bjork, suggests that learning is more effective when it involves some level of challenge or effort.
  I've noticed myself RTFM less, and asking an LLM for assistance on scripting/coding tasks more over the last few months.
  While this is efficient, I feel like I've been missing out on some of the cognitive load that leads to _actual_ learning.

  Lately, I've become more intentional about when, why, and how I reference an LLM for such tasks, vs. consulting the documentation.

  ### 3. CPTS and OSCP prep
  I'm a few months into preparing for CPTS (Certified Penetration Testing Specialist) and OSCP (Offensive Security Certified Professional).
`;

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter uppercase">
        Now{" "}
        <span className="font-normal text-gruvbox-lime text-sm md:text-2xl">
          (18-APR-25)
        </span>
      </h1>
      <article className="prose">
        <CustomMDX source={markdownContent} />
      </article>
    </section>
  );
}
