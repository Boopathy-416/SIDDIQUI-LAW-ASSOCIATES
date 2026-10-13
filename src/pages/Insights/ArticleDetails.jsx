
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import articles from "./Data/Article.json";

function ArticleHero({ article }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#103f46]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('${article.image}')`,
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07383e]/95 via-[#0b5358]/90 to-[#073c42]/75" />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-sm text-white/85 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          All insights
        </Link>

        <div className="mt-7 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-100">
            {article.category}
          </p>

          <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/75 sm:text-sm">
            <time dateTime={article.isoDate}>{article.date}</time>
            <span>{article.readTime}</span>
            <span>{article.author}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleBody({ article }) {
  return (
    <div className="space-y-6 text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-8">
      {article.content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="pt-4 text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={index}
              className="list-disc space-y-3 pl-6 marker:text-teal-800"
            >
              {block.items.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}

function ArticleNavigation({ article, index }) {
  const previous = articles[index - 1];
  const next = articles[index + 1];

  return (
    <nav
      aria-label="Article navigation"
      className="mt-12 grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          to={`/insights/${previous.id}`}
          className="group flex items-start gap-3"
        >
          <ArrowLeft
            size={18}
            className="mt-1 shrink-0 text-teal-800"
          />

          <span>
            <span className="block text-xs text-slate-400">
              Previous article
            </span>
            <span className="mt-1 block text-sm font-medium leading-6 text-slate-800 group-hover:text-teal-800">
              {previous.title}
            </span>
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          to={`/insights/${next.id}`}
          className="group flex items-start justify-end gap-3 text-right"
        >
          <span>
            <span className="block text-xs text-slate-400">
              Next article
            </span>
            <span className="mt-1 block text-sm font-medium leading-6 text-slate-800 group-hover:text-teal-800">
              {next.title}
            </span>
          </span>

          <ArrowRight
            size={18}
            className="mt-1 shrink-0 text-teal-800"
          />
        </Link>
      )}
    </nav>
  );
}

export default function ArticleDetails() {
  const { slug } = useParams();

  const index = articles.findIndex((item) => item.id === slug);
  const article = articles[index];

  if (!article) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-3xl font-medium text-slate-900">
          Article not found
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          This article may have been moved or is no longer available.
        </p>

        <Link
          to="/insights"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
        >
          <ArrowLeft size={16} />
          Back to insights
        </Link>
      </main>
    );
  }

  const relatedArticles = articles.filter(
    (item) => item.id !== article.id
  );

  return (
    <main className="min-h-screen bg-white">
      <ArticleHero article={article} />

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,760px)_260px] lg:gap-16">
        <article>
          <img
            src={article.image}
            alt={article.title}
            className="mb-9 aspect-[16/9] w-full rounded-sm bg-slate-100 object-cover"
          />

          <ArticleBody article={article} />

          <p className="mt-8 border-l-2 border-teal-800 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-500">
            This article is provided for general informational
            purposes only and does not constitute legal advice.
            The appropriate legal position depends on the
            circumstances of each matter and the applicable law.
          </p>

          <ArticleNavigation article={article} index={index} />
        </article>

        <aside className="self-start lg:sticky lg:top-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
            Other posts
          </p>

          <div className="mt-5 space-y-6">
            {relatedArticles.map((item) => (
              <Link
                key={item.id}
                to={`/insights/${item.id}`}
                className="group block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[16/9] w-full rounded-sm bg-slate-100 object-cover"
                />

                <p className="mt-3 text-xs text-slate-400">
                  {item.date}
                </p>

                <h3 className="mt-2 text-base font-medium leading-6 text-slate-900 transition group-hover:text-teal-800">
                  {item.title}
                </h3>

                <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-slate-800">
                  Read more
                  <ArrowUpRight size={13} />
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/insights"
            className="mt-8 inline-flex items-center gap-2 border-b border-teal-800 pb-1 text-sm font-medium text-teal-800"
          >
            View all insights
            <ArrowRight size={15} />
          </Link>
        </aside>
      </div>
    </main>
  );
}
