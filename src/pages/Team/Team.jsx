// import SEO from "../../components/seo/Seo";

// function OurTeam() {
//   return (
//     <>
//       <SEO
//         title="Our Team"
//         description="[INSERT VERIFIED TEAM PAGE META DESCRIPTION]"
//         canonical="/our-team"
//       />

//       <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
//         <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
//           People
//         </p>

//         <h1 className="mt-5 text-5xl font-light">
//           Our Team
//         </h1>

//         <p className="mt-8 text-slate-400">
//           [INSERT VERIFIED TEAM INFORMATION]
//         </p>
//       </section>
//     </>
//   );
// }

// export default OurTeam;

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  BriefcaseBusiness,
  GraduationCap,
  Clock,
  Users,
} from "lucide-react";

// Siddiqui Law Associates — Team profiles
const teamMembers = [
  {
    id: 1,
    name: "Advocate Rahil Ahmed Siddiqui",
    shortName: "Rahil Ahmed Siddiqui",
    role: "Managing Partner",
    qualification: "B.L.S., LL.B., LL.M. in IT & IPR",
    initials: "RS",
    accent: "from-zinc-900 via-slate-400 to-slate-100",

    bio: "Advocate Rahil Ahmed Siddiqui is a second-generation advocate and litigation-focused legal practitioner enrolled with the Bar Council of Maharashtra and Goa since 2019. He practices before the Hon’ble Bombay High Court and subordinate courts in Mumbai, with a focus on criminal litigation, civil and commercial disputes, constitutional remedies, and other areas of law. His approach combines strategic thinking, meticulous preparation, precise drafting, and considered legal analysis.",

    expertise: [
      "Criminal Litigation",
      "Civil and Commercial Disputes",
      "Constitutional Remedies",
      "Legal Research and Drafting",
      "Court Representation",
    ],

    qualifications: [
      "B.L.S., Rizvi Law College (2016)",
      "LL.B., Rizvi Law College (2019)",
      "LL.M. in Information Technology & Intellectual Property Rights (IT & IPR), University of Mumbai (2023)",
    ],

    experience: [
      "Managing Partner, Siddiqui Law Associates. ",
      "Practices before the Bombay High Court, Sessions Court, Metropolitan Magistrate Courts, Consumer Commissions, Motor Accident Claims Tribunal, Charity Commission, and NCLT. ",
      "Empanelled Advocate | National Legal Services Authority (NALSA), Bombay High Court. ",
      "Empanelled Advocate | Bank of India. ",
      "Empanelled Advocate | Mumbai District Central Cooperative Bank Ltd. ",
      "Empanelled Advocate | Insurance Samadhan. ",
      "Additional Special Court Receiver, appointed by the Hon’ble Bombay High Court in legal practice.",
    ],
  },

  {
    id: 2,
    name: "Advocate Huma A. Shaikh",
    shortName: "Huma A. Shaikh",
    role: "Associate",
    qualification: "B.A.F., LL.B.",
    initials: "HS",
    accent: "from-stone-300 via-neutral-200 to-stone-400",

    bio: "Advocate Huma A. Shaikh is a second-generation advocate at Siddiqui Law Associates, enrolled with the Bar Council of Maharashtra and Goa since 2018. She specialises in criminal law and litigation and maintains an active practice before the Hon’ble Bombay High Court, Sessions Court, and Chief Metropolitan Magistrate Court at Esplanade, Mumbai. Her practice is distinguished by rigorous procedural compliance, precise legal work, and thorough case preparation.",

    expertise: [
      "Criminal Law and Litigation",
      "Legal Research and Drafting",
      "Case Preparation",
      "Court Appearances",
      "Court-Appointed Assignments",
    ],

    qualifications: [
      "Bachelor of Accounting and Finance (B.A.F.)",
      "Bachelor of Laws (LL.B.), Rizvi Law College, Mumbai",
    ],

    experience: [
      "Associate Siddiqui Law Associates: Criminal litigation, legal research, drafting, case preparation, and court appearances. ",
      "Empanelled Court Commissioner | Esplanade Court, Mumbai. ",
      "Additional Special Court Receiver | appointed by the Hon’ble Bombay High Court.",
    ],
  },

  {
    id: 3,
    name: "Advocate Eram M. Sayyad",
    shortName: "Eram M. Sayyad",
    role: "Associate",
    qualification: "B.M.S., LL.B.",
    initials: "ES",
    accent: "from-slate-300 via-stone-200 to-neutral-400",

    bio: "Advocate Eram M. Sayyad is a second-generation advocate at Siddiqui Law Associates, enrolled with the Bar Council of Maharashtra and Goa in 2014. His practice focuses on civil law and litigation. He brings diligence to legal research, drafting, courtroom advocacy, procedural compliance, and strategic case preparation, supporting the firm’s commitment to dependable and high-calibre legal services.",

    expertise: [
      "Civil Law and Litigation",
      "Legal Research and Drafting",
      "Case Preparation",
      "Court-Related Proceedings",
      "Procedural Compliance",
    ],

    qualifications: [
      "Bachelor of Management Studies (B.M.S.)",
      "Bachelor of Laws (LL.B.), Rizvi Law College, Mumbai",
    ],

    experience: [
      "Associate Siddiqui Law Associates: Civil litigation, legal research, drafting, case preparation, and court-related proceedings",
    ],
  },
];

