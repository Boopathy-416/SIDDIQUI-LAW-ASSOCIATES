import SEO from "../../components/seo/Seo.jsx";


function About() {
  return (
    <>
      <SEO
        title="About"
        description="[INSERT VERIFIED ABOUT PAGE META DESCRIPTION]"
        canonical="/about"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
          About
        </p>

        <h1 className="mt-5 text-5xl font-light">
          About the Firm
        </h1>

        <p className="mt-8 max-w-3xl leading-8 text-slate-400">
          [INSERT VERIFIED FIRM INFORMATION]
        </p>
      </section>
    </>
  );
}

export default About;