import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
          404
        </p>

        <h1 className="mt-5 text-6xl font-light">
          Page Not Found
        </h1>

        <p className="mt-5 text-slate-400">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block border border-[#C5A880] px-6 py-3 text-sm text-[#C5A880] transition hover:bg-[#C5A880] hover:text-[#07111F]"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;