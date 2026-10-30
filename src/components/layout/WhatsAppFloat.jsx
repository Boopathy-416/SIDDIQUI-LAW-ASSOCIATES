
// import { MessageCircle } from "lucide-react";

// const WhatsAppFloat = () => {
//   const phone = "917506926969";

//   const message =
//     "Hello, I would like to enquire about your legal services.";

//   return (
//     <a
//       href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat with us on WhatsApp"
//       className="
//         fixed bottom-5 right-5 z-[9999]
//         flex h-14 w-14 items-center justify-center
//         rounded-full bg-[#25D366]
//         text-white
//         shadow-[0_4px_20px_rgba(37,211,102,0.35)]
//         transition-all duration-300
//         hover:scale-110 hover:bg-[#20bd5a]
//         active:scale-95
//         sm:bottom-7 sm:right-7
//         sm:h-16 sm:w-16
//       "
//     >
//       <MessageCircle size={30} strokeWidth={2.2} />

//       {/* Notification pulse */}
//       <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
//     </a>
//   );
// };

// export default WhatsAppFloat;



const WhatsAppFloat = () => {
  const phone = "917506926969";

  const message =
    "Hello, I would like to enquire about your legal services.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-5 right-5 z-[9999]
        flex h-14 w-14 items-center justify-center
        rounded-full 
        shadow-[0_4px_20px_rgba(37,211,102,0.35)]
        transition-all duration-600
        hover:scale-110
        active:scale-75
        sm:bottom-7 sm:right-7
        sm:h-12 sm:w-12
      "
    >
      <img
        src="https://res.cloudinary.com/da6mndffu/image/upload/v1793343375/WhatsApp.svg_1_ttt6om.webp"
        alt="WhatsApp"
        className="h-full w-full quality-100 object-contain"
      />

      {/* Notification pulse */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/10" />
    </a>
  );
};

export default WhatsAppFloat;
