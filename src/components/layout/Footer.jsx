// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Gavel,
//   Globe,
//   Clock,

//   ArrowUpRight,
// } from "lucide-react";

// // Routes available in AppRoutes.jsx
// const quickLinks = [
//   { label: "Home", to: "/" },
//   { label: "The Team", to: "/our-team" },
//   { label: "Our Expertise", to: "/our-expertise" },
//   { label: "Insights", to: "/insights" },
//   { label: "Contact", to: "/contact" },
// ];

// const expertiseLeft = [
//   "Arbitration & Dispute Resolution",
//   "Criminal Law & White-Collar Crimes",
//   "Corporate & Commercial Law",
//   "Constitutional Law & Writs",
//   "General Litigation",
//   "Intellectual Property Rights (IPR)",
//   "Real Estate & Property Law",
//   "Employment & Labour Law",
// ];

// const expertiseRight = [
//   "Banking & Finance",
//   "Family & Matrimonial Law",
//   "Technology, Media & Telecommunications (TMT)",
//   "Environmental Law",
//   "Competition Law",
//   "Consumer Laws",
//   "Medical Negligence",
//   "Corporate Advisory & Due Diligence",
// ];

// // Reusable contact information
// function ContactItem({ href, icon: Icon, children, external = false }) {
//   return (
//     <a
//       href={href}
//       target={external ? "_blank" : undefined}
//       rel={external ? "noopener noreferrer" : undefined}
//       className="group flex items-center gap-4 text-sm leading-5
//                  text-white/90 transition-colors duration-300
//                  hover:text-white"
//     >
//       <span
//         className="flex h-10 w-10 shrink-0 items-center justify-center
//                    rounded-full bg-white text-[#245e60]
//                    transition-transform duration-300
//                    group-hover:scale-105"
//       >
//         <Icon size={19} strokeWidth={1.8} />
//       </span>

//       <span>{children}</span>
//     </a>
//   );
// }

// // Reusable expertise list
// function ExpertiseList({ items }) {
//   return (
//     <ul className="space-y-3">
//       {items.map((item) => (
//         <li key={item}>
//           <Link
//             to="/our-expertise"
//             className="group flex items-start gap-3 text-sm
//                        leading-5 text-white/90
//                        transition-colors duration-300 hover:text-white"
//           >
//             <Gavel
//               size={18}
//               strokeWidth={2.5}
//               className="mt-0.5 shrink-0 transition-transform
//                          duration-300 group-hover:rotate-[-12deg]"
//             />
//             <span>{item}</span>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative  overflow-hidden bg-[#111111] text-[#c5a880]">
//       {/* Decorative background */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0">
//         <div
//           className="absolute inset-0 opacity-30"
//           // style={{
//           //   backgroundImage:
//           //     "repeating-linear-gradient(48deg, transparent 0px, transparent 27px, rgba(255,255,255,0.12) 29px, transparent 44px)",
//           // }}
//         />

//         <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />
//       </div>

//       <div className="relative  mx-auto max-w-7xl px-5 sm:px-8">
//         {/* Consultation banner */}
//         <div
//           className="relative mt-10 mb-10 flex flex-col items-start
//                      justify-between gap-5 rounded-xl bg-[#c5a880]/80
//                      px-6 py-6 text-gray-950  shadow-xl
//                      sm:flex-row sm:items-center sm:px-8"
//         >
//           <h2 className="text-xl font-medium tracking-wider leading-snug sm:text-2xl">
//             Get in touch with us for an initial consultation.
//           </h2>

//           <Link
//             to="/contact"
//             className="inline-flex shrink-0 items-center justify-center
//                        gap-2 rounded-full bg-[#000000]  tracking-wide px-6 py-3
//                        text-sm font-semibold text-white
//                        transition-all duration-300
//                        hover:bg-[#080808ec] hover:shadow-md"
//           >
//             Contact Us
//             <ArrowUpRight size={16} />
//           </Link>
//         </div>

//         {/* Main footer content */}
//         <div
//           className="grid grid-cols-1 gap-x-8 gap-y-10 pb-12
//                      sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8"
//         >
//           {/* Brand and contact details */}
//           <div className="sm:col-span-2 lg:col-span-3">
//             <Link
//               to="/"
//               aria-label="Siddiqui Law Associates home"
//               className="mb-8 inline-flex items-center gap-4"
//             >
//               {/* Replace with your actual logo */}
//               <div
//                 className="flex h-16 w-16 shrink-0 items-center
//                            justify-center  "
//               >
//                 <img
//                   src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1792076367/laww_qw7wao.svg"
//                   alt="Siddiqui Law Associates"
//                   className="text-3xl font-semibold tracking-tighter"
//                 ></img>
//               </div>

