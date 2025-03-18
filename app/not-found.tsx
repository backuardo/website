export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter uppercase">
        404{" "}
        <span className="font-normal text-gruvbox-lime text-sm md:text-2xl">
          (page not found)
        </span>
      </h1>
      <p className="mb-4 text-sm">
        The page you are looking for does not exist.
      </p>
    </section>
  );
}
