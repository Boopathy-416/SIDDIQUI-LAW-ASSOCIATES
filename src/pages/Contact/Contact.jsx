// import SEO from "../../components/seo/Seo";

// function Contact() {
//   return (
//     <>
//       <SEO
//         title="Contact"
//         description="[INSERT VERIFIED CONTACT PAGE META DESCRIPTION]"
//         canonical="/contact"
//       />

//       <section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10">
//         <p className="text-sm uppercase tracking-[0.3em] text-[#C5A880]">
//           Connect
//         </p>

//         <h1 className="mt-5 text-5xl font-light">
//           Contact
//         </h1>

//         <p className="mt-8 text-slate-400">
//           [INSERT VERIFIED CONTACT INFORMATION]
//         </p>
//       </section>
//     </>
//   );
// }

// export default Contact;

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Scale,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

// Configure your backend URL in the frontend .env file.
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// Validation rules aligned with the Mongoose schema.
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .max(254, "Email cannot exceed 254 characters.")
    .refine(
      (value) => value === "" || z.email().safeParse(value).success,
      "Please enter a valid email address.",
    ),

  mobile: z
    .string()
    .trim()
    .min(1, "Mobile number is required.")
    .max(20, "Mobile number is too long.")
    .regex(/^\+?[0-9\s()-]+$/, "Enter a valid mobile number.")
    .refine(
      (value) => value.replace(/\D/g, "").length >= 7,
      "Enter a valid mobile number.",
    ),
});

const inputClasses =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15";

function FieldError({ children }) {
  if (!children) return null;

  return (
    <p className="mt-1.5 flex items-start gap-1.5 text-sm text-red-600">
      <AlertCircle size={15} className="mt-0.5 shrink-0" />
      {children}
    </p>
  );
}

