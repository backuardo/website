export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 uppercase">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 text-sm"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <p className="h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 text-sm"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/backuardo"
          >
            <p className="h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 text-sm"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/backuardo/website"
          >
            <p className="h-7">view source</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300 text-xs">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}
