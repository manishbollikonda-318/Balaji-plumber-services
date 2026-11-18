export default function CtaBanner() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-dark-900 overflow-hidden text-center">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-accent-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 text-accent-300 font-bold text-xs uppercase tracking-wider mb-4">
          24/7 Immediate Dispatch
        </span>

        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          Need an Emergency Plumber{' '}
          <span className="text-accent-400">Right Now?</span>
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
          Don&apos;t let water leakage ruin your property. We are stationed locally at Hafeezpet &amp; Miyapur ready to assist you day and night.
        </p>

        {/* Responsive buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="tel:+919652040779"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-bold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full btn-glow shadow-2xl shadow-accent-600/40 hover:shadow-accent-600/60 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
          >
            <span>📞</span>
            <span>Call +91 96520 40779</span>
          </a>

          <a
            href="https://wa.me/919652040779?text=Hi%20Balaji%20Plumber%20Services%2C%20I%20have%20an%20urgent%20plumbing%20emergency."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full backdrop-blur-md transition-all text-sm sm:text-base"
          >
            <span className="text-green-400">💬</span>
            <span>WhatsApp Emergency</span>
          </a>
        </div>
      </div>
    </section>
  );
}
