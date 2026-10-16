// import SEO from "../../components/seo/Seo.jsx";
// import { ArrowUpRight, ChevronRight } from "lucide-react";

// function Home() {
//   return (
//     <>
//       <SEO
//         title="Legal Counsel"
//         description="[INSERT VERIFIED HOMEPAGE META DESCRIPTION]"
//         canonical="/"
//       />

//       <section className="hero" id="top">
//         <img
//           src="/legal-hero.png"
//           alt="Sunlight across a modern boardroom"
//           fill
//           priority
//           className="hero-image"
//           sizes="100vw"
//         />
//         <div class="hero-overlay" />
//         <div class="container hero-content">
//           <p class="eyebrow light">INDEPENDENT COUNSEL / EST. 1998</p>
//           <h1>
//             Where insight
//             <br />
//             <em>becomes</em> influence.
//           </h1>
//           <p className="hero-copy">
//             Strategic legal counsel for the decisions that shape businesses,
//             institutions, and legacies.
//           </p>
//           <div className="hero-actions">
//             <span className="button button-gold" href="#contact">
//               Start a conversation <ArrowUpRight size={16} />
//             </span>
//             <h5 className="text-link light" href="#about">
//               Discover our perspective <ChevronRight size={16} />
//             </h5>
//           </div>
//         </div>
//         <div className="hero-footer container">
//           <span>SCROLL TO EXPLORE</span>
//           <span className="line" />
//           <span>01 / 04</span>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Scale,
  ShieldCheck,
  Compass,
  Award,
  BookOpen,
} from "lucide-react";
import Slugify from "../../utils/slugify.js";

const pillars = [
  {
    icon: Scale,
    title: "JUSTICE",
    subtitle: "Our Mission",
    description:
      "Upholding the rule of law and pursuing justice through diligent and principled legal representation.",
  },
  {
    icon: ShieldCheck,
    title: "INTEGRITY",
    subtitle: "Our Principle",
    description:
      "Building trust through honest advice, professional ethics, confidentiality, and responsibility.",
  },
  {
    icon: Award,
    title: "EXCELLENCE",
    subtitle: "Our Standard",
    description:
      "Delivering thoughtful legal analysis, meticulous preparation, and a commitment to quality in every matter.",
  },
];

const storyMilestones = [
  {
    year: "1994",
    title: "The Beginning",
    description:
      "Advocate Parwez Ahmed Siddiqui began his legal practice in Criminal Litigation, building his work on hard work, honest advice, and a strong sense of duty.",
  },
  {
    year: "A New Generation",
    title: "A Family of Advocates",
    description:
      "Advocate Rahil Ahmed Siddiqui, Advocate Mrs. Huma A. Shaikh, and Advocate Eram M. Sayyad joined the practice, continuing the family's commitment to the legal profession.",
  },
  {
    year: "Today",
    title: "Experience Meets Perspective",
    description:
      "The firm combines its founder's experience with the perspective of a second generation of advocates, serving individuals, families, and businesses across a broader range of legal matters.",
  },
];

const approachPrinciples = [
  {
    icon: Scale,
    title: "Analytical Rigour",
    description:
      "A thorough understanding of the law and a precise assessment of the facts underpin every matter we handle.",
  },
  {
    icon: ShieldCheck,
    title: "Strategic Representation",
    description:
      "We evaluate legal positions, assess available options, and develop strategies suited to each client's circumstances.",
  },
  {
    icon: BookOpen,
    title: "Professional Ethics",
    description:
      "Our work reflects meticulous preparation, sound legal reasoning, professional responsibility, and respect for the legal profession.",
  },
];

// ----------------------

const FIRM = {
  name: "Siddiqui Law Associates",
  tagline: "Committed to Justice. Dedicated to Your Rights.",
  phone: "+917506926969",
  email: "info@siddiquilawassociates.in",
  enquiryEmail: "adv.rahilsiddiqui@gmail.com",
  address:
    "Chamber 23, 3rd Floor, Prakash Chamber, 77 Nagindas Master Road, Mumbai - 400001",
  domain: "https://www.siddiquilawassociates.in",
};

const homeImages = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90",
  values:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
  consultation:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
};

