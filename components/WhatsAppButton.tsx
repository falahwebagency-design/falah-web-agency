import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 animate-floatY"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M17.47 14.38c-.29-.14-1.7-.84-1.97-.93-.26-.1-.46-.14-.65.14-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.51h-.56c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.14.2 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.61.69.22 1.31.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.35z" />
        <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.6 1.36 5.1L2 22l5.05-1.33A9.95 9.95 0 0 0 12.02 22C17.5 22 22 17.52 22 12S17.5 2 12.02 2zm0 18.2c-1.7 0-3.3-.47-4.66-1.28l-.33-.2-3 .8.8-2.92-.22-.34A8.18 8.18 0 0 1 3.8 12c0-4.53 3.7-8.2 8.22-8.2 4.52 0 8.2 3.67 8.2 8.2s-3.68 8.2-8.2 8.2z" />
      </svg>
    </a>
  );
}
