import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Practice Areas",
    path: "/practice-areas",
  },
  {
    label: "Team",
    path: "/team",
  },
  {
    label: "Insights",
    path: "/insights",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111F]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
        <NavLink
          to="/"
          className="text-xl font-medium tracking-wide text-[#C5A880]"
        >
          LAW FIRM
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden border border-[#C5A880] px-5 py-3 text-sm text-[#C5A880] transition hover:bg-[#C5A880] hover:text-[#07111F] md:block"
        >
          Consultation
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;