const practices = [
  [
    "Arbitration & Dispute Resolution",
    "Legal support for arbitration proceedings and dispute resolution.",
  ],

  [
    "Employment & Labour Law",
    "Legal assistance with employment and labour matters.",
  ],
  [
    "Banking & Finance",
    "Legal assistance relating to banking and financial matters.",
  ],
  [
    "Family & Matrimonial Law",
    "Legal support for family and matrimonial disputes.",
  ],
  [
    "Technology, Media & Telecommunications (TMT)",
    "Legal support for technology, media and telecommunications matters.",
  ],
];

const team = [
  {
    name: "Mr. Parwez Ahmed Siddiqui",
    role: "Managing Partner",
    qualification: "B.A., LL.B.",
    experience: "47 years of practice",
  },
  {
    name: "Mr. Rahil Ahmed Siddiqui",
    role: "Founder & Partner",
    qualification: "B.L.S., LL.B., LL.M. in IT & IPR",
    experience: "35 years of practice",
  },
  {
    name: "Ms. Huma Ahmed Shaikh",
    role: "Senior Associate",
    qualification: "B.A. & LL.B.",
    experience: "20 years of practice",
  },
  {
    name: "Mr. Eram M. Saiyad",
    role: "Associate",
    qualification: "B.M.S. & LL.B.",
    experience: "20 years of practice",
  },
];

const firmValues = [
  {
    icon: Compass,
    number: "01",
    title: "Integrity & Professionalism",
    description:
      "We are committed to ethical legal services, professional conduct and responsible guidance.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Confidentiality & Trust",
    description:
      "We recognize the importance of confidentiality and protecting our clients' interests.",
  },
  {
    icon: Scale,
    number: "03",
    title: "Commitment to Justice",
    description:
      "We approach legal matters with careful consideration and a strong commitment to justice.",
  },
];

