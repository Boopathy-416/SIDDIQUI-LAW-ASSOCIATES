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
  Users,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  BookOpen,
} from "lucide-react";
import Slugify from "../../utils/slugify.js";

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
  hero:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90",
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
    "Criminal Law & White-Collar Crimes",
    "Representation and legal assistance in criminal matters.",
  ],
  [
    "Corporate & Commercial Law",
    "Legal guidance for companies and commercial matters.",
  ],


  [
    "Real Estate & Property Law",
    "Legal support for property matters and disputes.",
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
      <img
        src={homeImages.hero}
        alt="Contemporary architecture in Mumbai"
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-20 bg-[#091523]/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#091523]/95 via-[#091523]/75 to-[#091523]/20" />

      <div className="absolute inset-y-0 right-[12%] hidden w-px bg-white/15 lg:block" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-32 pt-24 sm:px-8 sm:pb-36 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <Eyebrow light>Legal counsel · Mumbai, India</Eyebrow>

          <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-7xl lg:text-[92px]">
            Siddiqui Law
            <br />
            <span className="font-serif italic font-normal text-[#d4bd91]">
              Associates.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">
            {FIRM.tagline}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Providing legal services to individuals, businesses and
            organizations, with a commitment to integrity, confidentiality,
            professional responsibility and justice.
          </p>

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
              to="/about/firm"
              className="group inline-flex items-center gap-3 py-3 text-sm text-white/90 transition hover:text-[#d4bd91]"
            >
              Discover the firm
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="text-xs leading-6 text-white/65 sm:text-sm">
            Legal services · Mumbai, India
          </p>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[#c5a878]" />
            <span className="text-xs tracking-[0.2em] text-white">
              {String(practices.length).padStart(2, "0")} PRACTICE AREAS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

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
            {FIRM.name} is based in Mumbai and provides legal services
            across a range of practice areas. The firm represents clients
            before District Courts, High Courts and the Supreme Court of
            India, as well as relevant civil courts and tribunals.
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

function HomeExpertise() {
  return (
    <section className="bg-[#101d2b] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
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

function HomeTeam() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading
              eyebrow="Our team"
              title="Experience guided"
              highlight="by professionalism."
            />
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Meet the legal professionals identified in the firm's supplied
              website content.
            </p>
          </div>

          <Link
            to="/our-team"
            className="group inline-flex items-center gap-3 self-start border-b border-[#b49a70] pb-2 text-sm font-semibold text-[#122337] transition hover:text-[#967748] sm:self-auto"
          >
            Meet the team
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col border border-[#e4e0d7] bg-[#000000] p-6 sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full p-1 border border-[#d7c39e] text-[#967748]">
                <img src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1791943251/lawww_rmus5a.png" alt="Law" />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-wide leading-snug text-[#e8ecf1]">
                {person.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#ffd000]">
                {person.role}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                {person.qualification}
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                {person.experience}
              </p>
            </motion.article>
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
            individuals, corporate clients, businesses and organizations.
            It aims to make complex legal processes easier to understand
            through clear guidance and practical solutions.
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

function HomeContact() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101d2b] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <img
        src={homeImages.consultation}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-[#101d2b]/90" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Contact us"
            title="Reach out to"
            highlight="Siddiqui Law Associates."
            light
          />

          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            For enquiries, contact the firm by phone, email or WhatsApp.
            Please avoid sharing confidential or sensitive case documents
            through an unsecured channel.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${FIRM.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-3 bg-[#c5a878] px-5 py-3 text-sm font-semibold text-[#101d2b] transition hover:bg-[#e0cba4]"
            >
              <MessageCircle size={18} />
              WhatsApp the firm
              <ArrowUpRight size={16} />
            </a>
            <a
              href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-5 py-3 text-sm text-white transition hover:border-[#d4bd91] hover:text-[#d4bd91]"
            >
              <Phone size={17} />
              Call the firm
            </a>
          </div>
        </div>

        <div className="space-y-7 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-2">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 shrink-0 text-[#d4bd91]" size={21} />
            <div>
              <h3 className="text-sm font-semibold text-white">Office address</h3>
              <p className="mt-2 text-sm leading-7 text-white/60">
                {FIRM.address}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Prakash+Chamber+77+Nagindas+Master+Road+Mumbai+400001"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-[#d4bd91] hover:text-white"
              >
                Find the office <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="mt-1 shrink-0 text-[#d4bd91]" size={21} />
            <div>
              <h3 className="text-sm font-semibold text-white">Email</h3>
              <a
                href={`mailto:${FIRM.email}`}
                className="mt-2 block break-all text-sm leading-6 text-white/60 hover:text-[#d4bd91]"
              >
                {FIRM.email}
              </a>
              <a
                href={`mailto:${FIRM.enquiryEmail}`}
                className="mt-1 block break-all text-sm leading-6 text-white/60 hover:text-[#d4bd91]"
              >
                {FIRM.enquiryEmail}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="mt-1 shrink-0 text-[#d4bd91]" size={21} />
            <div>
              <h3 className="text-sm font-semibold text-white">Phone / WhatsApp</h3>
              <a
                href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-sm text-white/60 hover:text-[#d4bd91]"
              >
                {FIRM.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-white/15 pt-6">
        <div className="flex flex-col gap-3 text-xs leading-6 text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </span>
          <span>
            Website designed and maintained by UNIVMARSOL
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#122337]">
      <HomeHero />
      <HomeIntroduction />
      <HomeExpertise />
      <HomeTeam />
      <HomeValues />
      <HomePrinciples />
      <HomeInsights />
      <HomeContact />
    </main>
  );
}
