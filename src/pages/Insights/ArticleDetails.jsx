import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Scale, ArrowUpRight } from "lucide-react";
import articles from "./Data/Article.json";

// function ArticleHero({ article }) {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#0d3136]">
//       <div
//         className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
//         style={{
//           backgroundImage: `url('${article.image}')`,
//         }}
//       />

//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07383e]/95 via-[#0b5358]/90 to-[#073c42]/75" />

//       <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
//         <Link
//           to="/insights"
//           className="inline-flex items-center gap-2 text-sm text-white/85 transition hover:text-white"
//         >
//           <ArrowLeft size={16} />
//           All insights
//         </Link>

//         <div className="mt-7 max-w-4xl">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-100">
//             {article.category}
//           </p>

//           <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
//             {article.title}
//           </h1>

//           <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/75 sm:text-sm">
//             <time dateTime={article.isoDate}>{article.date}</time>
//             <span>{article.readTime}</span>
//             <span>{article.author}</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function ArticleHero({ article }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#c5a878]/35 bg-[#0b1420] text-[#f5f1e8]">
      {/* Article background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('${article.image}')`,
        }}
      />

      {/* Deep navy overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1420]/95 via-[#0b1420]/85 to-[#0b1420]/70" />

      {/* Gold ambient glow */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-[#c5a878]/[0.07] blur-[110px]" />

      {/* Architectural background lines */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-[6%] hidden w-px bg-white/[0.05] lg:block" />
        <div className="absolute inset-y-0 right-[6%] hidden w-px bg-white/[0.05] lg:block" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-12">
        {/* Back navigation */}
        <Link
          to="/insights"
          className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-white/60 transition-colors duration-300 hover:text-[#d4bd91]"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-[#c5a878]/40 transition-all duration-300 group-hover:border-[#c5a878] group-hover:bg-[#c5a878]/10">
            <ArrowLeft
              size={16}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </span>
          All insights
        </Link>

        {/* Article heading */}
        <div className="mt-9 max-w-5xl">
          {/* Category */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c5a878]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4bd91] sm:text-xs">
              {article.category}
            </p>
          </div>

          {/* Title */}
          <h1 className="mt-6 font-serif text-3xl font-normal leading-tight tracking-tight text-[#f5f1e8] sm:text-4xl lg:text-6xl lg:leading-[1.15]">
            {article.title}
          </h1>

          {/* Gold divider */}
          <div className="mt-7 h-px w-20 bg-gradient-to-r from-[#c5a878] to-transparent" />

          {/* Article metadata */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/55 sm:text-sm">
            <time
              dateTime={article.isoDate}
              className="transition-colors hover:text-[#d4bd91]"
            >
              {article.date}
            </time>

            <span className="h-1 w-1 rounded-full bg-[#c5a878]" />

            <span>{article.readTime}</span>

            <span className="h-1 w-1 rounded-full bg-[#c5a878]" />

            <span>{article.author}</span>
          </div>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c5a878]/60 to-transparent" />
    </section>
  );
}

// function ArticleBody({ article }) {
//   return (
//     <div className="space-y-6 text-[15px]  leading-8 text-slate-600 sm:text-base sm:leading-8">
//       {article.content.map((block, index) => {
//         if (block.type === "heading") {
//           return (
//             <h2
//               key={index}
//               className="pt-4 text-2xl font-semibold  leading-snug tracking-tight text-slate-900 sm:text-3xl"
//             >
//               {block.text}
//             </h2>
//           );
//         }

//         if (block.type === "list") {
//           return (
//             <ul
//               key={index}
//               className="list-disc space-y-3 pl-6 marker:text-teal-800"
//             >
//               {block.items.map((item) => (
//                 <li key={item} className="pl-1">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           );
//         }

//         return <p key={index}>{block.text}</p>;
//       })}
//     </div>
//   );
// }

function ArticleBody({ article }) {
  return (
    <div className="space-y-7 text-[15px] leading-8 text-white/65 sm:text-base sm:leading-8">
      {article.content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <div key={index} className="pt-5">
              {/* Gold heading accent */}
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#c5a878]" />
                <span className="h-px w-2 bg-[#c5a878]/35" />
              </div>

              <h2 className="font-serif text-2xl font-medium leading-snug tracking-tight text-[#f5f1e8] sm:text-3xl">
                {block.text}
              </h2>
            </div>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={index}
              className="space-y-4 border-l border-[#c5a878]/30 pl-5 sm:pl-6"
            >
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[11px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#c5a878]"
                  />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="leading-8 text-white/65">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

// function ArticleNavigation({ article, index }) {
//   const previous = articles[index - 1];
//   const next = articles[index + 1];

//   return (
//     <nav
//       aria-label="Article navigation"
//       className="mt-12 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-2"
//     >
//       {previous ? (
//         <Link
//           to={`/insights/${previous.id}`}
//           className="group flex items-start gap-3"
//         >
//           <ArrowLeft size={18} className="mt-1 shrink-0 text-teal-800" />

//           <span>
//             <span className="block text-xs text-slate-400">
//               Previous article
//             </span>
//             <span className="mt-1 block text-sm font-medium leading-6 text-slate-800 group-hover:text-teal-800">
//               {previous.title}
//             </span>
//           </span>
//         </Link>
//       ) : (
//         <span />
//       )}

//       {next && (
//         <Link
//           to={`/insights/${next.id}`}
//           className="group flex items-start justify-end gap-3 text-right"
//         >
//           <span>
//             <span className="block text-xs text-slate-400">Next article</span>
//             <span className="mt-1 block text-sm font-medium leading-6 text-slate-800 group-hover:text-teal-800">
//               {next.title}
//             </span>
//           </span>

//           <ArrowRight size={18} className="mt-1 shrink-0 text-teal-800" />
//         </Link>
//       )}
//     </nav>
//   );
// }

function ArticleNavigation({ article, index }) {
  const previous = articles[index - 1];
  const next = articles[index + 1];

  return (
    <nav
      aria-label="Article navigation"
      className="relative mt-14 grid gap-5 border-y border-[#c5a878]/20 py-7 sm:grid-cols-2 sm:gap-8"
    >
      {/* Subtle center accent */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-px w-16 -translate-x-1/2 bg-[#c5a878]/60 sm:block"
      />

      {previous ? (
        <Link
          to={`/insights/${previous.id}`}
          className="group relative flex min-w-0 items-start gap-4 rounded-sm p-3 transition-colors duration-300 hover:bg-white/[0.025] sm:p-4"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#c5a878]/30 text-[#c5a878] transition-all duration-300 group-hover:border-[#c5a878] group-hover:bg-[#c5a878] group-hover:text-[#0b1420]">
            <ArrowLeft size={17} strokeWidth={1.6} />
          </span>

          <span className="min-w-0 flex-1">
            <span className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#c5a878]/75">
              <span className="h-px w-4 bg-[#c5a878]/50" />
              Previous article
            </span>

            <span className="block text-sm font-medium leading-6 text-[#f5f1e8]/85 transition-colors duration-300 group-hover:text-[#d4bd91] sm:text-base">
              {previous.title}
            </span>
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next && (
        <Link
          to={`/insights/${next.id}`}
          className="group relative flex min-w-0 items-start justify-end gap-4 rounded-sm p-3 text-right transition-colors duration-300 hover:bg-white/[0.025] sm:p-4"
        >
          <span className="min-w-0 flex-1">
            <span className="mb-2 flex items-center justify-end gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#c5a878]/75">
              Next article
              <span className="h-px w-4 bg-[#c5a878]/50" />
            </span>

            <span className="block text-sm font-medium leading-6 text-[#f5f1e8]/85 transition-colors duration-300 group-hover:text-[#d4bd91] sm:text-base">
              {next.title}
            </span>
          </span>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#c5a878]/30 text-[#c5a878] transition-all duration-300 group-hover:border-[#c5a878] group-hover:bg-[#c5a878] group-hover:text-[#0b1420]">
            <ArrowRight size={17} strokeWidth={1.6} />
          </span>
        </Link>
      )}
    </nav>
  );
}

// export default function ArticleDetails() {
//   const { slug } = useParams();

//   const index = articles.findIndex((item) => item.id === slug);
//   const article = articles[index];

//   if (!article) {
//     return (
//       <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
//         <h1 className="text-3xl font-medium text-slate-900">
//           Article not found
//         </h1>

//         <p className="mt-3 text-sm text-slate-500">
//           This article may have been moved or is no longer available.
//         </p>

//         <Link
//           to="/insights"
//           className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
//         >
//           <ArrowLeft size={16} />
//           Back to insights
//         </Link>
//       </main>
//     );
//   }

//   const relatedArticles = articles.filter((item) => item.id !== article.id);

//   return (
//     <main className="min-h-screen bg-[#f8f9fa] ">
//       <ArticleHero article={article} />

//       <div className="mx-auto grid max-w-6xl gap-12 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,760px)_260px] lg:gap-16">
//         <article>
//           <img
//             src={article.image}
//             alt={article.title}
//             className="mb-9 aspect-[16/9] w-full rounded-sm bg-slate-100 object-cover"
//           />

//           <ArticleBody article={article} />

//           <p className="mt-8 border-l-2 border-teal-800 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-500">
//             This article is provided for general informational purposes only and
//             does not constitute legal advice. The appropriate legal position
//             depends on the circumstances of each matter and the applicable law.
//           </p>

//           <ArticleNavigation article={article} index={index} />
//         </article>

//         <aside className="self-start lg:sticky lg:top-8">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
//             Other posts
//           </p>

//           <div className="mt-5 space-y-6">
//             {relatedArticles.map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/insights/${item.id}`}
//                 className="group block"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   loading="lazy"
//                   className="aspect-[16/9] w-full rounded-sm bg-slate-100 object-cover"
//                 />

//                 <p className="mt-3 text-xs text-slate-400">{item.date}</p>

//                 <h3 className="mt-2 text-base font-medium leading-6 text-slate-900 transition group-hover:text-teal-800">
//                   {item.title}
//                 </h3>

//                 <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-slate-800">
//                   Read more
//                   <ArrowUpRight size={13} />
//                 </span>
//               </Link>
//             ))}
//           </div>

//           <Link
//             to="/insights"
//             className="mt-8 inline-flex items-center gap-2 border-b border-teal-800 pb-1 text-sm font-medium text-teal-800"
//           >
//             View all insights
//             <ArrowRight size={15} />
//           </Link>
//         </aside>
//       </div>
//     </main>
//   );
// }

export default function ArticleDetails() {
  const { slug } = useParams();

  const index = articles.findIndex((item) => item.id === slug);
  const article = articles[index];

  if (!article) {
    return (
      <main className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#0b1420] px-5 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,168,120,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,168,120,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10">
          <span className="mx-auto flex h-14 w-14 items-center justify-center border border-[#c5a878]/40 text-[#c5a878]">
            <ArrowLeft size={23} strokeWidth={1.4} />
          </span>

          <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c5a878]">
            Siddiqui Law Associates
          </p>

          <h1 className="mt-4 font-serif text-3xl font-medium text-[#f5f1e8] sm:text-5xl">
            Article not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/55">
            This article may have been moved or is no longer available. Explore
            our insights for more legal perspectives and updates.
          </p>

          <Link
            to="/insights"
            className="group mt-8 inline-flex items-center gap-3 border border-[#c5a878]/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4bd91] transition-all duration-300 hover:bg-[#c5a878] hover:text-[#0b1420]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to insights
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = articles.filter((item) => item.id !== article.id);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1420] text-[#f5f1e8]">
      <ArticleHero article={article} />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,760px)_280px] lg:gap-16 lg:px-10 lg:py-16">
        {/* Main article */}
        <article className="min-w-0">
          <div className="relative mb-9 overflow-hidden border border-[#c5a878]/15 bg-[#101e2d]">
            <img
              src={article.image}
              alt={article.title}
              className="aspect-[16/9] w-full object-cover"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1420]/25 via-transparent to-transparent"
            />

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-[2px] w-20 bg-[#c5a878]"
            />
          </div>

          <ArticleBody article={article} />

          {/* Original source link */}
          {article.sourceUrl && (
            <section className="relative mt-10 overflow-hidden border border-[#c5a878]/25 bg-[#101e2d] p-5 sm:p-7">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[2px] bg-[#c5a878]"
              />

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c5a878]/30 text-[#c5a878]">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c5a878]">
                    Original Source
                  </p>

                  <h2 className="mt-2 font-serif text-xl font-medium text-[#f5f1e8] sm:text-2xl">
                    Read the Full Report
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    Read the original news report for additional details and
                    coverage from Hindustan Times.
                  </p>

                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-2 border-b border-[#c5a878]/50 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#d4bd91] transition-colors duration-300 hover:border-[#f5f1e8] hover:text-[#f5f1e8]"
                  >
                    Read on Hindustan Times
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* Legal disclaimer */}
          <div className="relative mt-10 border border-[#c5a878]/20 bg-[#101e2d] px-5 py-5 sm:px-6">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[2px] bg-[#c5a878]"
            />

            <div className="flex items-start gap-3">
              <Scale
                size={19}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-[#c5a878]"
              />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5a878]">
                  Legal Disclaimer
                </p>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  This article is provided for general informational purposes
                  only and does not constitute legal advice. The appropriate
                  legal position depends on the circumstances of each matter and
                  the applicable law.
                </p>
              </div>
            </div>
          </div>

          <ArticleNavigation article={article} index={index} />
        </article>

        {/* Related articles sidebar */}
        <aside className="min-w-0 self-start border-t border-[#c5a878]/20 pt-6 lg:sticky lg:top-28 lg:border-t-0 lg:pt-0">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#c5a878]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c5a878]">
              Explore More
            </p>
          </div>

          <h2 className="mt-3 font-serif text-2xl font-medium text-[#f5f1e8]">
            Related Insights
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/45">
            More perspectives from our legal team.
          </p>

          <div className="mt-7 space-y-7">
            {relatedArticles.map((item) => (
              <Link
                key={item.id}
                to={`/insights/${item.id}`}
                className="group block border-b border-[#c5a878]/15 pb-6"
              >
                <div className="relative overflow-hidden border border-[#c5a878]/15 bg-[#101e2d]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1420]/45 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-30" />

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c5a878] transition-all duration-500 group-hover:w-full" />
                </div>

                <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-[#c5a878]/75">
                  {item.date}
                </p>

                <h3 className="mt-2 font-serif text-lg font-medium leading-7 text-[#f5f1e8]/90 transition-colors duration-300 group-hover:text-[#d4bd91]">
                  {item.title}
                </h3>

                <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c5a878]">
                  Read article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/insights"
            className="group mt-7 inline-flex items-center gap-3 border border-[#c5a878]/35 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d4bd91] transition-all duration-300 hover:border-[#c5a878] hover:bg-[#c5a878] hover:text-[#0b1420]"
          >
            View all insights
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </aside>
      </div>
    </main>
  );
}
