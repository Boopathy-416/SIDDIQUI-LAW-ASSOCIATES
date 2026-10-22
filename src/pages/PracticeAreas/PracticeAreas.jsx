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




// const practices = [
//   {
//     title: "Arbitration & Dispute Resolution",
//     description:
//       "Resolving complex commercial disputes with clarity, strategy and discretion.",
//     overview:
//       "Legal disputes require a clear understanding of the facts, commercial objectives and available remedies. We help clients evaluate their position, assess risks and pursue an appropriate resolution.",
//     services: [
//       "Strategic legal advice",
//       "Dispute management",
//       "Arbitration proceedings",
//       "Representation and settlement strategy",
//     ],
//   },
//   {
//     title: "Criminal Law & White Collar Crime",
//     description:
//       "Strategic counsel for high-stakes investigations and criminal proceedings.",
//     overview:
//       "Criminal proceedings and regulatory investigations demand careful preparation, confidentiality and a disciplined approach to protecting legal rights.",
//     services: [
//       "Criminal defence strategy",
//       "Investigation support",
//       "Bail and related applications",
//       "Court representation",
//     ],
//   },
//   {
//     title: "Corporate & Commercial Law",
//     description:
//       "Practical advice for ambitious businesses navigating growth and change.",
//     overview:
//       "Businesses need legal frameworks that support their commercial objectives while addressing contractual obligations, operational risks and regulatory requirements.",
//     services: [
//       "Commercial contracts",
//       "Corporate advisory",
//       "Business negotiations",
//       "Contractual dispute resolution",
//     ],
//   },
//   {
//     title: "Constitutional Law & Writs",
//     description:
//       "Protecting rights and challenging executive action through constitutional remedies.",
//     overview:
//       "Constitutional remedies may be available when governmental action, administrative decisions or the exercise of public authority raises questions of legality or fundamental rights.",
//     services: [
//       "Constitutional remedies",
//       "Writ petitions",
//       "Administrative law matters",
//       "Representation in appropriate proceedings",
//     ],
//   },
//   {
//     title: "General Litigation",
//     description:
//       "Measured, prepared representation across civil courts and tribunals.",
//     overview:
//       "Effective litigation begins with understanding the evidence, identifying the relevant legal issues and developing a strategy appropriate to the client's objectives.",
//     services: [
//       "Civil litigation",
//       "Case assessment and preparation",
//       "Interim applications",
//       "Court representation",
//     ],
//   },
//   {
//     title: "Intellectual Property Rights (IPR)",
//     description:
//       "Helping ideas, brands and creative work stay protected and valuable.",
//     overview:
//       "Intellectual property can be central to a company's identity and commercial value. Appropriate protection and enforcement help safeguard creative work, brands and innovation.",
//     services: [
//       "Trademark advisory",
//       "Copyright matters",
//       "IP licensing and agreements",
//       "Intellectual property disputes",
//     ],
//   },
//   {
//     title: "Real Estate & Property Law",
//     description:
//       "Confident counsel for transactions, development and property disputes.",
//     overview:
//       "Property transactions require careful review of title, contractual obligations, applicable regulations and potential disputes before important decisions are made.",
//     services: [
//       "Property documentation",
//       "Title and due diligence review",
//       "Real estate transactions",
//       "Property dispute resolution",
//     ],
//   },
//   {
//     title: "Employment & Labour Law",
//     description:
//       "Building fair, resilient workplaces and resolving employment challenges.",
//     overview:
//       "Employment matters involve the rights and responsibilities of employers and employees. A considered legal approach helps address workplace disputes and compliance concerns.",
//     services: [
//       "Employment agreements",
//       "Workplace dispute advisory",
//       "Labour law compliance",
//       "Employment litigation",
//     ],
//   },
//   {
//     title: "Banking & Finance",
//     description:
//       "Guidance on lending, securities, regulation and financial transactions.",
//     overview:
//       "Financial arrangements can involve complex contractual obligations, security interests and regulatory requirements. Careful review helps clients understand their position and available options.",
//     services: [
//       "Loan documentation",
//       "Financial contract review",
//       "Banking disputes",
//       "Security and recovery matters",
//     ],
//   },
//   {
//     title: "Family & Matrimonial Law",
//     description:
//       "Thoughtful support through deeply personal legal matters.",
//     overview:
//       "Family and matrimonial disputes require discretion, sensitivity and a clear understanding of the applicable law. We focus on helping clients evaluate their options and protect their interests.",
//     services: [
//       "Divorce and matrimonial proceedings",
//       "Maintenance matters",
//       "Child custody disputes",
//       "Mediation and settlement",
//     ],
//   },
//   {
//     title: "Technology, Media & Telecommunications (TMT)",
//     description:
//       "Forward-looking counsel for fast-moving digital industries.",
//     overview:
//       "Digital businesses face evolving legal questions involving technology agreements, intellectual property, online activities, privacy and industry regulation.",
//     services: [
//       "Technology contracts",
//       "IT and software agreements",
//       "Digital rights advisory",
//       "Media and telecommunications matters",
//     ],
//   },
//   {
//     title: "Environmental Law",
//     description:
//       "Navigating regulation and responsibility in a changing world.",
//     overview:
//       "Environmental matters can involve regulatory approvals, compliance obligations and disputes concerning environmental responsibilities and the use of natural resources.",
//     services: [
//       "Environmental compliance",
//       "Regulatory advisory",
//       "Environmental disputes",
//       "Related proceedings and representation",
//     ],
//   },
//   {
//     title: "Competition Law",
//     description:
//       "Advising businesses on fair markets, conduct and regulatory review.",
//     overview:
//       "Competition law affects commercial arrangements, market conduct and business combinations. Understanding the applicable rules helps businesses identify and manage regulatory risk.",
//     services: [
//       "Competition law advisory",
//       "Commercial arrangement review",
//       "Regulatory compliance",
//       "Competition proceedings",
//     ],
//   },
//   {
//     title: "Consumer Law",
//     description:
//       "Clear representation for consumer rights and business compliance.",
//     overview:
//       "Consumer disputes may concern defective products, deficient services, contractual obligations or unfair trade practices. Appropriate legal guidance helps clarify the available remedies.",
//     services: [
//       "Consumer complaints",
//       "Product and service disputes",
//       "Consumer protection advisory",
//       "Consumer forum representation",
//     ],
//   },
//   {
//     title: "Medical Negligence",
//     description:
//       "Careful advocacy in matters where trust and accountability matter.",
//     overview:
//       "Medical negligence matters require close attention to records, applicable professional standards, causation and the evidence needed to evaluate a potential claim or defence.",
//     services: [
//       "Medical record review",
//       "Negligence claim assessment",
//       "Consumer proceedings",
//       "Related dispute representation",
//     ],
//   },
//   {
//     title: "Corporate Advisory & Due Diligence",
//     description:
//       "Insightful review for informed decisions and sustainable growth.",
//     overview:
//       "Due diligence helps identify legal, contractual and operational risks before a transaction or major business decision. Structured review supports better-informed commercial decisions.",
//     services: [
//       "Legal due diligence",
//       "Contract and document review",
//       "Corporate risk assessment",
//       "Transaction advisory",
//     ],
//   },
// ];

