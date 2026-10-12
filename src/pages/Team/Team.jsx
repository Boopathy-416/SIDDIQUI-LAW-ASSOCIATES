import SEO from "../../components/seo/Seo";

function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="[INSERT VERIFIED TEAM PAGE META DESCRIPTION]"
        canonical="/team"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
          People
        </p>

        <h1 className="mt-5 text-5xl font-light">
          Our Team
        </h1>

        <p className="mt-8 text-slate-400">
          [INSERT VERIFIED TEAM INFORMATION]
        </p>
      </section>
    </>
  );
}

export default Team;