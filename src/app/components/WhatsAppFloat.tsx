import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  // Using the first phone number from the contact details
  const phoneNumber = "919467883050"; // Format: country code + number without spaces or special characters
  const message = "Hello! I would like to enquire about admissions at Vedic Bal Niketan.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing animation ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="h-7 w-7" fill="currentColor" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2C1810] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#2C1810] rotate-45"></div>
        </div>
      </div>
    </a>
  );
}