const practices = [
  {
    title: "Litigation and Dispute Resolution",
    description:
      "Strategic representation in disputes, focused on protecting legal rights and pursuing appropriate resolutions.",
    overview:
      "Litigation and dispute resolution require a careful assessment of the facts, applicable law, available remedies, and the client's objectives. We assist clients in evaluating their legal position and developing an appropriate strategy.",
    services: [
      "Dispute assessment and legal advice",
      "Litigation strategy",
      "Civil and commercial disputes",
      "Dispute resolution proceedings",
    ],
  },
  {
    title: "Criminal Law and White-Collar Crimes",
    description:
      "Legal representation in criminal proceedings, investigations, bail matters, and white-collar crime cases.",
    overview:
      "Criminal proceedings demand careful preparation, sound legal analysis, and a considered approach to protecting legal rights. We assist clients in criminal matters, including bail applications, anticipatory bail, NDPS matters, POCSO matters, and white-collar crime proceedings.",
    services: [
      "Criminal defence and legal advice",
      "Regular bail and anticipatory bail",
      "NDPS matters",
      "POCSO matters",
      "White-collar crime proceedings",
    ],
  },
  {
    title: "General Litigation",
    description:
      "Prepared legal representation in litigation matters before appropriate courts and judicial forums.",
    overview:
      "Effective litigation begins with a thorough understanding of the facts, evidence, and legal issues involved. We help clients assess their cases, understand available remedies, and pursue appropriate legal proceedings.",
    services: [
      "Case assessment and preparation",
      "Civil litigation",
      "Interim applications",
      "Court representation",
    ],
  },
  {
    title: "Arbitration and Dispute Resolution",
    description:
      "Guidance and representation in arbitration proceedings and alternative dispute resolution matters.",
    overview:
      "Arbitration and other dispute resolution processes can offer structured ways to address disagreements. We assist clients in assessing disputes, understanding procedural requirements, and pursuing appropriate remedies.",
    services: [
      "Arbitration advisory",
      "Arbitration proceedings",
      "Dispute strategy",
      "Settlement and resolution support",
    ],
  },
  {
    title: "Constitutional Law and Writs",
    description:
      "Legal advice and representation in constitutional matters and writ proceedings.",
    overview:
      "Constitutional matters may involve fundamental rights, administrative decisions, and the exercise of public authority. We assist clients in examining legal issues and evaluating appropriate constitutional remedies.",
    services: [
      "Constitutional law advisory",
      "Writ petitions",
      "Administrative law matters",
      "Representation in appropriate proceedings",
    ],
  },
  {
    title: "Corporate and Commercial",
    description:
      "Legal support for businesses navigating commercial relationships, obligations, and disputes.",
    overview:
      "Commercial activities involve contractual responsibilities, business relationships, and legal risks. We help clients understand relevant legal issues and address commercial concerns through considered legal advice.",
    services: [
      "Commercial legal advisory",
      "Business disputes",
      "Commercial agreements",
      "Contractual obligations",
    ],
  },
  {
    title: "Corporate and Commercial Law",
    description:
      "Practical legal guidance on corporate matters, commercial transactions, and contractual relationships.",
    overview:
      "Corporate and commercial matters require an understanding of business objectives, legal obligations, and applicable regulatory requirements. We provide considered legal guidance to help clients evaluate their options.",
    services: [
      "Corporate legal advisory",
      "Commercial contracts",
      "Business transactions",
      "Contractual dispute resolution",
    ],
  },
  {
    title: "Corporate Advisory and Due Diligence",
    description:
      "Structured legal review to identify risks and support informed business decisions.",
    overview:
      "Corporate advisory and due diligence involve examining legal documents, contractual obligations, and potential risks associated with transactions or business decisions.",
    services: [
      "Legal due diligence",
      "Corporate document review",
      "Contract review",
      "Legal risk assessment",
      "Transaction advisory",
    ],
  },
  {
    title: "Banking and Finance",
    description:
      "Legal assistance in banking matters, financial transactions, lending, and related disputes.",
    overview:
      "Banking and finance matters may involve lending arrangements, contractual obligations, financial documentation, and disputes. We help clients assess their legal position and available remedies.",
    services: [
      "Loan documentation review",
      "Financial contract review",
      "Banking disputes",
      "Lending and security matters",
    ],
  },
  {
    title: "Competition Law",
    description:
      "Legal guidance on competition-related issues, business conduct, and regulatory obligations.",
    overview:
      "Competition law concerns may arise from commercial arrangements, market conduct, and business practices. We assist clients in understanding applicable legal requirements and evaluating potential regulatory issues.",
    services: [
      "Competition law advisory",
      "Commercial arrangement review",
      "Regulatory compliance guidance",
      "Competition-related disputes",
    ],
  },
  {
    title: "Intellectual Property Rights (IPR)",
    description:
      "Legal support concerning intellectual property protection, ownership, and disputes.",
    overview:
      "Intellectual property rights can be important to businesses, professionals, and creators. We assist clients with intellectual property matters and the legal issues surrounding the protection and use of their work.",
    services: [
      "Trademark-related matters",
      "Copyright matters",
      "Intellectual property agreements",
      "IPR disputes",
    ],
  },
  {
    title: "Technology, Media and Telecommunications (TMT)",
    description:
      "Legal guidance on technology, media, telecommunications, and related regulatory matters.",
    overview:
      "Technology, media, and telecommunications raise legal questions involving contracts, digital activities, intellectual property, and regulatory obligations. We help clients assess relevant legal issues and available options.",
    services: [
      "Technology agreements",
      "Software and IT contracts",
      "Media-related legal matters",
      "Telecommunications and regulatory matters",
    ],
  },
  {
    title: "Property, Employment and Personal Law",
    description:
      "Legal guidance across property matters, employment concerns, and personal legal issues.",
    overview:
      "Property, employment, and personal legal matters often involve important individual, family, and business interests. We help clients understand their legal position and consider appropriate courses of action.",
    services: [
      "Property-related legal advice",
      "Employment matters",
      "Personal legal matters",
      "Dispute assessment and representation",
    ],
  },
  {
    title: "Real Estate and Property Law",
    description:
      "Legal assistance in real estate transactions, property documentation, ownership issues, and disputes.",
    overview:
      "Property matters require careful consideration of ownership, title documents, contractual obligations, and applicable laws. We assist clients in evaluating property-related legal issues and addressing disputes.",
    services: [
      "Property documentation",
      "Title and document review",
      "Real estate transactions",
      "Property dispute resolution",
    ],
  },
  {
    title: "Employment and Labour Law",
    description:
      "Legal advice on employment relationships, labour matters, workplace obligations, and POSH issues.",
    overview:
      "Employment and labour matters involve workplace rights, employer and employee responsibilities, and compliance with applicable laws. We assist clients in addressing employment disputes and related legal concerns, including POSH matters.",
    services: [
      "Employment agreements",
      "Employment and labour disputes",
      "Workplace legal advisory",
      "POSH-related legal matters",
    ],
  },
  {
    title: "Family and Matrimonial Law",
    description:
      "Considered legal guidance in family disputes and matrimonial proceedings.",
    overview:
      "Family and matrimonial matters require discretion, sensitivity, and a clear understanding of the applicable law. We assist clients in evaluating their legal options and addressing matters affecting their personal and family interests.",
    services: [
      "Matrimonial proceedings",
      "Divorce-related matters",
      "Family disputes",
      "Legal advice on personal and family matters",
    ],
  },
  {
    title: "Public Interest and Consumer Matters",
    description:
      "Legal assistance in public interest issues and disputes concerning consumer rights.",
    overview:
      "Public interest and consumer matters can involve individual rights, access to appropriate remedies, and issues affecting the wider public. We help clients understand relevant legal provisions and available avenues for redress.",
    services: [
      "Public interest legal matters",
      "Consumer disputes",
      "Legal remedies and representation",
      "Consumer protection advisory",
    ],
  },
  {
    title: "Consumer Laws",
    description:
      "Legal advice and representation concerning consumer rights and consumer protection matters.",
    overview:
      "Consumer law addresses disputes involving goods, services, consumer rights, and applicable legal protections. We assist clients in assessing complaints and understanding appropriate legal remedies.",
    services: [
      "Consumer complaints",
      "Consumer protection advisory",
      "Goods and services disputes",
      "Consumer forum proceedings",
    ],
  },
  {
    title: "Medical Negligence",
    description:
      "Legal assistance in medical negligence disputes and matters involving professional accountability.",
    overview:
      "Medical negligence matters require careful examination of records, relevant evidence, applicable professional standards, and the legal issues involved. We assist clients in assessing claims and related proceedings.",
    services: [
      "Medical record review",
      "Medical negligence claim assessment",
      "Related consumer proceedings",
      "Dispute representation",
    ],
  },
  {
    title: "Environmental Law",
    description:
      "Legal guidance on environmental obligations, regulatory requirements, and related disputes.",
    overview:
      "Environmental matters may involve regulatory compliance, statutory obligations, and disputes concerning environmental responsibilities. We assist clients in understanding the relevant legal framework and evaluating appropriate responses.",
    services: [
      "Environmental law advisory",
      "Regulatory compliance matters",
      "Environmental disputes",
      "Related legal proceedings",
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
