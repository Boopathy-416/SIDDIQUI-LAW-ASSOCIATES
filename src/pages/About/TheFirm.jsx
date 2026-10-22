


import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Scale,
  ShieldCheck,
  Compass,
  Handshake,
  Landmark,
  Check,
} from "lucide-react";

// Replace these remote images with approved firm photography when available.
const firmImages = {
  hero: "https://advocateanuragarora.com/assets/img/hero-divorce-family-court-lucknow.jpg",
  architecture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmexJa8-6UZ6IjB2i7Rhf4O8Ij2JNeOJu3_nlKeSApfC5YjZeJFX2c8LI&s=10",
  meeting: "https://adityaandco.com/wp-content/uploads/2025/08/Civil-Lawyers-1024x717.webp",
};

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Clear thinking",
    description:
      "We examine the facts, identify the issues that matter, and develop a considered understanding of every client's position.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Preparation first",
    description:
      "We approach every matter with diligence, careful preparation, and attention to the details that shape important decisions.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Client partnership",
    description:
      "We value direct communication, professional integrity, and a collaborative approach throughout the legal process.",
  },
  {
    number: "04",
    icon: Scale,
    title: "Measured action",
    description:
      "We consider the available options, explain potential implications, and help clients make informed decisions about the way forward.",
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

function FirmHero() {
  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-[#101e2c] sm:min-h-[570px] lg:min-h-[650px]">
      <img
        src={firmImages.hero}
        alt="Contemporary professional office environment"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a1725]/95 via-[#0a1725]/80 to-[#0a1725]/35" />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <Eyebrow light>The firm</Eyebrow>

          <h1 className="mt-7 text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Clear thinking.
            <br />
            <span className="font-serif italic text-[#d6bd8a]">
              Measured action.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Independent legal counsel for complex moments,
            consequential decisions, and the matters where
            sound judgment makes a difference.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 border border-white/35 px-6 py-4 text-sm font-medium text-white transition hover:border-[#d6bd8a] hover:bg-[#d6bd8a] hover:text-[#101e2c]"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#c5a878]" />
      </div>
    </section>
  );
}

function FirmIntroduction() {
  return (
    <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>A different kind of practice</Eyebrow>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-[#122337] sm:text-5xl lg:text-6xl">
            Legal advice that
            <br />
            <span className="font-serif italic text-[#967748]">
              moves things forward.
            </span>
          </h2>

          <div className="mt-8 h-px w-20 bg-[#b89a66]" />

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#334155]">
            Hartwell Legal is an independent practice for
            complex moments — the disputes, decisions, and
            opportunities where good judgment matters most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8"
        >
          <p>
            We are intentionally focused. That means fewer
            layers, closer collaboration, and advice shaped
            around the reality of each client.
          </p>

          <p>
            We do not believe in theatre. We believe in
            preparation, candour, professional responsibility,
            and doing the work properly.
          </p>

          <p>
            Our approach begins with listening, continues
            through rigorous analysis, and remains grounded
            in the practical objectives of each matter.
          </p>

          <div className="border-l-2 border-[#b89a66] bg-white px-5 py-5">
            <p className="font-serif text-xl italic leading-8 text-[#122337] sm:text-2xl">
              "Good judgment begins with understanding what
              truly matters."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FirmApproach() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={firmImages.architecture}
            alt="Modern architecture representing precision and perspective"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />

          <div className="absolute -bottom-5 -right-3 max-w-[230px] bg-[#142538] p-6 text-white sm:-right-5 sm:p-8">
            <Scale size={27} className="mb-5 text-[#d6bd8a]" />

            <p className="font-serif text-2xl leading-snug">
              Substance over spectacle.
            </p>

            <p className="mt-3 text-xs leading-6 text-white/65">
              Thoughtful advice. Purposeful action.
            </p>
          </div>
        </motion.div>

        <div className="pt-4 lg:pt-0">
          <Eyebrow>Our approach</Eyebrow>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-[#122337] sm:text-5xl">
            Focused on the
            <br />
            <span className="font-serif italic text-[#967748]">
              substance of the matter.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Legal challenges rarely exist in isolation.
            They affect businesses, relationships, reputations,
            and future plans. Effective counsel requires an
            understanding of both the law and the wider context.
          </p>

          <div className="mt-8 space-y-5">
            {[
              "Understand the facts before defining the strategy.",
              "Communicate clearly about options and potential risks.",
              "Remain attentive to detail, deadlines, and objectives.",
              "Keep the client's circumstances at the centre of the work.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-[#967748]"
                />
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FirmPrinciples() {
  return (
    <section className="bg-[#111111] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow light>What guides us</Eyebrow>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Principles behind
            <br />
            <span className="font-serif italic text-[#d6bd8a]">
              every decision.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Our approach is built on practical values that
            shape how we assess challenges, communicate advice,
            and work with our clients.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border-t border-white/20 pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#d6bd8a]">
                    {principle.number}
                  </span>

                  <Icon size={22} className="text-[#d6bd8a]" />
                </div>

                <h3 className="mt-7 text-xl font-medium">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FirmCollaboration() {
  return (
    <section className="bg-[#f7f5f0] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Working together</Eyebrow>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-[#122337] sm:text-5xl">
            A closer working
            <br />
            <span className="font-serif italic text-[#967748]">
              relationship.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            We believe the strongest professional relationships
            are built on trust, accessibility, and honest
            communication. Understanding your priorities helps
            us focus on the issues that deserve attention.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#967748] pb-2 text-sm font-semibold text-[#122337] transition hover:text-[#967748]"
          >
            Discuss your requirements
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="relative">
          <img
            src={firmImages.meeting}
            alt="Professional team collaborating in a meeting"
            loading="lazy"
            className="aspect-[5/4] w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 max-w-xs bg-[#122337] p-5 text-white sm:p-7">
            <p className="font-serif text-2xl italic">
              Thoughtful work. Clear communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FirmCTA() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border border-slate-200 p-7 sm:p-12 lg:flex-row lg:items-center lg:p-16">
        <div className="max-w-2xl">
          <Eyebrow>The next step</Eyebrow>

          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-[#122337] sm:text-4xl lg:text-5xl">
            Every matter starts
            <br />
            with a conversation.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Tell us about the issue you are facing and the
            outcome you are working towards.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#122337] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#967748]"
        >
          Contact the firm
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default function TheFirm() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#122337]">
      <FirmHero />
      <FirmIntroduction />
      <FirmApproach />
      <FirmPrinciples />
      <FirmCollaboration />
      <FirmCTA />
    </main>
  );
}