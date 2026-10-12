import SEO from "../../components/seo/Seo.jsx";

function PracticeAreas() {
  return (
    <>
      <SEO
        title="Practice Areas"
        description="[INSERT VERIFIED PRACTICE AREAS META DESCRIPTION]"
        canonical="/practice-areas"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
          Expertise
        </p>

        <h1 className="mt-5 text-5xl font-light">
          Practice Areas
        </h1>

        <p className="mt-8 max-w-3xl leading-8 text-slate-400">
          [INSERT VERIFIED PRACTICE AREA INTRODUCTION]
        </p>
      </section>
    </>
  );
}

export default PracticeAreas;