export default function Contact() {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values) => {
    setStatus({ type: "", message: "" });

    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim() || undefined,
        mobile: values.mobile.trim(),
      };

      const response = await axios.post(
        `${API_BASE_URL}/api/contact`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 15000,
        },
      );

      setStatus({
        type: "success",
        message:
          response.data?.message ||
          "Your enquiry has been submitted successfully.",
      });

      reset();
    } catch (error) {
      const statusCode = error.response?.status;
      const serverMessage = error.response?.data?.message;

      let message = "Unable to submit your enquiry. Please try again.";

      if (!error.response) {
        message = "Cannot connect to the server. Please try again later.";
      } else if (statusCode === 409 || statusCode === 11000) {
        message =
          "This mobile number has already been submitted. Please contact our office if you need assistance.";
      } else if (statusCode === 400 || statusCode === 422) {
        message =
          serverMessage || "Please check your details and submit again.";
      } else if (statusCode >= 500) {
        message = "A server error occurred. Please try again later.";
      } else if (serverMessage) {
        message = serverMessage;
      }

      setStatus({
        type: "error",
        message,
      });
    }
  };

  return (
  <main className="min-h-screen bg-[#0b1420] text-[#f5f1e8] ">
        {/* Contact Section — Premium Architectural Theme  */}
        <section className="relative isolate overflow-hidden border-y border-[#c5a878]/30 bg-[#0b1420] px-5 py-20 text-[#f5f1e8] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          {/* Architectural background */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-y-0 left-[6%] hidden w-px bg-white/[0.045] lg:block" />
            <div className="absolute inset-y-0 right-[6%] hidden w-px bg-white/[0.045] lg:block" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#c5a878]/[0.04] blur-[120px]" />
          </div>

          <div className="mx-auto max-w-[1380px]">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 max-w-3xl sm:mb-16"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#c5a878]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-[#d4bd91] sm:text-xs">
                  Get In Touch · Mumbai, India
                </p>
              </div>

              <h1 className="mt-7 text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Start a
                <span className="ml-3 font-serif font-normal italic text-[#c5a878]">
                  conversation.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Tell us how to reach you. Our team can follow up to understand
                your requirements and discuss the appropriate next steps.
              </p>

              <div className="mt-7 h-px w-20 bg-[#c5a878]/70" />
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="relative border border-[#c5a878]/40 bg-[#101e2d]/75 p-6 sm:p-9 lg:p-10"
              >
                {/* Gold corner accents */}
                <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[#d4bd91]" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#d4bd91]" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c5a878]/50 bg-[#c5a878]/[0.06]">
                    <Mail
                      size={21}
                      strokeWidth={1.3}
                      className="text-[#d4bd91]"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-medium sm:text-2xl">
                      Send us an enquiry
                    </h2>
                    <p className="mt-1 text-xs text-white/45">
                      Fields marked with * are required.
                    </p>
                  </div>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-[#c5a878]/50 via-white/10 to-transparent" />

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  noValidate
                >
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium tracking-wide text-white/75"
                    >
                      Full name <span className="text-[#d4bd91]">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      maxLength={100}
                      aria-invalid={Boolean(errors.name)}
                      className={`${inputClasses} !rounded-none !border-white/15 !bg-[#08121e]/70 !text-[#f5f1e8] placeholder:!text-white/30 focus:!border-[#c5a878] focus:!ring-1 focus:!ring-[#c5a878]/30`}
                      {...register("name")}
                    />

                    <FieldError>{errors.name?.message}</FieldError>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium tracking-wide text-white/75"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      maxLength={254}
                      aria-invalid={Boolean(errors.email)}
                      className={`${inputClasses} !rounded-none !border-white/15 !bg-[#08121e]/70 !text-[#f5f1e8] placeholder:!text-white/30 focus:!border-[#c5a878] focus:!ring-1 focus:!ring-[#c5a878]/30`}
                      {...register("email")}
                    />

                    <FieldError>{errors.email?.message}</FieldError>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="mb-2 block text-xs font-medium tracking-wide text-white/75"
                    >
                      Mobile number
                    </label>

                    <input
                      id="mobile"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter your contact number"
                      maxLength={20}
                      aria-invalid={Boolean(errors.mobile)}
                      className={`${inputClasses} !rounded-none !border-white/15 !bg-[#08121e]/70 !text-[#f5f1e8] placeholder:!text-white/30 focus:!border-[#c5a878] focus:!ring-1 focus:!ring-[#c5a878]/30`}
                      {...register("mobile")}
                    />

                    <FieldError>{errors.mobile?.message}</FieldError>
                  </div>

                  {/* API status */}
                  {status.message && (
                    <div
                      role={status.type === "error" ? "alert" : "status"}
                      aria-live="polite"
                      className={`border p-4 text-sm leading-6 ${
                        status.type === "success"
                          ? "border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-200"
                          : "border-red-400/30 bg-red-400/[0.08] text-red-200"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {status.type === "success" ? (
                          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                        ) : (
                          <AlertCircle size={18} className="mt-0.5 shrink-0" />
                        )}

                        <p>{status.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-4 border border-[#c5a878] bg-[#c5a878] px-6 py-4 text-sm font-semibold text-[#0b1420] transition-all duration-300 hover:bg-transparent hover:text-[#d4bd91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4bd91] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101e2d] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[210px]"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle size={17} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="max-w-lg text-xs leading-6 text-white/40">
                    Your contact details will be submitted to our server for
                    follow-up, subject to our privacy policy.
                  </p>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="relative flex flex-col justify-center border border-white/10 bg-white/[0.02] p-6 sm:p-9 lg:p-10"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4bd91]">
                  Siddiqui Law Associates
                </p>

                <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-4xl">
                  Good advice starts
                  <span className="mt-2 block font-serif font-normal italic text-[#c5a878]">
                    with a conversation.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                  We work with individuals, founders, and established businesses
                  on matters that require careful thought and considered advice.
                </p>

                <div className="my-8 h-px bg-gradient-to-r from-[#c5a878]/50 via-white/10 to-transparent" />

                <div className="space-y-7">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c5a878]/35 bg-[#c5a878]/[0.05]">
                      <MapPin
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#d4bd91]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-[#f5f1e8]">
                        Office address
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-white/55">
                        Chamber 23, 3rd Floor, Prakash Chamber,
                        <br />
                        77 Nagindas Master Road, Mumbai - 400001.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c5a878]/35 bg-[#c5a878]/[0.05]">
                      <Mail
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#d4bd91]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-[#f5f1e8]">
                        Email
                      </h3>

                      <a
                        href="mailto:info@siddiquilawassociates.in"
                        className="mt-2 block break-all text-sm leading-6 text-white/55 transition-colors hover:text-[#d4bd91]"
                      >
                        info@siddiquilawassociates.in
                      </a>

                      <a
                        href="mailto:adv.rahilsiddiqui@gmail.com"
                        className="mt-1 block break-all text-sm leading-6 text-white/55 transition-colors hover:text-[#d4bd91]"
                      >
                        adv.rahilsiddiqui@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Telephone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c5a878]/35 bg-[#c5a878]/[0.05]">
                      <Phone
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#d4bd91]"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-[#f5f1e8]">
                        Telephone
                      </h3>

                      <a
                        href="tel:+917506926969"
                        className="mt-2 inline-block text-sm text-white/55 transition-colors hover:text-[#d4bd91]"
                      >
                        +91 75069 26969
                      </a>
                    </div>
                  </div>

                  {/* Consultation hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c5a878]/35 bg-[#c5a878]/[0.05]">
                      <Clock
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#d4bd91]"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-[#f5f1e8]">
                        Consultation hours
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/55">
                        By appointment
                        <br />
                        09:30 AM – 07:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-10 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a878]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Justice · Integrity · Excellence
                  </span>
                </div>
              </motion.aside>
            </div>
          </div>

      </section>
          {/* Office Location — Architectural Navy & Gold */}
          <section className="relative isolate overflow-hidden border-y border-[#c5a878]/30 bg-[#0b1420] px-5 py-20 text-[#f5f1e8] sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            {/* Architectural background lines */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-y-0 left-[6%] hidden w-px bg-white/[0.045] lg:block" />
              <div className="absolute inset-y-0 right-[6%] hidden w-px bg-white/[0.045] lg:block" />
              <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#c5a878]/[0.04] blur-[120px]" />
            </div>

            <div className="mx-auto max-w-[1380px]">
              {/* Section heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
                className="mb-10 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-12"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-9 bg-[#c5a878]" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.27em] text-[#d4bd91] sm:text-xs">
                      Find Us · Mumbai, India
                    </p>
                  </div>

                  <h2 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                    Visit Our
                    <span className="ml-3 font-serif font-normal italic text-[#c5a878]">
                      Office.
                    </span>
                  </h2>
                </div>

                <div className="border-l border-[#c5a878]/40 pl-5 sm:pl-6">
                  <p className="text-sm leading-7 text-white/60 sm:text-base">
                    Find our office at Prakash Chamber, Nagindas Master Road,
                    Mumbai. We welcome you to connect with our firm for legal
                    enquiries and consultations.
                  </p>
                </div>
              </motion.div>

              {/* Map frame */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75 }}
                className="relative border border-[#c5a878]/50 bg-[#101e2d] p-2 sm:p-3"
              >
                {/* Corner details */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-10 w-10 border-l border-t border-[#d4bd91] sm:h-14 sm:w-14" />
                <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-10 w-10 border-b border-r border-[#d4bd91] sm:h-14 sm:w-14" />

                <div className="relative overflow-hidden border border-white/10 bg-[#f5f1e8]">
                  <iframe
                    title="Siddiqui Law Associates office location in Mumbai"
                    src="https://www.google.com/maps?q=Siddiqui%20Law%20Associates%2C%20Chamber%20No.%2023%2C%203rd%20Floor%2C%20Prakash%20Chambers%2C%20Nagindas%20Master%20Road%2C%20Fort%2C%20Mumbai%20400001&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[320px] w-full sm:h-[400px] lg:h-[480px]"
                  />
                </div>
              </motion.div>

              {/* Address and directions */}
              <div className="mt-6 grid gap-5 border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c5a878]/40 bg-[#c5a878]/[0.06]">
                    <MapPin
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#d4bd91]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4bd91]">
                      Our Office Address
                    </p>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                      Chamber 23, 3rd Floor, Prakash Chamber, 77 Nagindas Master
                      Road, Mumbai - 400001
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Siddiqui%20Law%20Associates%2C%20Chamber%20No.%2023%2C%203rd%20Floor%2C%20Prakash%20Chambers%2C%20Nagindas%20Master%20Road%2C%20Fort%2C%20Mumbai%20400001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-4 border border-[#c5a878] bg-[#c5a878] px-5 py-3 text-sm font-semibold text-[#0b1420] transition-colors duration-300 hover:bg-transparent hover:text-[#d4bd91] sm:min-w-[210px]"
                >
                  Get Directions
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

              {/* Bottom decorative rule */}
              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-[#c5a878]/50" />
                <Scale size={17} strokeWidth={1.2} className="text-[#c5a878]" />
                <span className="h-px w-12 bg-[#c5a878]/50" />
              </div>
            </div>
          </section>
    </main>
  );

}




















































{
  /* Office location map - centered below both columns */
}
{
  /* <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
          Find us
          </p>
          
            <h2 className="text-center tracking-wide text-3xl font-medium text-slate-900 sm:text-4xl">
            Visit Our Office
            </h2>

            <p className="mb-8 mt-4 max-w-xl text-center tracking-wider text-sm leading-6 text-slate-600 sm:text-base">
              Find our office at Prakash Chamber, Nagindas Master Road, Mumbai.
            </p>

  
            <div className="w-full max-w-[1200px] min-w-0 overflow-hidden rounded-xs border border-slate-200 bg-[#F5F1E8] shadow-lg">
              <iframe
                title="Siddiqui Law Associates office location in Mumbai"
                src="https://www.google.com/maps?q=Siddiqui%20Law%20Associates%2C%20Chamber%20No.%2023%2C%203rd%20Floor%2C%20Prakash%20Chambers%2C%20Nagindas%20Master%20Road%2C%20Fort%2C%20Mumbai%20400001&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-square w-full"
              />
            </div>

            {/* Directions button below map */
}
{
  /* <a
              href="https://www.google.com/maps/dir/?api=1&destination=Siddiqui%20Law%20Associates%2C%20Chamber%20No.%2023%2C%203rd%20Floor%2C%20Prakash%20Chambers%2C%20Nagindas%20Master%20Road%2C%20Fort%2C%20Mumbai%20400001"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#111111]/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#77716A]"
            >
              Open in Google Maps
              <ArrowUpRight size={16} />
              </a>
          </div>
        </div>  */
}

{
  /* <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
            Get in touch
          </p>

          <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Start a conversation.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Tell us how to reach you. Our team can follow up to understand your
            requirements and discuss the appropriate next steps.
          </p>
        </div> */
}

{
  /* <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
         
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
          >
            <h2 className="text-xl font-medium">Send us an enquiry</h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Complete the form below. Fields marked with * are required.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
              noValidate
            >
              
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name *
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  maxLength={100}
                  aria-invalid={Boolean(errors.name)}
                  className={inputClasses}
                  {...register("name")}
                />

                <FieldError>{errors.name?.message}</FieldError>
              </div>

             
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={254}
                  aria-invalid={Boolean(errors.email)}
                  className={inputClasses}
                  {...register("email")}
                />

                <FieldError>{errors.email?.message}</FieldError>
              </div>

              
              <div>
                <label
                  htmlFor="mobile"
                  className="mb-2 block text-sm font-medium"
                >
                  Mobile number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your contact number"
                  maxLength={20}
                  aria-invalid={Boolean(errors.mobile)}
                  className={inputClasses}
                  {...register("mobile")}
                />

                <FieldError>{errors.mobile?.message}</FieldError>
              </div>

             
              {status.message && (
                <div
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`rounded-md border p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {status.type === "success" ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    )}

                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#10243a]  px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#1b3857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#77716A] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle size={17} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowUpRight size={17} />
                  </>
                )}
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Your contact details will be submitted to our server for
                follow-up, subject to our privacy policy.
              </p>
            </form>
          </motion.div>

      
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center py-4 lg:pl-4"
          >
            <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
              Good advice starts
              <br />
              <span className="font-serif italic text-amber-800">
                with a conversation.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              We work with individuals, founders, and established businesses on
              matters that require careful thought and considered advice.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-amber-800" size={20} />

                <div>
                  <h3 className="text-sm font-medium">Office address</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Chamber 23, 3rd Floor, Prakash Chamber, <br />
                    77 Nagindas Master Road, Mumbai- 400001.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-amber-800" size={20} />

                <div>
                  <h3 className="text-sm font-medium">Email</h3>
                  <a
                    href="mailto:info@siddiquilawassociates.in"
                    className="mt-1 inline-block text-sm text-slate-600 transition hover:text-amber-800"
                  >
                    info@siddiquilawassociates.in <br />{" "}
                    adv.rahilsiddiqui@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-amber-800" size={20} />

                <div>
                  <h3 className="text-sm font-medium">Telephone</h3>
                  <p className="mt-1 text-sm text-slate-600">+91 75069 26969</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-amber-800" size={20} />

                <div>
                  <h3 className="text-sm font-medium">Consultation hours</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    By appointment 09:30am to 07:30pm{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>   */
}