//               <div className="border-l border-white/60 pl-4">
//                 <p className="text-2xl font-semibold tracking-[0.16em]">
//                   SIDDIQUI LAW
//                 </p>
//                 <p className="text-[9px] tracking-[0.48em]">ASSOCIATES</p>
//               </div>
//             </Link>

//             <div className="space-y-4 tracking-wider">
//               <ContactItem
//                 href="https://www.google.com/maps/search/?api=1&query=C-293%2C%20Defence%20Colony%2C%20Delhi%20110024"
//                 icon={MapPin}
//                 external
//               >
//                 Chamber 23, 3rd Floor, Prakash Chamber, 77 Nagindas Master Road,
//                 <br />
//                 Mumbai- 400001.
//               </ContactItem>

//               <ContactItem
//                 href="mailto:info@siddiquilawassociates.in"
//                 icon={Mail}
//               >
//                 info@siddiquilawassociates.in
//               </ContactItem>

//               <ContactItem href="tel:+917506926969" icon={Phone}>
//                 +91 75069 26969
//               </ContactItem>

//               <ContactItem  icon={Clock}>
//                 By appointment <br /> 09:30am to 07:30pm
//               </ContactItem>
//             </div>

//             {/* Social media */}
//             <div className="mt-5 flex items-center gap-2">
//               <a
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="flex h-11 w-11 items-center justify-center
//              rounded-full bg-white/15 transition
//              hover:bg-white/30"
//               >
//                 <span className="text-lg font-bold leading-none">in</span>
//               </a>

//               <a
//                 href="https://www.google.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Google"
//                 className="flex h-11 w-11 items-center justify-center
//                            rounded-full bg-white/15 transition
//                            hover:bg-white/30"
//               >
//                 <Globe size={21} />
//               </a>
//             </div>
//           </div>

//           {/* Quick navigation */}
//           <div className="lg:col-span-2">
//             <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.to}>
//                   <Link
//                     to={link.to}
//                     className="inline-block text-sm text-white/90
//                                transition-all duration-300
//                                hover:translate-x-1 hover:text-white"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Expertise column one */}
//           <div className="lg:col-span-3">
//             <h3 className="mb-5 text-lg font-semibold">Our Expertise</h3>

//             <ExpertiseList items={expertiseLeft} />
//           </div>

//           {/* Expertise column two */}
//           <div className="lg:col-span-4 lg:pt-11">
//             <ExpertiseList items={expertiseRight} />
//           </div>
//         </div>

//         {/* Copyright */}
//         <div
//           className="flex flex-col items-start justify-between gap-4
//                      border-t border-white/20 py-6 text-xs
//                      text-white/90 sm:flex-row sm:items-center"
//         >
//           <p className="leading-6">
//             © {currentYear} SIDDIQUI LAW ASSOCIATES
//             <span className="hidden sm:inline"> | </span>
//             <span className="block sm:inline">
//               Website designed and maintained by UNIVMARSOL
//             </span>
//           </p>

//           {/* Link to contact until a privacy page is created */}
//           <Link
//             to="/contact"
//             className="shrink-0 transition-colors hover:text-white hover:underline"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>

//       {/* Floating WhatsApp button */}
//       <a
//         href="https://wa.me/917506926969"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat with Siddiqui Law Associates on WhatsApp"
//         className="fixed bottom-5 right-5 z-50 flex h-12 w-12
//                    items-center justify-center rounded-full
//                    opacity-90 text-black
//                    transition-all duration-300
//                    hover:scale-110 hover:bg-[#1fba59]
//                    sm:bottom-6 sm:right-6"
//       >

//         <img src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1792045660/WhatsApp.svg_awuy9n.webp" alt="WhatsApp" />
//       </a>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Scale,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

const FIRM = {
  name: "Siddiqui Law Associates",
  phone: "+917506926969",
  displayPhone: "+91 75069 26969",
  email: "info@siddiquilawassociates.in",
  address:
    "Chamber 23, 3rd Floor, Prakash Chamber, 77 Nagindas Master Road, Mumbai - 400001",
};

const footerLinks = {
  Explore: [
    { label: "Home", to: "/" },

    { label: "Our Expertise", to: "/our-expertise" },
    { label: "Our Team", to: "/our-team" },
    { label: "Insights", to: "/insights" },
    { label: "Contact", to: "/contact" },
  ],
  Expertise: [
    { label: "Criminal Litigation", to: "/our-expertise" },
    { label: "Corporate & Commercial", to: "/our-expertise" },
    { label: "Civil Litigation", to: "/our-expertise" },
    { label: "Property Law", to: "/our-expertise" },
    { label: "Family Law", to: "/our-expertise" },
    { label: "Dispute Resolution", to: "/our-expertise" },
  ],
};

