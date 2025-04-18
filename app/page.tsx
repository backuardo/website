import { Posts } from "app/components/posts";

const ASCII = `
██████╗  █████╗  ██████╗██╗  ██╗██╗   ██╗ █████╗ ██████╗ ██████╗  ██████╗ 
██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██║   ██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗
██████╔╝███████║██║     █████╔╝ ██║   ██║███████║██████╔╝██║  ██║██║   ██║
██╔══██╗██╔══██║██║     ██╔═██╗ ██║   ██║██╔══██║██╔══██╗██║  ██║██║   ██║
██████╔╝██║  ██║╚██████╗██║  ██╗╚██████╔╝██║  ██║██║  ██║██████╔╝╚██████╔╝
╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ 
`;

export default function Page() {
  return (
    <section>
      <div className="flex flex-col mb-8 uppercase">
        <pre className="text-[0.45rem] leading-[1.25] md:text-xs text-gruvbox-lime">
          {ASCII}
        </pre>
        <h2 className="font-normal text-gruvbox-orange text-sm md:text-xl">
          (a.k.a. Ben Eisner)
        </h2>
      </div>
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
        Right now I'm focused on offensive security &mdash; vulnerability
        research, building automated penetration testing tools and custom
        exploits.
      </p>
      <div className="my-8">
        <Posts />
      </div>
    </section>
  );
}
