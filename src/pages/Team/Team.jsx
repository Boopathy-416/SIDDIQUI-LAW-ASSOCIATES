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
    name: "Mr. Parwez Ahmed Siddiqui",
    shortName: "Parwez Ahmed Siddiqui",
    role: "Managing Partner",
    qualification: "B.A., LL.B.",
    experience: "47 years",
    initials: "PS",
    accent: "from-slate-300 via-slate-200 to-stone-300",
    bio:
      "As Managing Partner of Siddiqui Law Associates, Mr. Parwez Ahmed Siddiqui brings 47 years of legal practice experience to the firm. His profile reflects a long-standing professional commitment to legal practice and client representation.",
    expertise: [
      "Legal practice",
      "Client representation",
      "Legal consultation",
    ],
  },
  {
    id: 2,
    name: "Mr. Rahil Ahmed Siddiqui",
    shortName: "Rahil Ahmed Siddiqui",
    role: "Founder & Partner",
    qualification: "B.L.S., LL.B., LL.M. in IT & IPR",
    experience: "35 years",
    initials: "RS",
    accent: "from-zinc-300 via-slate-200 to-slate-400",
    bio:
      "Mr. Rahil Ahmed Siddiqui is the Founder & Partner of Siddiqui Law Associates, with 35 years of legal practice experience. His academic qualifications include an LL.M. in Information Technology and Intellectual Property Rights.",
    expertise: [
      "Information Technology law — academic qualification",
      "Intellectual Property Rights — academic qualification",
      "Legal practice",
    ],
  },
  {
    id: 3,
    name: "Ms. Huma Ahmed Shaikh",
    shortName: "Huma Ahmed Shaikh",
    role: "Senior Associate",
    qualification: "B.A. & LL.B.",
    experience: "20 years",
    initials: "HS",
    accent: "from-stone-300 via-neutral-200 to-stone-400",
    bio:
      "Ms. Huma Ahmed Shaikh serves as Senior Associate at Siddiqui Law Associates and has 20 years of legal practice experience. Her profile highlights her role within the firm's legal team and her academic background in arts and law.",
    expertise: [
      "Legal practice",
      "Legal research",
      "Client support",
    ],
  },
  {
    id: 4,
    name: "Mr. Eram M. Saiyad",
    shortName: "Eram M. Saiyad",
    role: "Associate",
    qualification: "BMS & LL.B.",
    experience: "20 years",
    initials: "ES",
    accent: "from-slate-300 via-stone-200 to-neutral-400",
    bio:
      "Mr. Eram M. Saiyad is an Associate at Siddiqui Law Associates with 20 years of legal practice experience. He holds qualifications in Management Studies and Law and contributes as a member of the firm's legal team.",
    expertise: [
      "Legal practice",
      "Legal research",
      "Client support",
    ],
  },
];