function FooterEyebrow({ children }) {
  return (
    <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#d4bd91] sm:text-[10px]">
      <span className="h-px w-6 bg-[#c5a878]" />
      {children}
    </p>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#c5a878]/40 bg-[#08121e] text-[#f5f1e8]">
      {/* Architectural background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-[6%] hidden w-px bg-white/[0.045] lg:block" />
        <div className="absolute inset-y-0 right-[6%] hidden w-px bg-white/[0.045] lg:block" />
        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#c5a878]/[0.045] blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c5a878]/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* Consultation banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative -mt-px border-x border-b border-[#c5a878]/35 bg-[#101e2d]/80 px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
        >
          <div className="absolute right-0 top-0 h-10 w-10 border-r border-t border-[#c5a878]/70" />
          <div className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-[#c5a878]/70" />

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <FooterEyebrow>Connect with us</FooterEyebrow>

              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Every matter deserves
                <span className="block font-serif italic font-normal text-[#c5a878]">
                  thoughtful attention
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                If you are facing a legal issue and need clear guidance and
                committed representation, we are here to help
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-5 self-start border border-[#c5a878] bg-[#c5a878] px-6 py-4 text-sm font-semibold text-[#0b1420] transition-colors duration-300 hover:bg-transparent hover:text-[#d4bd91] lg:self-center"
            >
              Free Consultation
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 lg:grid-cols-[1.25fr_0.7fr_0.9fr_1.15fr] lg:gap-10 lg:py-20">
          {/* Firm identity */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center   ">
                {/* <Scale
                  size={28}
                  strokeWidth={1.2}
                  className="text-[#d4bd91]"
                /> */}
                <img
                  src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1792076367/laww_qw7wao.svg"
                  alt="SIDDIQUI LAW ASSOCIATES"
                />
              </div>

              <div>
                <p className="font-serif text-lg leading-tight tracking-wide text-[#f5f1e8] sm:text-xl">
                  SIDDIQUI
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#d4bd91]">
                  Law Associates
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-7 text-white/55">
              The law is our foundation. Justice is our mission. Dedicated to
              considered legal counsel, professional integrity, and committed
              representation.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#c5a878]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                Mumbai · India
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <FooterEyebrow>Explore</FooterEyebrow>

            <ul className="mt-7 space-y-4">
              {footerLinks.Explore.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#d4bd91]"
                  >
                    <span className="h-px w-0 bg-[#c5a878] transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <FooterEyebrow>Our Expertise</FooterEyebrow>

            <ul className="mt-7 space-y-4">
              {footerLinks.Expertise.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-start gap-2 text-sm leading-5 text-white/60 transition-colors hover:text-[#d4bd91]"
                  >
                    <ArrowRight
                      size={13}
                      className="mt-1 shrink-0 text-[#c5a878]/60 transition-transform group-hover:translate-x-1 group-hover:text-[#d4bd91]"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <FooterEyebrow>Get In Touch</FooterEyebrow>

            <div className="mt-7 space-y-6">
              <a
                href={`https://wa.me/${FIRM.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#d4bd91]"
                />
                <span className="text-sm text-white/65 transition-colors group-hover:text-[#d4bd91]">
                  {FIRM.displayPhone}
                  <span className="mt-1 block text-xs text-white/35">
                    WhatsApp & enquiries
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${FIRM.email}`}
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#d4bd91]"
                />
                <span className="break-all text-sm text-white/65 transition-colors group-hover:text-[#d4bd91]">
                  {FIRM.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#d4bd91]"
                />
                <p className="text-sm leading-7 text-white/55">
                  {FIRM.address}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  size={17}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#d4bd91]"
                />
                <p className="text-sm leading-6 text-white/55">
                  Contact us to arrange a consultation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <p className="text-xs leading-6 text-white/40">
            © {year} Siddiqui Law Associates All rights are reserved website
            design by Univmarsol.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/privacy-policy"
              className="text-xs text-white/45 transition-colors hover:text-[#d4bd91]"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-white/15" />

            <Link
              to="/contact"
              className="text-xs text-white/45 transition-colors hover:text-[#d4bd91]"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 flex h-10 w-10 items-center justify-center border border-[#c5a878]/40 text-[#d4bd91] transition-colors hover:bg-[#c5a878] hover:text-[#0b1420]"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
