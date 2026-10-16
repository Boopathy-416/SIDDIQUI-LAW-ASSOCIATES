// import SEO from "../../components/seo/Seo.jsx";

// function OurExpertise() {
//   return (
//     <>
//       <SEO
//         title="Our Expertise"
//         description="[INSERT VERIFIED OUR EXPERTISE META DESCRIPTION]"
//         canonical="/our-expertise"
//       />

//       <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
//         <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
//           Expertise
//         </p>

//         <h1 className="mt-5 text-5xl font-light">
//           Our Expertise
//         </h1>

//         <p className="mt-8 max-w-3xl leading-8 text-slate-400">
//           [INSERT VERIFIED PRACTICE AREA INTRODUCTION]
//         </p>
//       </section>
//     </>
//   );
// }

// export default OurExpertise;


import { useLocation, Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import slugify from "../../utils/slugify.js";

import { useParams } from "react-router-dom";




const practices = [
  {
    title: "Arbitration & Dispute Resolution",
    description:
      "Resolving complex commercial disputes with clarity, strategy and discretion.",
    overview:
      "Legal disputes require a clear understanding of the facts, commercial objectives and available remedies. We help clients evaluate their position, assess risks and pursue an appropriate resolution.",
    services: [
      "Strategic legal advice",
      "Dispute management",
      "Arbitration proceedings",
      "Representation and settlement strategy",
    ],
  },
  {
    title: "Criminal Law & White Collar Crime",
    description:
      "Strategic counsel for high-stakes investigations and criminal proceedings.",
    overview:
      "Criminal proceedings and regulatory investigations demand careful preparation, confidentiality and a disciplined approach to protecting legal rights.",
    services: [
      "Criminal defence strategy",
      "Investigation support",
      "Bail and related applications",
      "Court representation",
    ],
  },
  {
    title: "Corporate & Commercial Law",
    description:
      "Practical advice for ambitious businesses navigating growth and change.",
    overview:
      "Businesses need legal frameworks that support their commercial objectives while addressing contractual obligations, operational risks and regulatory requirements.",
    services: [
      "Commercial contracts",
      "Corporate advisory",
      "Business negotiations",
      "Contractual dispute resolution",
    ],
  },
  {
    title: "Constitutional Law & Writs",
    description:
      "Protecting rights and challenging executive action through constitutional remedies.",
    overview:
      "Constitutional remedies may be available when governmental action, administrative decisions or the exercise of public authority raises questions of legality or fundamental rights.",
    services: [
      "Constitutional remedies",
      "Writ petitions",
      "Administrative law matters",
      "Representation in appropriate proceedings",
    ],
  },
  {
    title: "General Litigation",
    description:
      "Measured, prepared representation across civil courts and tribunals.",
    overview:
      "Effective litigation begins with understanding the evidence, identifying the relevant legal issues and developing a strategy appropriate to the client's objectives.",
    services: [
      "Civil litigation",
      "Case assessment and preparation",
      "Interim applications",
      "Court representation",
    ],
  },
  {
    title: "Intellectual Property Rights (IPR)",
    description:
      "Helping ideas, brands and creative work stay protected and valuable.",
    overview:
      "Intellectual property can be central to a company's identity and commercial value. Appropriate protection and enforcement help safeguard creative work, brands and innovation.",
    services: [
      "Trademark advisory",
      "Copyright matters",
      "IP licensing and agreements",
      "Intellectual property disputes",
    ],
  },
  {
    title: "Real Estate & Property Law",
    description:
      "Confident counsel for transactions, development and property disputes.",
    overview:
      "Property transactions require careful review of title, contractual obligations, applicable regulations and potential disputes before important decisions are made.",
    services: [
      "Property documentation",
      "Title and due diligence review",
      "Real estate transactions",
      "Property dispute resolution",
    ],
  },
  {
    title: "Employment & Labour Law",
    description:
      "Building fair, resilient workplaces and resolving employment challenges.",
    overview:
      "Employment matters involve the rights and responsibilities of employers and employees. A considered legal approach helps address workplace disputes and compliance concerns.",
    services: [
      "Employment agreements",
      "Workplace dispute advisory",
      "Labour law compliance",
      "Employment litigation",
    ],
  },
  {
    title: "Banking & Finance",
    description:
      "Guidance on lending, securities, regulation and financial transactions.",
    overview:
      "Financial arrangements can involve complex contractual obligations, security interests and regulatory requirements. Careful review helps clients understand their position and available options.",
    services: [
      "Loan documentation",
      "Financial contract review",
      "Banking disputes",
      "Security and recovery matters",
    ],
  },
  {
    title: "Family & Matrimonial Law",
    description:
      "Thoughtful support through deeply personal legal matters.",
    overview:
      "Family and matrimonial disputes require discretion, sensitivity and a clear understanding of the applicable law. We focus on helping clients evaluate their options and protect their interests.",
    services: [
      "Divorce and matrimonial proceedings",
      "Maintenance matters",
      "Child custody disputes",
      "Mediation and settlement",
    ],
  },
  {
    title: "Technology, Media & Telecommunications (TMT)",
    description:
      "Forward-looking counsel for fast-moving digital industries.",
    overview:
      "Digital businesses face evolving legal questions involving technology agreements, intellectual property, online activities, privacy and industry regulation.",
    services: [
      "Technology contracts",
      "IT and software agreements",
      "Digital rights advisory",
      "Media and telecommunications matters",
    ],
  },
  {
    title: "Environmental Law",
    description:
      "Navigating regulation and responsibility in a changing world.",
    overview:
      "Environmental matters can involve regulatory approvals, compliance obligations and disputes concerning environmental responsibilities and the use of natural resources.",
    services: [
      "Environmental compliance",
      "Regulatory advisory",
      "Environmental disputes",
      "Related proceedings and representation",
    ],
  },
  {
    title: "Competition Law",
    description:
      "Advising businesses on fair markets, conduct and regulatory review.",
    overview:
      "Competition law affects commercial arrangements, market conduct and business combinations. Understanding the applicable rules helps businesses identify and manage regulatory risk.",
    services: [
      "Competition law advisory",
      "Commercial arrangement review",
      "Regulatory compliance",
      "Competition proceedings",
    ],
  },
  {
    title: "Consumer Law",
    description:
      "Clear representation for consumer rights and business compliance.",
    overview:
      "Consumer disputes may concern defective products, deficient services, contractual obligations or unfair trade practices. Appropriate legal guidance helps clarify the available remedies.",
    services: [
      "Consumer complaints",
      "Product and service disputes",
      "Consumer protection advisory",
      "Consumer forum representation",
    ],
  },
  {
    title: "Medical Negligence",
    description:
      "Careful advocacy in matters where trust and accountability matter.",
    overview:
      "Medical negligence matters require close attention to records, applicable professional standards, causation and the evidence needed to evaluate a potential claim or defence.",
    services: [
      "Medical record review",
      "Negligence claim assessment",
      "Consumer proceedings",
      "Related dispute representation",
    ],
  },
  {
    title: "Corporate Advisory & Due Diligence",
    description:
      "Insightful review for informed decisions and sustainable growth.",
    overview:
      "Due diligence helps identify legal, contractual and operational risks before a transaction or major business decision. Structured review supports better-informed commercial decisions.",
    services: [
      "Legal due diligence",
      "Contract and document review",
      "Corporate risk assessment",
      "Transaction advisory",
    ],
  },
];

// Convert titles to the same URL format used by your project.


function PracticeEyebrow({ children }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#b79562]">
      {children}
    </p>
  );
}

