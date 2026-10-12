function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111F]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg text-[#C5A880]">LAW FIRM</p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              [INSERT VERIFIED FIRM DESCRIPTION]
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#C5A880]">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="/about" className="hover:text-white">
                About
              </a>

              <a href="/practice-areas" className="hover:text-white">
                Practice Areas
              </a>

              <a href="/team" className="hover:text-white">
                Team
              </a>

              <a href="/insights" className="hover:text-white">
                Insights
              </a>

              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#C5A880]">
              Contact
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              [INSERT VERIFIED CONTACT INFORMATION]
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} [INSERT VERIFIED FIRM NAME]. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;