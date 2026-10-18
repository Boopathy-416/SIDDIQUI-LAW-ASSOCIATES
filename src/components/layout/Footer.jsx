import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Gavel,
  Globe,
  Clock,
 
  ArrowUpRight,
} from "lucide-react";

// Routes available in AppRoutes.jsx
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "The Firm", to: "/the-firm" },
  { label: "The Team", to: "/our-team" },
  { label: "Our Expertise", to: "/our-expertise" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const expertiseLeft = [
  "Arbitration & Dispute Resolution",
  "Criminal Law & White-Collar Crimes",
  "Corporate & Commercial Law",
  "Constitutional Law & Writs",
  "General Litigation",
  "Intellectual Property Rights (IPR)",
  "Real Estate & Property Law",
  "Employment & Labour Law",
];

const expertiseRight = [
  "Banking & Finance",
  "Family & Matrimonial Law",
  "Technology, Media & Telecommunications (TMT)",
  "Environmental Law",
  "Competition Law",
  "Consumer Laws",
  "Medical Negligence",
  "Corporate Advisory & Due Diligence",
];

// Reusable contact information
function ContactItem({ href, icon: Icon, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 text-sm leading-5
                 text-white/90 transition-colors duration-300
                 hover:text-white"
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center
                   rounded-full bg-white text-[#245e60]
                   transition-transform duration-300
                   group-hover:scale-105"
      >
        <Icon size={19} strokeWidth={1.8} />
      </span>

      <span>{children}</span>
    </a>
  );
}

// Reusable expertise list
function ExpertiseList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item}>
          <Link
            to="/our-expertise"
            className="group flex items-start gap-3 text-sm
                       leading-5 text-white/90
                       transition-colors duration-300 hover:text-white"
          >
            <Gavel
              size={18}
              strokeWidth={2.5}
              className="mt-0.5 shrink-0 transition-transform
                         duration-300 group-hover:rotate-[-12deg]"
            />
            <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  overflow-hidden bg-[#111111] text-[#c5a880]">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          // style={{
          //   backgroundImage:
          //     "repeating-linear-gradient(48deg, transparent 0px, transparent 27px, rgba(255,255,255,0.12) 29px, transparent 44px)",
          // }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />
      </div>

      <div className="relative  mx-auto max-w-7xl px-5 sm:px-8">
        {/* Consultation banner */}
        <div
          className="relative mt-10 mb-10 flex flex-col items-start
                     justify-between gap-5 rounded-xl bg-[#c5a880]/80
                     px-6 py-6 text-gray-950  shadow-xl
                     sm:flex-row sm:items-center sm:px-8"
        >
          <h2 className="text-xl font-medium tracking-wider leading-snug sm:text-2xl">
            Get in touch with us for an initial consultation.
          </h2>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center
                       gap-2 rounded-full bg-[#000000]  tracking-wide px-6 py-3
                       text-sm font-semibold text-white
                       transition-all duration-300
                       hover:bg-[#080808ec] hover:shadow-md"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Main footer content */}
        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 pb-12
                     sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8"
        >
          {/* Brand and contact details */}
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              to="/"
              aria-label="Siddiqui Law Associates home"
              className="mb-8 inline-flex items-center gap-4"
            >
              {/* Replace with your actual logo */}
              <div
                className="flex h-16 w-16 shrink-0 items-center
                           justify-center  "
              >
                <img
                  src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1792076367/laww_qw7wao.svg"
                  alt="Siddiqui Law Associates"
                  className="text-3xl font-semibold tracking-tighter"
                ></img>
              </div>

              <div className="border-l border-white/60 pl-4">
                <p className="text-2xl font-semibold tracking-[0.16em]">
                  SIDDIQUI LAW
                </p>
                <p className="text-[9px] tracking-[0.48em]">ASSOCIATES</p>
              </div>
            </Link>

            <div className="space-y-4 tracking-wider">
              <ContactItem
                href="https://www.google.com/maps/search/?api=1&query=C-293%2C%20Defence%20Colony%2C%20Delhi%20110024"
                icon={MapPin}
                external
              >
                Chamber 23, 3rd Floor, Prakash Chamber, 77 Nagindas Master Road,
                <br />
                Mumbai- 400001.
              </ContactItem>

              <ContactItem
                href="mailto:info@siddiquilawassociates.in"
                icon={Mail}
              >
                info@siddiquilawassociates.in
              </ContactItem>

              <ContactItem href="tel:+917506926969" icon={Phone}>
                +91 75069 26969
              </ContactItem>

              <ContactItem  icon={Clock}>
                By appointment <br /> 09:30am to 07:30pm
              </ContactItem>
            </div>

            {/* Social media */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center
             rounded-full bg-white/15 transition
             hover:bg-white/30"
              >
                <span className="text-lg font-bold leading-none">in</span>
              </a>

              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="flex h-11 w-11 items-center justify-center
                           rounded-full bg-white/15 transition
                           hover:bg-white/30"
              >
                <Globe size={21} />
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block text-sm text-white/90
                               transition-all duration-300
                               hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise column one */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-lg font-semibold">Our Expertise</h3>

            <ExpertiseList items={expertiseLeft} />
          </div>

          {/* Expertise column two */}
          <div className="lg:col-span-4 lg:pt-11">
            <ExpertiseList items={expertiseRight} />
          </div>
        </div>

        {/* Copyright */}
        <div
          className="flex flex-col items-start justify-between gap-4
                     border-t border-white/20 py-6 text-xs
                     text-white/90 sm:flex-row sm:items-center"
        >
          <p className="leading-6">
            © {currentYear} SIDDIQUI LAW ASSOCIATES
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">
              Website designed and maintained by UNIVMARSOL
            </span>
          </p>

          {/* Link to contact until a privacy page is created */}
          <Link
            to="/contact"
            className="shrink-0 transition-colors hover:text-white hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/917506926969"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Siddiqui Law Associates on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12
                   items-center justify-center rounded-full
                   opacity-90 text-black 
                   transition-all duration-300
                   hover:scale-110 hover:bg-[#1fba59]
                   sm:bottom-6 sm:right-6"
      >
       
        <img src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1792045660/WhatsApp.svg_awuy9n.webp" alt="WhatsApp" />
      </a>
    </footer>
  );
}