export default function Expertise() {
  const { pathname } = useLocation();

  const selectedSlug = pathname.split("/").filter(Boolean)[1];

  const activeIndex = practices.findIndex(
    (practice) => slugify(practice.title) === selectedSlug
  );

  const activePractice = practices[activeIndex >= 0 ? activeIndex : 0];

  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#102039]">
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-24">
          {/* LEFT: Practice area navigation */}
          <aside className="min-w-0">
            <div className="sticky top-24">
              <div className="mb-5 flex items-center justify-between">
                <PracticeEyebrow>Practice areas</PracticeEyebrow>

                <span className="text-[10px] tracking-widest text-[#b79562] lg:hidden">
                  {String(activeIndex >= 0 ? activeIndex + 1 : 1).padStart(
                    2,
                    "0"
                  )}{" "}
                  / 16
                </span>
              </div>

              <div className="border-t border-[#c7a36e]">
                {practices.map((practice, index) => {
                  const isActive = practice.title === activePractice.title;

                  return (
                    <Link
                      key={practice.title}
                      to={`/our-expertise/${slugify(practice.title)}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`group flex min-h-[44px] items-center justify-between gap-3 border-b border-[#dcd9d1] py-3 text-[11px] leading-5 transition-colors duration-200 sm:text-xs ${
                        isActive
                          ? "font-semibold text-[#102039]"
                          : "text-[#657080] hover:bg-[#eeece5] hover:pl-2 hover:text-[#102039]"
                      }`}
                    >
                      <span>{practice.title}</span>

                      <ChevronRight
                        size={14}
                        className={`shrink-0 transition-transform duration-200 ${
                          isActive
                            ? "text-[#102039]"
                            : "text-[#7e8791] group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* RIGHT: Active practice details */}
          <article className="min-w-0 lg:pt-0">
            <div className="mb-7 hidden items-center gap-3 lg:flex">
              <span className="h-px w-6 bg-[#b79562]" />

              <span className="text-[10px] tracking-[0.2em] text-[#b79562]">
                {String(activeIndex >= 0 ? activeIndex + 1 : 1).padStart(
                  2,
                  "0"
                )}{" "}
                / {String(practices.length).padStart(2, "0")}
              </span>
            </div>

            <PracticeEyebrow>Our expertise</PracticeEyebrow>

            <h1
              key={activePractice.title}
              className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] tracking-[-0.035em] text-[#102039] sm:text-5xl lg:mt-5 lg:text-[48px] xl:text-[54px]"
            >
              {activePractice.title}
            </h1>

            <p className="mt-6 max-w-3xl font-serif text-base leading-7 text-[#39465b] sm:text-lg sm:leading-8">
              {activePractice.description}
            </p>

            <div className="mt-7 max-w-3xl">
              <p className="text-sm leading-7 text-[#657080] sm:text-[15px] sm:leading-7">
                {activePractice.overview}
              </p>
            </div>

            {/* Services */}
            <section className="mt-12 max-w-3xl">
              <h2 className="font-serif text-2xl tracking-tight text-[#102039] sm:text-[27px]">
                How we can help
              </h2>

              <div className="mt-5 grid grid-cols-1 border-t border-[#d8d5cd] sm:grid-cols-2">
                {activePractice.services.map((service) => (
                  <div
                    key={service}
                    className="flex min-h-[48px] items-center border-b border-[#d8d5cd] py-3 pr-3 text-xs leading-5 text-[#26354b] sm:text-[13px]"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <div className="mt-9">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center gap-5 bg-[#0d1b30] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#b79562] hover:text-[#0d1b30] sm:px-6"
              >
                Discuss your matter

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Next / previous practice navigation */}
            <div className="mt-12 flex flex-col gap-4 border-t border-[#d8d5cd] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#7a818a]">
                Explore our areas of practice
              </p>

              <div className="flex flex-wrap gap-3">
                {activeIndex > 0 && (
                  <Link
                    to={`/our-expertise/${slugify(practices[activeIndex - 1].title)}`}
                    className="text-xs text-[#39465b] transition hover:text-[#b79562]"
                  >
                    ← Previous
                  </Link>
                )}

                {activeIndex < practices.length - 1 && (
                  <Link
                    to={`/our-expertise/${slugify(practices[activeIndex + 1].title)}`}
                    className="text-xs text-[#39465b] transition hover:text-[#b79562]"
                  >
                    Next →
                  </Link>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
