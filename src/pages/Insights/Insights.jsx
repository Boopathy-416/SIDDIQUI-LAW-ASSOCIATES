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

// function InsightsHero() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#111111]">
//       <div
//         className="absolute inset-0 -z-10 bg-cover bg-center opacity-45"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
//         }}
//       />

//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#073c42]/95 via-[#0b5358]/80 to-[#073c42]/20" />

//       <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
//         <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
//           Insights
//         </h1>

//         <nav
//           aria-label="Breadcrumb"
//           className="mt-5 flex items-center gap-3 text-sm text-white/90"
//         >
//           <Link to="/" className="transition hover:text-white">
//             Home
//           </Link>
//           <ArrowRight size={15} />
//           <span aria-current="page">Insights</span>
//         </nav>
//       </div>
//     </section>
//   );
// }

// function ArticleCard({ article }) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-sm border  border-slate-100 bg-white/80 hover:bg-[#111111] shadow-[0_2px_12px_rgba(0,0,0,0.09)] transition duration-500 ease-in hover:-translate-y-1 hover:shadow-lg">
//       <Link
//         to={`/insights/${article.id}`}
//         aria-label={`Read ${article.title}`}
//         className="block aspect-[4/3] overflow-hidden bg-slate-100"
//       >
//         <img
//           src={article.image}
//           alt={article.title}
//           loading="lazy"
//           className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
//         />
//       </Link>

//       <div className="flex flex-1 flex-col p-4 sm:p-5">
//         <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
//           <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-800">
//             {article.category}
//           </span>

//           <time
//             dateTime={article.isoDate}
//             className="text-xs text-slate-400"
//           >
//             {article.date}
//           </time>
//         </div>

//         <h2 className="text-lg font-medium leading-snug text-slate-900">
//           <Link
//             to={`/insights/${article.id}`}
//             className="transition text-teal-800"
//           >
//             {article.title}
//           </Link>
//         </h2>

//         <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
//           {article.excerpt}
//         </p>

//         <div className="mt-auto pt-5">
//           <Link
//             to={`/insights/${article.id}`}
//             className="inline-flex items-center gap-2 text-[11px] font-bold uppercase  text-red-900/80 transition hover:text-white tracking-wider"
//           >
//             Read more
//             <ArrowUpRight
//               size={15}
//               className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//             />
//           </Link>
//         </div>
//       </div>

//       <div className="border-t border-slate-50 px-4 py-3 sm:px-5">
//         <p className="text-xs text-slate-600">
//           {article.date}
//         </p>
//       </div>
//     </article>
//   );
// }


function InsightsHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#c5a878]/30 bg-[#0b1420] text-[#f5f1e8]">

      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Navy architectural overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1420]/95 via-[#0b1420]/85 to-[#0b1420]/65" />

      {/* Gold glow */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[#c5a878]/[0.07] blur-[100px]" />

      {/* Architectural lines */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-[6%] hidden w-px bg-white/[0.06] lg:block" />
        <div className="absolute inset-y-0 right-[6%] hidden w-px bg-white/[0.06] lg:block" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-12">

        {/* Section label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#c5a878]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4bd91] sm:text-xs">
            Siddiqui Law Associates
          </p>
        </div>

        {/* Heading */}
        <h1 className="mt-6 font-serif text-4xl font-normal tracking-tight text-[#f5f1e8] sm:text-5xl lg:text-7xl">
          Insights
          <span className="ml-3 text-[#c5a878]">.</span>
        </h1>

        {/* Decorative divider */}
        <div className="mt-6 h-px w-20 bg-gradient-to-r from-[#c5a878] to-transparent" />

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mt-6 flex flex-wrap items-center gap-3 text-xs tracking-wide sm:text-sm"
        >
          <Link
            to="/"
            className="text-white/55 transition-colors duration-300 hover:text-[#d4bd91]"
          >
            Home
          </Link>

          <ArrowRight
            size={14}
            strokeWidth={1.4}
            className="text-[#c5a878]"
          />

          <span
            aria-current="page"
            className="font-medium text-[#d4bd91]"
          >
            Insights
          </span>
        </nav>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c5a878]/60 to-transparent" />
    </section>
  );
}



function ArticleCard({ article }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-[#c5a878]/25 bg-[#0b1420] text-[#f5f1e8] shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#c5a878]/65 hover:shadow-[0_18px_45px_rgba(0,0,0,0.3)]">

      {/* Architectural corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-8 border-l border-t border-[#d4bd91]/70 transition-all duration-300 group-hover:h-12 group-hover:w-12" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b border-r border-[#d4bd91]/70 transition-all duration-300 group-hover:h-12 group-hover:w-12" />

      {/* Article image */}
      <Link
        to={`/insights/${article.id}`}
        aria-label={`Read ${article.title}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#101e2d]"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1420]/85 via-[#0b1420]/10 to-[#0b1420]/10 transition-opacity duration-500 group-hover:from-[#0b1420]/65" />

        {/* Category label */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <span className="border border-[#d4bd91]/60 bg-[#0b1420]/85 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d4bd91] backdrop-blur-sm">
            {article.category}
          </span>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/30 bg-[#0b1420]/60 text-[#f5f1e8] transition-all duration-300 group-hover:border-[#c5a878] group-hover:bg-[#c5a878] group-hover:text-[#0b1420]">
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>

      {/* Article content */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">

        {/* Decorative rule */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#c5a878]" />
          <time
            dateTime={article.isoDate}
            className="text-[10px] font-medium uppercase tracking-[0.17em] text-white/45"
          >
            {article.date}
          </time>
        </div>

        {/* Title */}
        <h2 className="text-lg font-medium leading-snug tracking-[-0.02em] text-[#f5f1e8] transition-colors duration-300 group-hover:text-[#d4bd91] sm:text-xl">
          <Link
            to={`/insights/${article.id}`}
            className="outline-none focus-visible:ring-1 focus-visible:ring-[#c5a878]"
          >
            {article.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/55">
          {article.excerpt}
        </p>

        {/* Read more */}
        <div className="mt-auto pt-7">
          <Link
            to={`/insights/${article.id}`}
            className="group/link inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4bd91] transition-colors duration-300 hover:text-[#f5f1e8] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a878]"
          >
            Read more

            <span className="flex h-7 w-7 items-center justify-center border border-[#c5a878]/40 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:border-[#c5a878] group-hover/link:bg-[#c5a878]/10">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#c5a878]/20 bg-[#101e2d]/65 px-5 py-3 sm:px-6">
        <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">
          Siddiqui Law Associates
        </p>

        <span className="h-px w-7 bg-[#c5a878]/60" />
      </div>
    </article>
  );
}


// export default function Insights() {
//   const [query, setQuery] = useState("");
//   const [category, setCategory] = useState("All");

//   const categories = useMemo(
//     () => ["All", ...new Set(articles.map((article) => article.category))],
//     []
//   );

//   const filteredArticles = useMemo(() => {
//     const search = query.trim().toLowerCase();

//     return articles.filter((article) => {
//       const matchesSearch = [
//         article.title,
//         article.excerpt,
//         article.category,
//       ]
//         .join(" ")
//         .toLowerCase()
//         .includes(search);

//       const matchesCategory =
//         category === "All" || article.category === category;

//       return matchesSearch && matchesCategory;
//     });
//   }, [query, category]);

//   return (
//     <main className="min-h-screen bg-[#F5F1E8]">
//       <InsightsHero />

//       <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
//         <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
//               The journal
//             </p>

//             <h2 className="mt-2 text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
//               Perspectives that matter.
//             </h2>

//             <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
//               Perspectives on law, business, technology, and the
//               questions that shape our changing world.
//             </p>
//           </div>

//           <label className="flex w-full items-center gap-3 border-b border-slate-300 py-3 focus-within:border-teal-800 lg:max-w-xs">
//             <Search size={18} className="shrink-0 text-black" />

//             <input
//               type="search"
//               value={query}
//               onChange={(event) => setQuery(event.target.value)}
//               placeholder="Search insights..."
//               aria-label="Search articles"
//               className="w-full bg-transparent text-sm outline-none placeholder:text-slate-800 text-black"
//             />
//           </label>
//         </div>

//         <div className="mb-8 flex flex-wrap gap-2">
//           {categories.map((item) => (
//             <button
//               key={item}
//               type="button"
//               onClick={() => setCategory(item)}
//               aria-pressed={category === item}
//               className={`rounded-full border px-4 py-2 text-xs transition ${
//                 category === item
//                   ? "border-[#10494d] bg-[#10494d] text-white"
//                   : "border-slate-200 text-slate-600 hover:border-teal-800 hover:text-teal-800"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {filteredArticles.length > 0 ? (
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredArticles.map((article) => (
//               <ArticleCard key={article.id} article={article} />
//             ))}
//           </div>
//         ) : (
//           <div className="py-20 text-center">
//             <h3 className="text-xl font-medium text-slate-900">
//               No articles found
//             </h3>

//             <p className="mt-2 text-sm text-slate-500">
//               Try a different search term or category.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 setQuery("");
//                 setCategory("All");
//               }}
//               className="mt-5 text-sm font-semibold text-teal-800 underline underline-offset-4"
//             >
//               Clear filters
//             </button>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

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
    <main className="min-h-screen bg-[#0b1420] text-[#f5f1e8]">
      <InsightsHero />

      <section className="relative isolate overflow-hidden border-t border-[#c5a878]/20">
        {/* Architectural background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-y-0 left-[6%] hidden w-px bg-white/[0.035] lg:block" />
          <div className="absolute inset-y-0 right-[6%] hidden w-px bg-white/[0.035] lg:block" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#c5a878]/[0.035] blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

          {/* Section heading and search */}
          <div className="mb-10 flex flex-col gap-7 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#c5a878]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4bd91]">
                  The Journal
                </p>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-normal tracking-tight text-[#f5f1e8] sm:text-4xl lg:text-5xl">
                Perspectives that matter
                <span className="text-[#c5a878]">.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Perspectives on law, business, technology, and the
                questions that shape our changing world.
              </p>

              <div className="mt-6 h-px w-16 bg-[#c5a878]/70" />
            </div>

            {/* Search */}
            <label className="flex w-full items-center gap-3 border border-[#c5a878]/30 bg-[#101e2d]/70 px-4 py-3.5 transition-colors duration-300 focus-within:border-[#c5a878] lg:max-w-sm">
              <Search
                size={18}
                strokeWidth={1.5}
                className="shrink-0 text-[#d4bd91]"
              />

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search insights..."
                aria-label="Search articles"
                className="w-full bg-transparent text-sm text-[#f5f1e8] outline-none placeholder:text-white/35"
              />
            </label>
          </div>

          {/* Category filters */}
          <div className="mb-9 flex flex-wrap gap-2.5 border-b border-[#c5a878]/20 pb-7">
            {categories.map((item) => {
              const isActive = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={isActive}
                  className={`relative border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:px-5 ${
                    isActive
                      ? "border-[#c5a878] bg-[#c5a878] text-[#0b1420]"
                      : "border-white/15 bg-transparent text-white/60 hover:border-[#c5a878]/70 hover:text-[#d4bd91]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              {filteredArticles.length === 1
                ? "1 Article"
                : `${filteredArticles.length} Articles`}
            </p>

            <span className="h-px max-w-24 flex-1 bg-[#c5a878]/25" />
          </div>

          {/* Article grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="relative overflow-hidden border border-[#c5a878]/25 bg-[#101e2d]/60 px-5 py-16 text-center sm:py-20">
              <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[#c5a878]/60" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#c5a878]/60" />

              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#c5a878]/40 bg-[#c5a878]/[0.06]">
                <Search
                  size={22}
                  strokeWidth={1.3}
                  className="text-[#d4bd91]"
                />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-normal text-[#f5f1e8]">
                No articles found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/50">
                Try a different search term or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
                className="mt-7 inline-flex min-h-11 items-center justify-center border border-[#c5a878] bg-[#c5a878] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0b1420] transition-all duration-300 hover:bg-transparent hover:text-[#d4bd91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4bd91]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c5a878]/45 to-transparent" />
      </section>
    </main>
  );
}