function ProfileCard({ member, onOpen, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative isolate h-[330px] overflow-hidden rounded-xl bg-[#191b1d] shadow-[0_10px_35px_rgba(0,0,0,0.09)] sm:h-[350px]"
    >
      {/* Replace this initials panel with an approved portrait when available. */}
      <div
        className={`absolute inset-y-0 left-0 w-[78%] bg-gradient-to-br ${member.accent} transition-transform duration-700 group-hover:scale-[1.03]`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="select-none font-serif text-8xl tracking-tight text-slate-700/30 sm:text-9xl">
            {member.initials}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />
      </div>

      {/* Dark action panel */}
      <div className="absolute inset-y-0 right-0 flex w-[22%] flex-col items-center justify-end gap-2 border-l border-white/10 bg-[#191b1d] px-2 pb-4 sm:gap-3">
        <button
          type="button"
          onClick={() => onOpen(member.id)}
          aria-label={`View ${member.name}'s full profile`}
          className="flex size-10 items-center justify-center rounded-full bg-[#0a3b3d] text-white transition hover:bg-[#b48646] hover:text-black/80 transform-all ease-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Card details */}
      <button
        type="button"
        onClick={() => onOpen(member.id)}
        className="absolute inset-x-0 bottom-0 z-10 w-[82%] p-5 text-left text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:p-6"
        aria-label={`Open full profile for ${member.name}`}
      >
        <p className="mb-2 text-xl font-medium leading-tight tracking-tight sm:text-2xl">
          {member.shortName}
        </p>

        <p className="text-[10px] font-semibold uppercase leading-relaxed tracking-[0.09em] text-white/90 sm:text-xs">
          {member.role}
        </p>

        <p className="mt-1 text-xs text-white/75">
          {member.experience} in practice
        </p>
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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#090d12]/80 p-3 backdrop-blur-sm sm:p-6"
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
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.25 }}
        className="relative my-auto w-full max-w-6xl overflow-hidden rounded-xl bg-[#f7f6f2] shadow-2xl"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-800 sm:text-xs">
              Siddiqui Law Associates
            </p>
            <p className="mt-1 text-xs text-slate-500">
              The team · Professional profile
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile"
            className="flex size-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Left / right biography layout */}
        <div className="grid md:grid-cols-[0.85fr_1.15fr]">
          {/* Left profile panel */}
          <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-[#142538] p-7 text-white sm:min-h-[420px] sm:p-10">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-20`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1622] via-[#142538]/50 to-transparent" />

            <div className="relative">
              <div className="mb-8 flex size-20 items-center justify-center rounded-full border border-white/25 bg-white/10 font-serif text-3xl sm:size-24 sm:text-4xl">
                {member.initials}
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                {member.role}
              </p>

              <h2
                id="profile-name"
                className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
              >
                {member.name}
              </h2>

              <div className="mt-6 h-px w-16 bg-amber-400" />

              <p className="mt-5 text-sm leading-6 text-slate-200">
                {member.qualification}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                <Clock size={17} className="text-amber-300" />
                {member.experience} of legal practice
              </div>
            </div>
          </div>

          {/* Right biography panel */}
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
              Professional overview
            </p>

            <h3 className="mt-3 font-serif text-3xl text-[#142538] sm:text-4xl">
              About the profile
            </h3>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {member.bio}
            </p>

            <div className="mt-8 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-3">
                <GraduationCap
                  size={20}
                  className="text-amber-800"
                />
                <h4 className="text-base font-semibold text-[#142538]">
                  Qualifications
                </h4>
              </div>

              <p className="mt-3 pl-8 text-sm leading-7 text-slate-600">
                {member.qualification}
              </p>
            </div>

            <div className="mt-7 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness
                  size={19}
                  className="text-amber-800"
                />
                <h4 className="text-base font-semibold text-[#142538]">
                  Professional profile
                </h4>
              </div>

              <ul className="mt-4 space-y-3 pl-1">
                {member.expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
              <p className="flex items-center gap-2 text-xs text-slate-500">
                <Users size={15} />
                Siddiqui Law Associates
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onNavigate(-1)}
                  aria-label="Previous team member"
                  className="flex size-10 items-center justify-center rounded-full border border-slate-300 transition hover:bg-slate-200"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate(1)}
                  aria-label="Next team member"
                  className="flex size-10 items-center justify-center rounded-full bg-[#142538] text-white transition hover:bg-[#244764]"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default function Team() {
  const [activeId, setActiveId] = useState(null);

  const activeIndex = teamMembers.findIndex(
    (member) => member.id === activeId
  );

  const activeMember =
    activeIndex >= 0 ? teamMembers[activeIndex] : null;

  const closeProfile = () => setActiveId(null);

  const navigateProfile = (direction) => {
    setActiveId((currentId) => {
      const currentIndex = teamMembers.findIndex(
        (member) => member.id === currentId
      );

      if (currentIndex < 0) return teamMembers[0].id;

      const nextIndex =
        (currentIndex + direction + teamMembers.length) %
        teamMembers.length;

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
              Meet our legal team, bringing together professional
              experience, academic qualifications, and a
              commitment to legal practice.
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
