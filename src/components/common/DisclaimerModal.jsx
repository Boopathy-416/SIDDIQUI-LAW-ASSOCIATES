
import { useEffect, useState } from "react";

const CONSENT_KEY = "siddiqui-law-disclaimer-v1";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(() => {
    try {
      return localStorage.getItem(CONSENT_KEY) !== "accepted";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {
      // Allow the visitor to proceed if browser storage is unavailable.
    }

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center
         p-3 backdrop-blur-xl
        sm:p-6"
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        aria-describedby="disclaimer-intro"
        className="relative flex max-h-[92dvh] w-full max-w-2xl
          flex-col overflow-hidden rounded-[16px]
          border border-white/60  text-slate-800
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
          bg-slate-50/90"
      >
        {/* Decorative glass highlights */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0
            bg-gradient-to-br from-white/70 via-transparent
            to-teal-100/30"
        />

        {/* Brand header */}
        <header className="relative shrink-0 border-b border-slate-200/80 px-6 py-6 sm:px-10">
          <div className="flex items-center justify-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center
                rounded-full p-1 bg-[#000000e8] text-xl font-semibold
                text-white shadow-lg shadow-teal-950/20"
              aria-hidden="true"
            >
                   <img
              src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1791943251/lawww_rmus5a.png"
              alt="SIDDIQUI LAW ASSOCIATES"
            />
            </div>

            <div>
              <p className="text-lg font-semibold tracking-[0.14em] text-[#103f43]">
                SIDDIQUI
              </p>
              <p className="mt-0.2 text-[9px] font-medium tracking-[0.18em] text-slate-500">
                LAW ASSOCIATES
              </p>
            </div>
          </div>

          <div className="mt-5 text-center">
            {/* <span
              className="inline-flex items-center gap-2 rounded-full
                border border-teal-800/10 bg-teal-800/[0.06]
                px-3 py-1.5 text-[10px] font-semibold
                uppercase tracking-[0.2em] text-[#15575a]"
            >
              Website acknowledgement
            </span> */}

            <h1
              id="disclaimer-title"
              className="mt-4 text-2xl font-semibold tracking-tight
                text-slate-900 sm:text-3xl"
            >
              Disclaimer & Acknowledgement
            </h1>

            <p
              id="disclaimer-intro"
              className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500"
            >
              Please read and acknowledge the following information
              before proceeding to our website.
            </p>
          </div>
        </header>

        {/* Scrollable disclaimer */}
        <div className="relative min-h-0 flex-1 overflow-y-auto px-6 py-5 sm:px-10 sm:py-7">
          <div className="space-y-5">
            <p className="text-sm leading-5 text-slate-600">
              In accordance with the rules of the Bar Council of India,
              Siddiqui Law Associates does not solicit work or advertise
              its legal services. By clicking on “I Agree & Proceed”
              below, you acknowledge and confirm that:
            </p>

            <div className="space-y-4 ">
              <DisclaimerPoint number="01">
                You are accessing this website voluntarily, of your own
                accord, and solely to obtain information about Siddiqui
                Law Associates for your personal information and
                understanding.
              </DisclaimerPoint>

              <DisclaimerPoint number="02">
                No advertisement, personal communication, solicitation,
                invitation or inducement has been made by Siddiqui Law
                Associates or any of its advocates to solicit work
                through this website.
              </DisclaimerPoint>

              <DisclaimerPoint number="03">
                The information available on this website is provided
                solely for general informational purposes and does not
                constitute legal advice or an invitation to establish
                an advocate–client relationship.
              </DisclaimerPoint>

              <DisclaimerPoint number="04">
                Accessing, browsing or using this website, or downloading
                any material from it, does not, by itself, create an
                advocate–client relationship with Siddiqui Law Associates.
              </DisclaimerPoint>

              <DisclaimerPoint number="05">
                Siddiqui Law Associates shall not be responsible for any
                consequence arising from reliance on the information
                provided on this website, to the extent permitted by
                applicable law. Visitors requiring advice on specific
                legal matters should seek independent legal advice from
                a qualified advocate.
              </DisclaimerPoint>
            </div>

            <div className="rounded-2xl border border-teal-900/10 bg-teal-900/[0.045] p-4">
              <p className="text-sm leading-6 text-slate-600">
                By clicking “I Agree & Proceed”, you confirm that you
                have read, understood and acknowledged this Disclaimer
                and wish to proceed voluntarily.
              </p>
            </div>
          </div>
        </div>

        {/* Fixed action area */}
        <footer className="relative shrink-0 border-t border-slate-200/80 bg-white/60 px-6 py-5 sm:px-10">
          <button
            type="button"
            onClick={handleAccept}
            className="group flex w-full items-center justify-center
              gap-3 rounded-[24px] bg-[#124b4e] px-6 py-4
              text-sm font-semibold tracking-wider text-white
              shadow-lg shadow-teal-950/15 transition-all
              duration-300 hover:-translate-y-0.5
              hover:bg-[#0d3d40] hover:shadow-xl
              focus:outline-none focus:ring-4
              focus:ring-teal-700/20 active:translate-y-0"
          >
            I Agree & Proceed
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>

          <p className="mt-3 text-center text-[10px] leading-5 text-slate-400">
            Siddiqui Law Associates · Website Disclaimer
          </p>
        </footer>
      </section>
    </div>
  );
}

function DisclaimerPoint({ number, children }) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center
          justify-center rounded-full border border-teal-900/10
          bg-teal-900/[0.06] text-[10px] font-semibold text-[#15575a]"
      >
        {number}
      </span>

      <p className="text-[13px] leading-6 text-slate-600 sm:text-sm">
        {children}
      </p>
    </div>
  );
}
