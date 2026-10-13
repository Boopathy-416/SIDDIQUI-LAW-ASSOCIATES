
import { Link } from "react-router-dom";
import { Scale, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#081526] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-12 lg:px-12 lg:py-16">
        {/* Brand */}
        <div>
          <Link
            to="/"
            aria-label="Hartwell Legal home"
            className="inline-flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-[#C5A880]/60 text-[#C5A880]">
              <Scale size={19} strokeWidth={1.5} />
            </span>

            <span className="text-sm leading-tight tracking-[0.18em]">
              HARTWELL
              <br />
              <b className="font-semibold tracking-[0.24em]">
                LEGAL
              </b>
            </span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-white/55">
            Clear thinking for complex matters.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-start gap-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
            Explore
          </p>

          <Link
            to="/about/firm"
            className="text-sm text-white/65 transition-colors hover:text-[#C5A880]"
          >
            The Firm
          </Link>

          <Link
            to="/about/team"
            className="text-sm text-white/65 transition-colors hover:text-[#C5A880]"
          >
            Our Team
          </Link>

          <Link
            to="/expertise"
            className="text-sm text-white/65 transition-colors hover:text-[#C5A880]"
          >
            Our Expertise
          </Link>

          <Link
            to="/insights"
            className="text-sm text-white/65 transition-colors hover:text-[#C5A880]"
          >
            Insights
          </Link>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-start gap-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
            Connect
          </p>

          <a
            href="mailto:hello@hartwell.legal"
            className="break-all text-sm text-white/65 transition-colors hover:text-[#C5A880]"
          >
            hello@hartwell.legal
          </a>

          <a
            href="tel:+910000000000"
            className="text-sm text-white/65 transition-colors hover:text-[#C5A880]"
          >
            +91 00000 00000
          </a>

          <p className="text-sm text-white/45">
            By appointment only
          </p>

          <Link
            to="/contact"
            className="mt-1 inline-flex items-center gap-2 text-sm text-[#C5A880] transition-colors hover:text-white"
          >
            Contact us
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Social Links */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
            Follow
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-sm font-semibold text-white/70 transition-all hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#081526]"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-white/15 text-sm font-semibold text-white/70 transition-all hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#081526]"
            >
              ig
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-white/40 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} Hartwell Legal. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-[#C5A880]"
            >
              Privacy
            </Link>

            <span aria-hidden="true">·</span>

            <Link
              to="/disclaimer"
              className="transition-colors hover:text-[#C5A880]"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
