import SEO from "../../components/seo/Seo";

function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="[INSERT VERIFIED CONTACT PAGE META DESCRIPTION]"
        canonical="/contact"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
          Connect
        </p>

        <h1 className="mt-5 text-5xl font-light">
          Contact
        </h1>

        <p className="mt-8 text-slate-400">
          [INSERT VERIFIED CONTACT INFORMATION]
        </p>
      </section>
    </>
  );
}

export default Contact;