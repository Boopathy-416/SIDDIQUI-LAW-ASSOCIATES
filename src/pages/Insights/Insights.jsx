import SEO from "../../components/seo/Seo";

function Insights() {
  return (
    <>
      <SEO
        title="Insights"
        description="[INSERT VERIFIED INSIGHTS META DESCRIPTION]"
        canonical="/insights"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
          Knowledge
        </p>

        <h1 className="mt-5 text-5xl font-light">
          Insights
        </h1>

        <p className="mt-8 text-slate-400">
          [INSERT VERIFIED INSIGHTS CONTENT]
        </p>
      </section>
    </>
  );
}

export default Insights;