function ProfileCard({ member, onOpen, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative isolate h-[350px] overflow-hidden rounded-xl
    border border-[#B8955A]/25 bg-[#101D2B]
    shadow-[0_12px_35px_rgba(16,29,43,0.14)]
    transition-all duration-500
    hover:-translate-y-1 hover:border-[#B8955A]/70
    hover:shadow-[0_22px_50px_rgba(16,29,43,0.24)]
    sm:h-[390px]"
    >
      {/* Portrait / initials background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${member.accent}
      transition-transform duration-700 group-hover:scale-105`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="select-none font-serif text-8xl font-medium
        tracking-tight text-[#101D2B]/20 sm:text-9xl"
          >
            {member.initials}
          </span>
        </div>

        {/* Elegant overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b
      from-[#101D2B]/5 via-[#101D2B]/10 to-[#101D2B]/95"
        />

        {/* Gold decorative detail */}
        <div
          className="absolute left-5 top-5 h-12 w-12
      border-l border-t border-[#B8955A]/80"
        />
      </div>

      {/* Profile action */}
      <button
        type="button"
        onClick={() => onOpen(member.id)}
        aria-label={`View ${member.name}'s full profile`}
        className="absolute right-4 top-4 z-20 flex size-11
      items-center justify-center rounded-full
      border border-[#B8955A]/60 bg-[#101D2B]/85
      text-[#D8BD86] backdrop-blur-sm
      transition-all duration-300
      hover:bg-[#B8955A] hover:text-[#101D2B]
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-[#B8955A]"
      >
        <ArrowUpRight size={21} />
      </button>

      {/* Bottom profile information */}
      <button
        type="button"
        onClick={() => onOpen(member.id)}
        aria-label={`Open full profile for ${member.name}`}
        className="absolute inset-x-0 bottom-0 z-10 w-full
      p-5 text-left sm:p-6
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-inset focus-visible:ring-[#B8955A]"
      >
        {/* Gold separator */}
        <div
          className="mb-4 h-px w-12 bg-[#B8955A]
      transition-all duration-500 group-hover:w-20"
        />

        <p
          className="mb-2 text-[10px] font-semibold uppercase
      tracking-[0.24em] text-[#D8BD86] sm:text-xs"
        >
          {member.role}
        </p>

        <h3
          className="max-w-[95%] font-serif text-2xl
      font-medium leading-tight tracking-tight text-white
      sm:text-3xl"
        >
          {member.shortName}
        </h3>

        <div
          className="mt-3 flex flex-wrap items-center gap-2
      text-xs text-white/75 sm:text-sm"
        >
          <span>{member.qualification}</span>
          <span className="text-[#B8955A]">•</span>
          <span>{member.experience} in practice</span>
        </div>

        <div
          className="mt-5 flex items-center gap-2
      text-[10px] font-semibold uppercase tracking-[0.18em]
      text-[#D8BD86] transition-all duration-300
      group-hover:gap-3 sm:text-xs"
        >
          <span>View Profile</span>
          <ArrowUpRight size={14} />
        </div>
      </button>
    </motion.article>
  );
}

function ProfileModal({ member, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") onNavigate(1);

      if (event.key === "ArrowLeft") onNavigate(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNavigate]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center
    overflow-y-auto bg-[#080F18]/85 p-3 backdrop-blur-md sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-name"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.99 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative my-auto w-full max-w-6xl overflow-hidden
      rounded-2xl border border-[#B8955A]/30 bg-[#F7F5F0]
      shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
      >
        {/* Premium header */}
        <header
          className="flex items-center justify-between gap-4
      border-b border-[#B8955A]/25 bg-white px-5 py-4
      sm:px-8 sm:py-5"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex size-11 shrink-0 items-center
          justify-center border border-[#B8955A]/50
          bg-[#101D2B] font-serif text-lg text-[#D8BD86]"
            >
              <span className="flex h-20 w-20 items-center justify-center  ">
                <img
                  src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1792076367/laww_qw7wao.svg"
                  alt="SIDDIQUI LAW ASSOCIATES"
                />
              </span>
            </div>

            <div>
              <p
                className="text-[10px] font-bold uppercase
            tracking-[0.2em] text-[#92703C] sm:text-xs"
              >
                Siddiqui Law Associates
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                The Team / Professional Profile
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile"
            className="flex size-10 shrink-0 items-center
          justify-center rounded-full border border-slate-200
          text-slate-600 transition hover:border-[#B8955A]
          hover:bg-[#F3EFE7] hover:text-[#101D2B]
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-[#B8955A]"
          >
            <X size={20} />
          </button>
        </header>

        {/* Main profile layout */}
        <div className="grid md:grid-cols-[0.85fr_1.15fr]">
          {/* Left identity panel */}
          <aside
            className="relative flex min-h-[380px] flex-col
        justify-end overflow-hidden bg-[#101D2B] p-7
        text-white sm:min-h-[510px] sm:p-10 lg:p-12"
          >
            {/* Initials background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br
            ${member.accent} opacity-20`}
            />

            {/* Navy overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-b
          from-[#101D2B]/15 via-[#101D2B]/35
          to-[#08111D]"
            />

            {/* Decorative border details */}
            <div
              className="absolute left-7 top-7 size-12
          border-l border-t border-[#B8955A]/80 sm:left-10
          sm:top-10"
            />

            <div
              className="absolute right-7 top-7 size-12
          border-r border-t border-[#B8955A]/40 sm:right-10
          sm:top-10"
            />

            <div className="relative z-10">
              {/* Initials badge */}
              <div
                className="mb-8 flex size-20 items-center
            justify-center rounded-full border border-[#B8955A]/70
            bg-white/[0.07] font-serif text-3xl text-[#E0C58E]
            shadow-lg backdrop-blur-sm sm:size-24 sm:text-4xl"
              >
                {member.initials}
              </div>

              <p
                className="mb-3 text-[10px] font-bold uppercase
            tracking-[0.24em] text-[#D8BD86] sm:text-xs"
              >
                {member.role}
              </p>

              <h2
                id="profile-name"
                className="max-w-md font-serif text-3xl
              font-medium leading-tight tracking-tight text-white
              sm:text-4xl lg:text-[42px]"
              >
                {member.name}
              </h2>

              <div className="mt-6 h-px w-16 bg-[#B8955A]" />

              <div className="mt-6 flex items-start gap-3">
                <GraduationCap
                  size={19}
                  className="mt-0.5 shrink-0 text-[#D8BD86]"
                />
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase
                tracking-[0.16em] text-white/50"
                  >
                    Qualification
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/90">
                    {member.qualification}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Clock size={18} className="shrink-0 text-[#D8BD86]" />
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase
                tracking-[0.16em] text-white/50"
                  >
                    Experience
                  </p>
                  <p className="mt-1 text-sm text-white/90">
                    {member.experience} in legal practice
                  </p>
                </div>
              </div>

              <p
                className="mt-8 border-l-2 border-[#B8955A]
            pl-4 text-xs italic leading-6 text-white/65"
              >
                Professional integrity. Dedicated legal representation.
              </p>
            </div>
          </aside>

          {/* Right information panel */}
          <div className="bg-[#F7F5F0] p-6 sm:p-9 lg:p-12">
            {/* Section introduction */}
            <div>
              <p
                className="text-[10px] font-bold uppercase
            tracking-[0.24em] text-[#92703C] sm:text-xs"
              >
                About the Advocate
              </p>

              <h3
                className="mt-3 font-serif text-3xl
            leading-tight text-[#101D2B] sm:text-4xl"
              >
                Professional Overview
              </h3>

              <div className="mt-4 h-1 w-12 bg-[#B8955A]" />

              <p
                className="mt-6 text-sm leading-7 text-slate-600
            sm:text-[15px] sm:leading-8"
              >
                {member.bio}
              </p>
            </div>

            {/* Qualifications */}
            <section className="mt-8 border-t border-[#DCD6CA] pt-7">
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 shrink-0 items-center
              justify-center border border-[#B8955A]/35
              bg-white text-[#92703C]"
                >
                  <GraduationCap size={20} />
                </div>

                <div>
                  <p
                    className="text-[10px] font-semibold uppercase
                tracking-[0.16em] text-[#92703C]"
                  >
                    Academic Background
                  </p>
                  <h4 className="mt-1 font-serif text-xl text-[#101D2B]">
                    Qualifications
                  </h4>
                </div>
              </div>

              <div
                className="ml-1 mt-4 border-l-2 border-[#B8955A]/60
            py-1 pl-5"
              >
                <p className="text-sm leading-7 text-slate-600">
                  {member.qualification}
                </p>
              </div>
            </section>

            {/* Expertise */}
            <section className="mt-7 border-t border-[#DCD6CA] pt-7">
              <div className="flex items-center gap-3">
                <div
                  className="flex size-10 shrink-0 items-center
              justify-center border border-[#B8955A]/35
              bg-white text-[#92703C]"
                >
                  <BriefcaseBusiness size={19} />
                </div>

                <div>
                  <p
                    className="text-[10px] font-semibold uppercase
                tracking-[0.16em] text-[#92703C]"
                  >
                    Areas of Focus
                  </p>
                  <h4 className="mt-1 font-serif text-xl text-[#101D2B]">
                    Professional Expertise
                  </h4>
                </div>
              </div>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {member.expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border
                  border-[#E4DED2] bg-white/70 p-3
                  text-sm leading-6 text-slate-600
                  transition-colors duration-300
                  hover:border-[#B8955A]/60 hover:bg-white"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0
                  rounded-full bg-[#B8955A]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Footer and profile navigation */}
            <footer
              className="mt-8 flex flex-wrap items-center
          justify-between gap-4 border-t border-[#DCD6CA] pt-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-9 items-center justify-center
              bg-[#101D2B] font-serif text-xs text-[#D8BD86]"
                >
                  SL
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#101D2B]">
                    Siddiqui Law Associates
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Professional Legal Team
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate(-1)}
                  aria-label="Previous team member"
                  className="flex size-11 items-center justify-center
                rounded-full border border-[#CFC7B8] text-[#101D2B]
                transition hover:border-[#B8955A]
                hover:bg-white focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#B8955A]"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate(1)}
                  aria-label="Next team member"
                  className="flex size-11 items-center justify-center
                rounded-full bg-[#101D2B] text-[#D8BD86]
                transition hover:bg-[#B8955A] hover:text-[#101D2B]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#B8955A]"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </footer>
          </div>
        </div>
      </motion.section>
    </motion.div>

    // <motion.div
    //   className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#090d12]/80 p-3 backdrop-blur-sm sm:p-6"
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   onMouseDown={(event) => {
    //     if (event.target === event.currentTarget) onClose();
    //   }}
    // >
    //   <motion.section
    //     role="dialog"
    //     aria-modal="true"
    //     aria-labelledby="profile-name"
    //     initial={{ opacity: 0, y: 25, scale: 0.98 }}
    //     animate={{ opacity: 1, y: 0, scale: 1 }}
    //     exit={{ opacity: 0, y: 15 }}
    //     transition={{ duration: 0.25 }}
    //     className="relative my-auto w-full max-w-6xl overflow-hidden rounded-xl bg-[#f7f6f2] shadow-2xl"
    //   >
    //     {/* Modal header */}
    //     <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-8">
    //       <div>
    //         <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-800 sm:text-xs">
    //           Siddiqui Law Associates
    //         </p>
    //         <p className="mt-1 text-xs text-slate-500">
    //           The team · Professional profile
    //         </p>
    //       </div>

    //       <button
    //         type="button"
    //         onClick={onClose}
    //         aria-label="Close profile"
    //         className="flex size-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
    //       >
    //         <X size={20} />
    //       </button>
    //     </div>

    //     {/* Left / right biography layout */}
    //     <div className="grid md:grid-cols-[0.85fr_1.15fr]">
    //       {/* Left profile panel */}
    //       <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-[#142538] p-7 text-white sm:min-h-[420px] sm:p-10">
    //         <div
    //           className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-20`}
    //         />

    //         <div className="absolute inset-0 bg-gradient-to-t from-[#0b1622] via-[#142538]/50 to-transparent" />

    //         <div className="relative">
    //           <div className="mb-8 flex size-20 items-center justify-center rounded-full border border-white/25 bg-white/10 font-serif text-3xl sm:size-24 sm:text-4xl">
    //             {member.initials}
    //           </div>

    //           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
    //             {member.role}
    //           </p>

    //           <h2
    //             id="profile-name"
    //             className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
    //           >
    //             {member.name}
    //           </h2>

    //           <div className="mt-6 h-px w-16 bg-amber-400" />

    //           <p className="mt-5 text-sm leading-6 text-slate-200">
    //             {member.qualification}
    //           </p>

    //           <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
    //             <Clock size={17} className="text-amber-300" />
    //             {member.experience} of legal practice
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right biography panel */}
    //       <div className="p-6 sm:p-10 lg:p-12">
    //         <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
    //           Professional overview
    //         </p>

    //         <h3 className="mt-3 font-serif text-3xl text-[#142538] sm:text-4xl">
    //           About the profile
    //         </h3>

    //         <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
    //           {member.bio}
    //         </p>

    //         <div className="mt-8 border-t border-slate-200 pt-7">
    //           <div className="flex items-center gap-3">
    //             <GraduationCap size={20} className="text-amber-800" />
    //             <h4 className="text-base font-semibold text-[#142538]">
    //               Qualifications
    //             </h4>
    //           </div>

    //           <p className="mt-3 pl-8 text-sm leading-7 text-slate-600">
    //             {member.qualification}
    //           </p>
    //         </div>

    //         <div className="mt-7 border-t border-slate-200 pt-7">
    //           <div className="flex items-center gap-3">
    //             <BriefcaseBusiness size={19} className="text-amber-800" />
    //             <h4 className="text-base font-semibold text-[#142538]">
    //               Professional profile
    //             </h4>
    //           </div>

    //           <ul className="mt-4 space-y-3 pl-1">
    //             {member.expertise.map((item) => (
    //               <li
    //                 key={item}
    //                 className="flex items-start gap-3 text-sm leading-6 text-slate-600"
    //               >
    //                 <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-700" />
    //                 {item}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>

    //         <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
    //           <p className="flex items-center gap-2 text-xs text-slate-500">
    //             <Users size={15} />
    //             Siddiqui Law Associates
    //           </p>

    //           <div className="flex items-center gap-2">
    //             <button
    //               type="button"
    //               onClick={() => onNavigate(-1)}
    //               aria-label="Previous team member"
    //               className="flex size-10 items-center justify-center rounded-full border border-slate-300 transition hover:bg-slate-200"
    //             >
    //               <ArrowLeft size={18} />
    //             </button>

    //             <button
    //               type="button"
    //               onClick={() => onNavigate(1)}
    //               aria-label="Next team member"
    //               className="flex size-10 items-center justify-center rounded-full bg-[#142538] text-white transition hover:bg-[#244764]"
    //             >
    //               <ArrowRight size={18} />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </motion.section>
    // </motion.div>
  );
}

export default function Team() {
  const [activeId, setActiveId] = useState(null);

  const activeIndex = teamMembers.findIndex((member) => member.id === activeId);

  const activeMember = activeIndex >= 0 ? teamMembers[activeIndex] : null;

  const closeProfile = () => setActiveId(null);

  const navigateProfile = (direction) => {
    setActiveId((currentId) => {
      const currentIndex = teamMembers.findIndex(
        (member) => member.id === currentId,
      );

      if (currentIndex < 0) return teamMembers[0].id;

      const nextIndex =
        (currentIndex + direction + teamMembers.length) % teamMembers.length;

      return teamMembers[nextIndex].id;
    });
  };

  return (
    <>
      <main className="min-h-screen bg-white text-[#142538]">
        <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
              Siddiqui Law Associates
            </p>

            <h1 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              The people behind
              <br />
              <span className="font-serif italic text-amber-800">
                the practice.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              Meet our legal team, bringing together professional experience,
              academic qualifications, and a commitment to legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={member.id}
                member={member}
                index={index}
                onOpen={setActiveId}
              />
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeMember && (
          <ProfileModal
            key={activeMember.id}
            member={activeMember}
            onClose={closeProfile}
            onNavigate={navigateProfile}
          />
        )}
      </AnimatePresence>
    </>
  );
}
