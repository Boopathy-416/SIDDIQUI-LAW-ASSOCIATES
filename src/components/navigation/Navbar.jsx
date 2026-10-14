import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Search,
} from "lucide-react";

const practices = [
  [
    "Arbitration & Dispute Resolution",
    "Resolving complex commercial disputes with clarity, strategy and discretion.",
  ],
  [
    "Criminal Law & White Collar Crime",
    "Strategic counsel for high-stakes investigations and criminal proceedings.",
  ],
  [
    "Corporate & Commercial Law",
    "Practical advice for ambitious businesses navigating growth and change.",
  ],
  [
    "Constitutional Law & Writs",
    "Protecting rights and challenging executive action through constitutional remedies.",
  ],
  [
    "General Litigation",
    "Measured, prepared representation across civil courts and tribunals.",
  ],
  [
    "Intellectual Property Rights (IPR)",
    "Helping ideas, brands and creative work stay protected and valuable.",
  ],
  [
    "Real Estate & Property Law",
    "Confident counsel for transactions, development and property disputes.",
  ],
  [
    "Employment & Labour Law",
    "Building fair, resilient workplaces and resolving employment challenges.",
  ],
  [
    "Banking & Finance",
    "Guidance on lending, securities, regulation and financial transactions.",
  ],
  [
    "Family & Matrimonial Law",
    "Thoughtful support through deeply personal legal matters.",
  ],
  [
    "Technology, Media & Telecommunications (TMT)",
    "Forward-looking counsel for fast-moving digital industries.",
  ],
  [
    "Environmental Law",
    "Navigating regulation and responsibility in a changing world.",
  ],
  [
    "Competition Law",
    "Advising businesses on fair markets, conduct and regulatory review.",
  ],
  [
    "Consumer Law",
    "Clear representation for consumer rights and business compliance.",
  ],
  [
    "Medical Negligence",
    "Careful advocacy in matters where trust and accountability matter.",
  ],
  [
    "Corporate Advisory & Due Diligence",
    "Insightful review for informed decisions and sustainable growth.",
  ],
];