function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs ${
        light ? "text-amber-300" : "text-amber-800"
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, highlight, light = false }) {
  return (
    <>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-7 text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-[#122337]"
        }`}
      >
        {title}
        <br />
        <span
          className={`font-serif italic font-normal ${
            light ? "text-[#d4bd91]" : "text-[#967748]"
          }`}
        >
          {highlight}
        </span>
      </h2>
    </>
  );
}

function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#0c1826] sm:min-h-[740px] lg:min-h-[800px]">
      {/* Hero Background Image */}
      <img
        src={homeImages.hero}
        alt="Contemporary architecture in Mumbai"
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />

      {/* Background Overlays */}
      <div className="absolute inset-0 -z-20 bg-[#091523]/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#091523]/95 via-[#091523]/75 to-[#091523]/20" />

      {/* Decorative Divider */}
      <div className="absolute inset-y-0 right-[12%] hidden w-px bg-white/15 lg:block" />

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-32 pt-24 sm:px-8 sm:pb-36 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <Eyebrow light>Legal Counsel · Mumbai, India</Eyebrow>

          {/* Main Heading */}
          <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-[-0.045em] text-[#F5F1E8] sm:text-7xl lg:text-[92px]">
            Siddiqui Law
            <br />
            <span className="font-serif italic font-normal text-[#d4bd91]">
              Associates
            </span>
          </h1>

          {/* Primary Introduction */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">
            With over three decades of experience in the courts, Siddiqui Law
            Associates is a Mumbai-based law firm committed to providing
            considered legal counsel and effective representation.
          </p>

          {/* Firm Overview */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Our practice is rooted in criminal litigation and extends across
            corporate, commercial, civil, property, family, and regulatory law.
            We represent clients before courts in Mumbai and across other
            states, guided by meticulous preparation, clear advice, professional
            ethics, and an unwavering commitment to justice.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href={`https://wa.me/${FIRM.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-14 items-center gap-5 bg-[#c5a878] px-6 py-4 text-sm font-semibold text-[#111e2c] transition hover:bg-[#e0cba4]"
            >
              Contact the Firm
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <Link
              to="/the-firm"
              className="group inline-flex items-center gap-3 py-3 text-sm text-white/90 transition hover:text-[#d4bd91]"
            >
              Discover the Firm
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Information Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="text-xs leading-6 text-white/65 sm:text-sm">
            Legal Services · Mumbai, India
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[#c5a878]" />
            <span className="text-xs tracking-[0.2em] text-white">
             16 PRACTICE AREAS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// function HomeHero() {
//   return (
//     <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#0c1826] sm:min-h-[740px] lg:min-h-[800px]">
//       <img
//         src={homeImages.hero}
//         alt="Contemporary architecture in Mumbai"
//         fetchPriority="high"
//         className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
//       />

//       <div className="absolute inset-0 -z-20 bg-[#091523]/65" />
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#091523]/95 via-[#091523]/75 to-[#091523]/20" />

//       <div className="absolute inset-y-0 right-[12%] hidden w-px bg-white/15 lg:block" />

//       <div className="mx-auto w-full max-w-7xl px-5 pb-32 pt-24 sm:px-8 sm:pb-36 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-4xl"
//         >
//           <Eyebrow light>Legal counsel · Mumbai, India</Eyebrow>

//           <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-[-0.045em] text-[#F5F1E8] sm:text-7xl lg:text-[92px]">
//             Siddiqui Law
//             <br />
//             <span className="font-serif italic font-normal text-[#d4bd91]">
//               Associates
//             </span>
//           </h1>

//           <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">
//             {FIRM.tagline}
//           </p>

//           <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
//             Providing legal services to individuals, businesses and
//             organizations, with a commitment to integrity, confidentiality,
//             professional responsibility and justice.
//           </p>

//           <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
//             <a
//               href={`https://wa.me/${FIRM.phone.replace(/\D/g, "")}`}
//               target="_blank"
//               rel="noreferrer"
//               className="group inline-flex min-h-14 items-center gap-5 bg-[#c5a878] px-6 py-4 text-sm font-semibold text-[#111e2c] transition hover:bg-[#e0cba4]"
//             >
//               Contact the Firm
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </a>

//             <Link
//               to="/the-firm"
//               className="group inline-flex items-center gap-3 py-3 text-sm text-white/90 transition hover:text-[#d4bd91]"
//             >
//               Discover the firm
//               <ArrowRight
//                 size={17}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 border-t border-white/20">
//         <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
//           <p className="text-xs leading-6 text-white/65 sm:text-sm">
//             Legal services · Mumbai, India
//           </p>
//           <div className="flex items-center gap-3">
//             <span className="h-px w-12 bg-[#c5a878]" />
//             <span className="text-xs tracking-[0.2em] text-white">
//               {String(practices.length).padStart(2, "0")} PRACTICE AREAS
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function HomeIntroduction() {
  return (
    <section className="bg-[#f8f7f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Who we are"
            title="Committed to justice."
            highlight="Dedicated to your rights."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="pt-1 lg:pt-12"
        >
          <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            {FIRM.name} is based in Mumbai and provides legal services across a
            range of practice areas. The firm represents clients before District
            Courts, High Courts and the Supreme Court of India, as well as
            relevant civil courts and tribunals.
          </p>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            The firm's areas of practice include civil and commercial
            litigation, arbitration, family disputes, intellectual property
            rights, media law, corporate advisory, criminal law, real estate,
            employment law, taxation and regulatory affairs.
          </p>

          <Link
            to="/the-firm"
            className="group mt-8 inline-flex items-center gap-3 border-b border-[#b49a70] pb-2 text-sm font-semibold text-[#122337] transition hover:text-[#967748]"
          >
            More about the firm
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-[#dedbd2] pt-8 sm:mt-20">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            {
              title: "Our Mission",
              text: "To deliver accessible, ethical and effective legal solutions while safeguarding clients' rights and interests.",
            },
            {
              title: "Our Vision",
              text: "To be a trusted name in the legal profession, recognized for integrity, excellence and commitment to justice.",
            },
            {
              title: "Our Commitment",
              text: "To provide clear guidance, practical solutions and personalized attention to each client's needs.",
            },
          ].map((item, index) => (
            <div key={item.title} className="flex gap-4">
              <span className="pt-1 font-serif text-lg text-[#967748]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#122337]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeValues() {
  return (
    <section className="overflow-hidden bg-[#f8f7f3] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <img
            src={homeImages.values}
            alt="Professional office interior"
            loading="lazy"
            className="aspect-[4/5] max-h-[650px] w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[#c5a878] px-6 py-5 text-[#101d2b] sm:px-8 sm:py-7">
            <p className="font-serif text-3xl italic">Integrity.</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em]">
              Professional responsibility
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="lg:py-8"
        >
          <SectionHeading
            eyebrow="Our commitment"
            title="Principles that"
            highlight="guide our work."
          />

          <p className="mt-7 text-base leading-8 text-slate-600">
            The firm is committed to reliable and ethical legal services for
            individuals, corporate clients, businesses and organizations. It
            aims to make complex legal processes easier to understand through
            clear guidance and practical solutions.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Integrity and professionalism",
              "Confidentiality and client-focused attention",
              "Clear guidance and practical solutions",
              "Commitment to justice and ethical service",
            ].map((value) => (
              <div key={value} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eee7d9]">
                  <Check size={14} className="text-[#967748]" />
                </span>
                <span className="text-sm font-medium leading-6 text-[#263548]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/the-firm"
            className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#122337] transition hover:text-[#967748]"
          >
            Learn about our firm
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function HomePrinciples() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What guides us"
          title="A commitment to"
          highlight="responsible legal service."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {firmValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#e4e0d7] bg-[#f8f7f3] p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-[#967748]">
                    {value.number}
                  </span>
                  <Icon size={23} className="text-[#967748]" />
                </div>

                <h3 className="mt-8 text-xl font-medium text-[#122337]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HomeInsights() {
  return (
    <section className="bg-[#f8f7f3] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <Eyebrow>Insights & updates</Eyebrow>
          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-[#122337] sm:text-5xl lg:text-6xl">
            Legal knowledge,
            <br />
            <span className="font-serif italic font-normal text-[#967748]">
              made accessible.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Explore legal articles and updates. The firm's website content
            identifies this section for blog links and ongoing updates.
          </p>
        </div>

        <Link
          to="/insights"
          className="group inline-flex items-center gap-3 self-start border-b border-[#b49a70] pb-2 text-sm font-semibold text-[#122337] transition hover:text-[#967748] lg:self-auto"
        >
          Explore insights
          <BookOpen size={17} />
          <ArrowRight
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}

function HomeExpertise() {
  return (
    <section className="bg-[#111111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading
              eyebrow="Our expertise"
              title="Legal support for"
              highlight="matters that count."
              light
            />
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Explore the legal practice areas listed by Siddiqui Law
              Associates. Contact the firm to discuss your specific needs.
            </p>
          </div>

          <Link
            to="/our-expertise"
            className="group inline-flex items-center gap-3 self-start border-b border-white/30 pb-2 text-sm text-white transition hover:border-[#d4bd91] hover:text-[#d4bd91] sm:self-auto"
          >
            Explore all practices Read More..
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map(([name, description], index) => (
            <Link
              to={`/our-expertise/${Slugify(name)}`}
              key={name}
              className="group relative flex min-h-[225px] flex-col border-b border-r border-white/15 p-6 transition duration-300 hover:bg-white/[0.045] sm:p-8 lg:min-h-[245px] lg:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-[#d4bd91]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-white/45 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d4bd91]"
                />
              </div>

              <div className="mt-auto pt-8">
                <h3 className="text-lg font-medium leading-snug text-white sm:text-xl">
                  {name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// function HomeContact() {
//   return (
//     <section className="relative isolate overflow-hidden bg-[#101d2b] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
//       <img
//         src={homeImages.consultation}
//         alt=""
//         aria-hidden="true"
//         loading="lazy"
//         className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
//       />
//       <div className="absolute inset-0 -z-10 bg-[#101d2b]/90" />

//       <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
//         <div className="max-w-3xl">
//           <SectionHeading
//             eyebrow="Contact us"
//             title="Reach out to"
//             highlight="Siddiqui Law Associates."
//             light
//           />

//           <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
//             For enquiries, contact the firm by phone, email or WhatsApp. Please
//             avoid sharing confidential or sensitive case documents through an
//             unsecured channel.
//           </p>

//           <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
//             <a
//               href={`https://wa.me/${FIRM.phone.replace(/\D/g, "")}`}
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex min-h-12 items-center gap-3 bg-[#c5a878] px-5 py-3 text-sm font-semibold text-[#101d2b] transition hover:bg-[#e0cba4]"
//             >
//               <MessageCircle size={18} />
//               WhatsApp the firm
//               <ArrowUpRight size={16} />
//             </a>
//             <a
//               href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
//               className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-5 py-3 text-sm text-white transition hover:border-[#d4bd91] hover:text-[#d4bd91]"
//             >
//               <Phone size={17} />
//               Call the firm
//             </a>
//           </div>
//         </div>

//         <div className="space-y-7 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-2">
//           <div className="flex items-start gap-4">
//             <Mail className="mt-1 shrink-0 text-[#d4bd91]" size={21} />
//             <div>
//               <h3 className="text-sm font-semibold text-white">Email</h3>
//               <a
//                 href={`mailto:${FIRM.email}`}
//                 className="mt-2 block break-all text-sm leading-6 text-white/60 hover:text-[#d4bd91]"
//               >
//                 {FIRM.email}
//               </a>
//               <a
//                 href={`mailto:${FIRM.enquiryEmail}`}
//                 className="mt-1 block break-all text-sm leading-6 text-white/60 hover:text-[#d4bd91]"
//               >
//                 {FIRM.enquiryEmail}
//               </a>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <Phone className="mt-1 shrink-0 text-[#d4bd91]" size={21} />
//             <div>
//               <h3 className="text-sm font-semibold text-white">
//                 Phone / WhatsApp
//               </h3>
//               <a
//                 href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
//                 className="mt-2 block text-sm text-white/60 hover:text-[#d4bd91]"
//               >
//                 {FIRM.phone}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function About() {
  return (
    <main className="bg-[#F5F1E8] text-[#122337]">
      {/* About Us Hero */}
      <section className="relative overflow-hidden bg-[#040404] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-10">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0c1826] via-[#122337] to-[#091523]" /> */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#d4bd91]">
            Siddiqui Law Associates · Mumbai
          </p>

          <h1 className="mt-8 max-w-4xl text-5xl font-medium leading-tight tracking-tight text-[#f5f1e8] sm:text-6xl lg:text-8xl">
            About{" "}
            <span className="font-serif italic font-normal text-[#d4bd91]">
              Us
            </span>
          </h1>

          <p className="mt-7 max-w-3xl font-serif text-2xl leading-relaxed text-white sm:text-3xl lg:text-4xl">
            The law is our foundation
            <br />
            <span className="italic text-[#d4bd91]">
              Justice is our mission
            </span>
          </p>

          <div className="mt-10 h-px w-24 bg-[#c5a878]" />
        </motion.div>
        <div className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-0 lg:px-12">
          {/* Background */}
        

          <div className="relative mx-auto max-w-7xl">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-xl  tracking-widest text-[#f5f1e8] sm:text-2xl">
                SIDDIQUI LAW ASSOCIATES
              </p>

              <h2 className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-[#d4bd91] sm:text-base">
                Our Guiding Principles
              </h2>
            </motion.div>

            {/* Gold divider */}
            <div className="mt-9 h-px w-full bg-[#c5a878]/80 sm:mt-10" />

            {/* Three Pillars */}
            <div className="grid grid-cols-1 divide-y divide-[#c5a878]/30 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.article
                    key={pillar.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.12,
                    }}
                    className="group flex flex-col items-center px-5 py-8 text-center sm:px-4 sm:py-9 lg:px-10 lg:py-10"
                  >
                    <Icon
                      size={34}
                      strokeWidth={2}
                      className="text-[#d4bd91] transition-transform duration-300 group-hover:-translate-y-1"
                    />

                    <h3 className="mt-5 text-xl font-bold tracking-wide text-[#f5f1e8] sm:text-lg lg:text-xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-base font-medium text-[#d4bd91]">
                      {pillar.subtitle}
                    </p>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
                      {pillar.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            {/* Bottom divider */}
            <div className="h-px w-full bg-[#c5a878]/80" />

            {/* Closing tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-8 text-center font-serif text-xl font-semibold leading-relaxed text-[#d4bd91] sm:mt-9 sm:text-2xl lg:text-3xl"
            >
              The Law Is Our Foundation. Justice Is Our Mission.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Firm Introduction */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#967748]">
              Who We Are
            </p>

            <h2 className="mt-5 text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
              A legacy of law
              <span className="block font-serif italic font-normal text-[#967748]">
                A commitment to justice
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
          >
            <p>
              Siddiqui Law Associates is a Mumbai-based law firm with over three
              decades of experience in the courts. Our practice is rooted in
              Criminal Litigation and extends across corporate, commercial,
              civil, property, family, and regulatory law.
            </p>

            <p>
              We appear in all courts in Mumbai and in courts across other
              states.
            </p>

            <p className="border-l-2 border-[#c5a878] pl-5 font-serif text-xl italic leading-8 text-[#122337] sm:text-2xl">
              We do not treat clients as case numbers. We listen carefully,
              explain clearly, and fight diligently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="border-y border-[#e4e0d7] bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#967748]">
              Our Story
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Built on experience
              <span className="block font-serif italic font-normal text-[#967748]">
                Continued through generations
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Our story began in 1994, when Advocate Parwez Ahmed Siddiqui
              started practicing law. He began with Criminal Litigation, where
              he built a reputation on hard work, honest advice, and a deep
              sense of duty to the people who trusted him with their liberty and
              their future.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Today, his son Advocate Rahil Ahmed Siddiqui and his daughters,
              Advocate Mrs. Huma A. Shaikh and Advocate Eram M. Sayyad, practice
              alongside him. We grew up in a home where law was a way of life,
              and we learned early that behind every case file is a person, a
              family, or a livelihood.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Today, the firm combines the experience of its founder with the
              energy of a second generation of advocates. As the practice has
              grown, so has the range of matters we handle, allowing us to serve
              individuals, families, and businesses under one roof.
            </p>
          </motion.div>

          <div className="mt-14 border-t border-[#e4e0d7]">
            {storyMilestones.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid gap-3 border-b border-[#e4e0d7] py-8 sm:grid-cols-[180px_1fr] sm:gap-10 sm:py-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#967748]">
                  {item.year}
                </p>

                <div>
                  <h3 className="text-xl font-medium sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[#967748]">
                Our Approach
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                Thoughtful counsel
                <span className="mt-2 block font-serif italic font-normal text-[#967748]">
                  Strategic advocacy
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9"
            >
              <p>
                At Siddiqui Law Associates, our approach is founded on the
                belief that effective legal representation begins with a
                thorough understanding of the law, a precise assessment of the
                facts, and a clearly defined legal strategy.
              </p>

              <p>
                We approach each matter with analytical rigour, strategic
                foresight, and a commitment to professional ethics. Whether
                advising on complex legal issues, navigating disputes, or
                representing clients before judicial and quasi-judicial forums,
                we emphasise meticulous preparation, sound legal reasoning, and
                advocacy grounded in applicable law.
              </p>

              <p>
                We recognise that every matter presents distinct challenges and
                requires an approach suited to its particular circumstances.
                Accordingly, we focus on understanding the legal position,
                evaluating available options, and providing considered advice
                that enables informed decision-making.
              </p>

              <p>
                For us, the pursuit of justice demands more than knowledge of
                the law. It requires preparation, conviction, sound judgment,
                and unwavering respect for the principles that govern the legal
                profession.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {approachPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#e4e0d7] bg-white p-6 sm:p-8"
                >
                  <Icon size={25} className="text-[#967748]" />

                  <h3 className="mt-7 text-xl font-medium">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#111111] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[#d4bd91]">
            Siddiqui Law Associates
          </p>

          <h2 className="mt-6 font-serif text-3xl italic leading-relaxed text-[#f5f1e8] sm:text-4xl lg:text-5xl">
            The pursuit of justice demands preparation, conviction, and
            unwavering commitment.
          </h2>
        </motion.div>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#122337]">
      <HomeHero />
      <About />
      {/* <HomeIntroduction />
      <HomeValues />
      <HomePrinciples />
      <HomeInsights />
      <HomeExpertise /> */}
    </main>
  );
}

{
  /* <HomeContact /> */
}

{
  /* <HomeTeam /> */
}
// function HomeTeam() {
//   return (
//     <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <SectionHeading
//               eyebrow="Our team"
//               title="Experience guided"
//               highlight="by professionalism."
//             />
//             <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
//               Meet the legal professionals identified in the firm's supplied
//               website content.
//             </p>
//           </div>

//           <Link
//             to="/our-team"
//             className="group inline-flex items-center gap-3 self-start border-b border-[#b49a70] pb-2 text-sm font-semibold text-[#122337] transition hover:text-[#967748] sm:self-auto"
//           >
//             Meet the team
//             <ArrowRight
//               size={17}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </Link>
//         </div>

//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {team.map((person, index) => (
//             <motion.article
//               key={person.name}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.45, delay: index * 0.08 }}
//               className="flex flex-col border border-[#e4e0d7] bg-[#000000] p-6 sm:p-7"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-full p-1 border border-[#d7c39e] text-[#967748]">
//                 <img
//                   src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1792076367/laww_qw7wao.svg"
//                   alt="Law"
//                 />
//               </div>

//               <h3 className="mt-6 text-lg font-semibold tracking-wide leading-snug text-[#e8ecf1]">
//                 {person.name}
//               </h3>
//               <p className="mt-2 text-sm font-medium text-[#ffd000]">
//                 {person.role}
//               </p>
//               <p className="mt-4 text-sm leading-6 text-slate-200">
//                 {person.qualification}
//               </p>
//               <p className="mt-2 text-xs leading-5 text-[#C5A880]">
//                 {person.experience}
//               </p>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
