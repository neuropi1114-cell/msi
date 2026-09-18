import Link from 'next/link';

export default function AskMsiCta() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mb-4">
          Still have a question about day care at MSI?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Talk to our team directly or book a tour to see our daycare environment for yourself.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block bg-msi-purple text-white font-bold py-3 px-10 rounded-full hover:opacity-90 transition-opacity"
          >
            ASK MSI
          </Link>
          <a
            href="https://wa.me/917075947070"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with My School ITALY on WhatsApp"
            className="inline-flex items-center border-2 border-[#25d366] bg-white py-2 px-6 rounded-full hover:bg-[#e6f9ee] transition-colors"
          >
            <img
              src="/whatsapp-wordmark.svg"
              alt="WhatsApp"
              className="h-7 w-auto"
            />
          </a>
          <Link
            href="/book-your-tour"
            className="inline-block border-2 border-msi-purple text-msi-purple font-bold py-3 px-10 rounded-full hover:bg-msi-purple hover:text-white transition-colors"
          >
            BOOK A TOUR
          </Link>
        </div>
      </div>
    </section>
  );
}