const articles = [
  {
    title: "The new architecture of commercial dispute resolution",
    category: "Dispute Resolution",
    date: "12 September 2024",
    image:
      "https://res.cloudinary.com/dpm3bum4n/image/upload/v1791943251/lawww_rmus5a.png",
  },
  {
    title: "What founders should know before their first investment",
    category: "Corporate",
    date: "28 August 2024",
    image:
      "https://res.cloudinary.com/dpm3bum4n/image/upload/v1791943251/lawww_rmus5a.png",
  },
  {
    title: "A practical guide to protecting your intellectual property",
    category: "IPR",
    date: "04 July 2024",
    image:
      "https://res.cloudinary.com/dpm3bum4n/image/upload/v1791943251/lawww_rmus5a.png",
  },
];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function Nav() {
  const [open, setOpen] = useState(false);
  const [expertise, setExpertise] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { pathname: path } = useLocation();

  const closeMenus = () => {
    setOpen(false);
    setExpertise(false);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const linkStyle = (active = false) =>
    `whitespace-nowrap text-sm transition-colors duration-200 ${
      active ? "text-[#C5A880]" : "text-white/75 hover:text-[#C5A880]"
    }`;

  const filteredPractices = practices.filter(([name, description]) => {
    const query = searchQuery.toLowerCase().trim();
    return (
      name.toLowerCase().includes(query) ||
      description.toLowerCase().includes(query)
    );
  });

  return (
    <header className="relative z-50 w-full bg-[#00052d] text-[#e2e9f1d8]">
      {/* Main Navbar */}
      <div className="mx-auto flex min-h-[84px] max-w-7xl items-center justify-between gap-5 border-b border-white/10 px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="SIDDIQUI LAW ASSOCIATES home"
          className="flex shrink-0 items-center "
        >
          <span className="flex h-20 w-20 items-center justify-center p-1 text-[#C5A880]">
            <img
              src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1791943251/lawww_rmus5a.png"
              alt="SIDDIQUI LAW ASSOCIATES"
            />
          </span>

          <span className="text-sm  tracking-[0.em]">
            SIDDIQUI LAW
            <br />
            <span className=" tracking-[0.10em]">ASSOCIATES</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          <Link
            to="/the-firm"
            className={linkStyle(path.startsWith("/the-firm"))}
          >
            The Firm
          </Link>

          {/* Expertise Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={expertise}
              aria-haspopup="true"
              onClick={() => setExpertise((previous) => !previous)}
              className={`flex items-center gap-2 py-3 ${linkStyle(
                path.startsWith("/our-expertise"),
              )}`}
            >
              Our Expertise
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  expertise ? "rotate-180" : ""
                }`}
              />
            </button>

            {expertise && (
              <div className="absolute left-0 top-full mt-2 max-h-[75vh] w-80 overflow-y-auto border border-white/10 bg-[#10233D] py-2 shadow-2xl">
                {practices.slice(0, 6).map(([name]) => (
                  <Link
                    key={name}
                    to={`/our-expertise/${slugify(name)}`}
                    onClick={closeMenus}
                    className="flex items-center justify-between gap-3 px-5 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-[#C5A880]"
                  >
                    <span>{name}</span>
                    <ChevronRight
                      size={14}
                      className="shrink-0 text-[#C5A880]/70"
                    />
                  </Link>
                ))}

                <div className="mx-5 my-2 border-t border-white/10" />

                <Link
                  to="/our-expertise"
                  onClick={closeMenus}
                  className="flex items-center justify-between px-5 py-3 text-sm font-medium text-[#C5A880] hover:bg-white/5"
                >
                  View all expertise
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/insights"
            className={linkStyle(path.startsWith("/insights"))}
          >
            Insights
          </Link>

          <Link to="/our-team" className={linkStyle(path === "/our-team")}>
            Our Team
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <button
            type="button"
            aria-label="Search expertise"
            onClick={() => {
              setSearchOpen((previous) => !previous);
              setExpertise(false);
            }}
            className="p-2 text-white/70 transition-colors hover:text-[#C5A880]"
          >
            <Search size={18} />
          </button>

          <Link
            to="/contact"
            onClick={closeMenus}
            className="inline-flex items-center gap-3 border border-[#C5A880] px-4 py-3 text-xs font-semibold tracking-wide text-[#C5A880] transition-colors hover:bg-[#C5A880] hover:text-[#0A192F] xl:px-5"
          >
            Start a conversation
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            aria-label="Search expertise"
            onClick={() => {
              setSearchOpen((previous) => !previous);
              setOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center text-[#C5A880]"
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen((previous) => !previous);
              setExpertise(false);
            }}
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-[#C5A880]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Search Panel */}
      {searchOpen && (
        <div className="border-b border-white/10 bg-[#10233D] px-5 py-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <label
              htmlFor="practice-search"
              className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#C5A880]"
            >
              Search our expertise
            </label>

            <div className="flex items-center gap-3 border-b border-white/20 py-2">
              <Search size={18} className="shrink-0 text-[#C5A880]" />

              <input
                id="practice-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search legal services..."
                className="w-full bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSearchOpen(false);
                }}
                aria-label="Close search"
                className="text-white/60 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {searchQuery.trim() && (
              <div className="mt-3 max-h-64 overflow-y-auto">
                {filteredPractices.length > 0 ? (
                  filteredPractices.map(([name, description]) => (
                    <Link
                      key={name}
                      to={`/our-expertise/${slugify(name)}`}
                      onClick={closeMenus}
                      className="block border-b border-white/10 py-3"
                    >
                      <span className="block text-sm text-white hover:text-[#C5A880]">
                        {name}
                      </span>

                      <span className="mt-1 block text-xs leading-relaxed text-white/50">
                        {description}
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="py-4 text-sm text-white/60">
                    No matching practice areas found.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-b border-white/10 bg-[#0A192F] px-5 py-4 sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <Link
              to="/the-firm"
              onClick={closeMenus}
              className="border-b border-white/10 py-4 text-sm text-white/80 hover:text-[#C5A880]"
            >
              The Firm
            </Link>

            {/* Mobile Expertise */}
            <button
              type="button"
              aria-expanded={expertise}
              onClick={() => setExpertise((previous) => !previous)}
              className="flex items-center justify-between border-b border-white/10 py-4 text-left text-sm text-white/80 hover:text-[#C5A880]"
            >
              Our Expertise
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  expertise ? "rotate-180" : ""
                }`}
              />
            </button>

            {expertise && (
              <div className="border-b border-white/10 bg-white/[0.03] py-2 pl-3">
                {practices.map(([name]) => (
                  <Link
                    key={name}
                    to={`/our-expertise/${slugify(name)}`}
                    onClick={closeMenus}
                    className="flex items-center gap-2 py-3 pr-2 text-sm text-white/65 hover:text-[#C5A880]"
                  >
                    <ChevronRight
                      size={14}
                      className="shrink-0 text-[#C5A880]"
                    />
                    {name}
                  </Link>
                ))}

                <Link
                  to="/our-expertise"
                  onClick={closeMenus}
                  className="mt-2 flex items-center gap-2 border-t border-white/10 py-4 text-sm font-medium text-[#C5A880]"
                >
                  View all expertise
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            )}

            <Link
              to="/our-team"
              onClick={closeMenus}
              className="border-b border-white/10 py-4 text-sm text-white/80 hover:text-[#C5A880]"
            >
              Our Team
            </Link>

            <Link
              to="/insights"
              onClick={closeMenus}
              className="border-b border-white/10 py-4 text-sm text-white/80 hover:text-[#C5A880]"
            >
              Insights
            </Link>

            <Link
              to="/contact"
              onClick={closeMenus}
              className="mt-4 flex items-center justify-between border border-[#C5A880] px-4 py-4 text-sm font-medium text-[#C5A880] transition-colors hover:bg-[#C5A880] hover:text-[#0A192F]"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export { practices, articles, slugify };
export default Nav;
