// import SEO from "../../components/seo/Seo";

// function Insights() {
//   return (
//     <>
//       <SEO
//         title="Insights"
//         description="[INSERT VERIFIED INSIGHTS META DESCRIPTION]"
//         canonical="/insights"
//       />

//       <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
//         <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
//           Knowledge
//         </p>

//         <h1 className="mt-5 text-5xl font-light">
//           Insights
//         </h1>

//         <p className="mt-8 text-slate-400">
//           [INSERT VERIFIED INSIGHTS CONTENT]
//         </p>
//       </section>
//     </>
//   );
// }

// export default Insights;


import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import articles from "./Data/Article.json";

function InsightsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111111]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-45"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073c42]/95 via-[#0b5358]/80 to-[#073c42]/20" />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
          Insights
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="mt-5 flex items-center gap-3 text-sm text-white/90"
        >
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <ArrowRight size={15} />
          <span aria-current="page">Insights</span>
        </nav>
      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-slate-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`/insights/${article.id}`}
        aria-label={`Read ${article.title}`}
        className="block aspect-[4/3] overflow-hidden bg-slate-100"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-800">
            {article.category}
          </span>

          <time
            dateTime={article.isoDate}
            className="text-xs text-slate-400"
          >
            {article.date}
          </time>
        </div>

        <h2 className="text-lg font-medium leading-snug text-slate-900">
          <Link
            to={`/insights/${article.id}`}
            className="transition hover:text-teal-800"
          >
            {article.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-5">
          <Link
            to={`/insights/${article.id}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-slate-900 transition hover:text-teal-800"
          >
            Read more
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-100 px-4 py-3 sm:px-5">
        <p className="text-xs text-slate-400">
          {article.date}
        </p>
      </div>
    </article>
  );
}

export default function Insights() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(articles.map((article) => article.category))],
    []
  );

  const filteredArticles = useMemo(() => {
    const search = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesSearch = [
        article.title,
        article.excerpt,
        article.category,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search);

      const matchesCategory =
        category === "All" || article.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [query, category]);

  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <InsightsHero />

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              The journal
            </p>

            <h2 className="mt-2 text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
              Perspectives that matter.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Perspectives on law, business, technology, and the
              questions that shape our changing world.
            </p>
          </div>

          <label className="flex w-full items-center gap-3 border-b border-slate-300 py-3 focus-within:border-teal-800 lg:max-w-xs">
            <Search size={18} className="shrink-0 text-black" />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search insights..."
              aria-label="Search articles"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-800 text-black"
            />
          </label>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                category === item
                  ? "border-[#10494d] bg-[#10494d] text-white"
                  : "border-slate-200 text-slate-600 hover:border-teal-800 hover:text-teal-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-medium text-slate-900">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try a different search term or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-5 text-sm font-semibold text-teal-800 underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
