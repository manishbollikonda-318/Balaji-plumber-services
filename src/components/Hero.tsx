export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100/70 overflow-hidden pt-8 pb-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Background radial blurs */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 lg:w-[32rem] h-72 sm:h-96 lg:h-[32rem] bg-primary-200/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-accent-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Text & CTA content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-primary-200/80 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-sm mb-5 sm:mb-6">
              <span className="text-amber-500 text-sm sm:text-base">⭐</span>
              <span className="text-xs sm:text-sm font-bold text-primary-900">
                5.0 Rated &bull; 30+ Google Reviews &bull; Miyapur
              </span>
            </div>

            {/* Main responsive H1 headline */}
            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black text-primary-950 leading-[1.12] tracking-tight">
              Expert Plumbing <br className="hidden xs:inline" />
              Services in{' '}
              <span className="gradient-text-accent">Miyapur,</span>{' '}
              <br className="hidden sm:inline" />
              <span className="gradient-text-accent">Hyderabad</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Reliable, fast, and affordable plumbing repairs for apartments, villas, and commercial properties. Available <strong className="text-primary-700 font-semibold">24/7 for emergency repairs</strong> across Miyapur, Hafeezpet, Kukatpally, and all Hyderabad localities.
            </p>

            {/* Responsive Hero CTA Button Stack */}
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="tel:+919652040779"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full btn-glow shadow-xl shadow-accent-600/30 hover:shadow-accent-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>Call +91 96520 40779</span>
              </a>

              <a
                href="https://wa.me/919652040779?text=Hi%20Balaji%20Plumber%20Services%2C%20I%20need%20plumbing%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-green-500 text-green-700 font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-green-50 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
              >
                <svg className="w-5 h-5 flex-shrink-0 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Now</span>
              </a>

              <a
                href="#services"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 bg-primary-50/80 border border-primary-200 text-primary-700 font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:bg-primary-100 transition-all text-sm sm:text-base"
              >
                <span>Explore Services</span>
                <span className="text-primary-500">&darr;</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-primary-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">✓</span>
                <span className="font-semibold text-gray-800">Since 2018 in Miyapur</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">⏰</span>
                <span className="font-semibold text-gray-800">24/7 Rapid Response</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">★</span>
                <span className="font-semibold text-gray-800">5-Star Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Right Image / Visual Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-primary-950/15 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80"
                alt="Professional plumbing repairs in Miyapur, Hyderabad by Balaji Plumber Services"
                className="w-full h-64 xs:h-80 sm:h-96 lg:h-[430px] object-cover"
                loading="eager"
              />

              {/* Float badge for all screen sizes */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-base sm:text-lg">
                  ✓
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-extrabold text-gray-900 leading-snug">
                    Trusted Local Plumber
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-500">
                    Mathrusree Nagar, Hafeezpet &amp; Miyapur
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Responsive curved wave separator */}
      <div className="wave-divider mt-8 sm:mt-12">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 lg:h-16" preserveAspectRatio="none">
          <path d="M0 40C240 70 480 80 720 50C960 20 1200 40 1440 60V80H0V40Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
