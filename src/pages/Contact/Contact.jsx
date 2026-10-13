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
    <main className="min-h-screen bg-[#f7f6f3] text-slate-900">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div className="mb-12 max-w-2xl">
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
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Contact form */}
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
              {/* Full name */}
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

              {/* Email */}
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

              {/* Mobile */}
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

              {/* API status */}
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#10243a] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#1b3857] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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

          {/* Contact details */}
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
                    info@siddiquilawassociates.in
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-amber-800" size={20} />

                <div>
                  <h3 className="text-sm font-medium">Telephone</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Contact details to be confirmed
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-amber-800" size={20} />

                <div>
                  <h3 className="text-sm font-medium">Consultation hours</h3>
                  <p className="mt-1 text-sm text-slate-600">By appointment</p>
                </div>
              </div>
            </div>
          </motion.aside>

        </div>

   {/* Office location map - centered below both columns */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
              Find us
            </p>

            <h2 className="text-center text-3xl font-medium text-slate-900 sm:text-4xl">
              Visit Our Office
            </h2>

            <p className="mb-8 mt-4 max-w-xl text-center text-sm leading-6 text-slate-600 sm:text-base">
              Find our office at Prakash Chamber, Nagindas Master Road,
              Mumbai.
            </p>

            {/* Responsive map */}
            <div className="w-full max-w-[1200px] min-w-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <iframe
                title="Siddiqui Law Associates office location in Mumbai"
                src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.87724971628504!2d72.83210447668799!3d18.929800809649343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c36ab2f7b1%3A0x87803dc19eaaa249!2soffice%20No1.%20Mezzanine%20Floor%2C%20Prakash%20Chambers%2C%2077%2C%20Nagindas%20Master%20Rd%2C%20FloraFountain%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1791887736739!5m2!1sen!2sin"}
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-square w-full"
              />
            </div>

            {/* Directions button below map */}
            <a
              href={"https://www.google.com/maps/place/office+No1.+Mezzanine+Floor,+Prakash+Chambers,+77,+Nagindas+Master+Rd,+FloraFountain,+Fort,+Mumbai,+Maharashtra+400001/@18.9298817,72.8323574,17z/data=!4m9!1m2!2m1!1schamber+77+,+nagindas+road,+fort!3m5!1s0x3be7d1c36ab2f7b1:0x87803dc19eaaa249!8m2!3d18.9298817!4d72.8323574!16s%2Fg%2F11xz1s6r59?hl=en-GB&source=lnms&g_ep=Eg1tbF8yMDI2MTAwNl8wIOC7DCoASAJQAg%3D%3D"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#245e60] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#194749]"
            >
              Open in Google Maps
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
