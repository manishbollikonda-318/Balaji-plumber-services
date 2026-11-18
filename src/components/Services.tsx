import Image from 'next/image';

const services = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    title: 'Pipe Leak Repair',
    badge: 'Popular',
    description: 'Precision acoustic & moisture detection to locate hidden pipeline fractures behind walls, ceilings, and floors with zero unnecessary damage.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop&q=80',
    alt: 'Plumber repairing leaky copper and PVC water pipes in Hyderabad',
    features: ['Hidden Leak Detection', 'Wall Moisture Fixing', 'Durable CPVC Sealing'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Bathroom Plumbing & Renovation',
    badge: 'Complete Setup',
    description: 'Turnkey sanitary installation, hot/cold mixer taps, concealed diverters, vanity basins, and full modern bathroom renovation works.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&q=80',
    alt: 'Luxury modern bathroom plumbing fixtures and shower installation',
    features: ['Concealed Diverters', 'Vanity & Basin Setup', 'Waterproofing Checks'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Kitchen Plumbing & Sink Setup',
    badge: 'Fast Repair',
    description: 'Installation of stainless steel & granite sinks, under-counter waste couplings, dishwasher inlets, and water purifier (RO) lines.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop&q=80',
    alt: 'Modern kitchen sink plumbing and chrome faucet setup',
    features: ['RO Purifier Line', 'Grease Trap Cleaning', 'Sink Trap Alignment'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    title: 'Drainage & Sewer Clog Cleaning',
    badge: 'Heavy Duty',
    description: 'Powerful motorized drain snakes and high-pressure jetting that eliminate kitchen grease, hair clogs, and sewer pipe blockages instantly.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop&q=80',
    alt: 'Professional drain cleaning technician using motorized equipment',
    features: ['Motorized Rodding', 'Odor Elimination', 'Sewer Backflow Fixes'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Tap, Faucet & Valve Repair',
    badge: 'Quick Service',
    description: 'Repairing or replacing leaking spindle valves, ceramic cartridges, brass bibcocks, high-pressure angle cocks, and main ball valves.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop&q=80',
    alt: 'Close-up of premium chrome bathroom tap and water faucet repair',
    features: ['Ceramic Spindle Fix', 'Ball Valve Replacement', 'Leak-proof Guarantee'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Toilet, Commode & Cistern Repair',
    badge: 'Same Day',
    description: 'Expert repair for constantly running flush tanks, syphon valve replacements, wall-hung commode brackets, and soft-close seat covers.',
    image: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=800&h=600&fit=crop&q=80',
    alt: 'Modern wall-mounted toilet installation and flush valve testing',
    features: ['Flush Valve Calibration', 'Wall-Hung Installation', 'Jet Spray Alignment'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Emergency Plumbing Service',
    badge: 'Emergency 24/7',
    description: 'Urgent mobile dispatch team for pipe bursts, ceiling flooding, overhead tank overflow, and late-night plumbing breakdowns in Miyapur.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=80',
    alt: 'Emergency plumber responding with tools at night in Hyderabad',
    features: ['30 Min Arrival Time', 'Midnight Availability', 'Equipped Mobile Van'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'CPVC, UPVC & Water Line Installation',
    badge: 'Heavy Piping',
    description: 'Piping engineering for apartments and villas using top-tier CPVC and UPVC pipes, pressure testing, and multi-floor distribution manifolds.',
    image: 'https://images.unsplash.com/photo-1542013936693-884638332954?w=800&h=600&fit=crop&q=80',
    alt: 'Industrial and residential UPVC and CPVC water line pipe fitting',
    features: ['SDR-11 CPVC Piping', 'Multi-Floor Riser Setup', 'Pressure Tested'],
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Shower, Geyser & Pump Integration',
    badge: 'Premium Fit',
    description: 'Setup of luxury overhead rain showers, instant/storage geyser inlets & pressure relief valves, and booster pump automation systems.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop&q=80',
    alt: 'Luxury chrome rain shower head and thermostatic geyser setup',
    features: ['Overhead Rain Showers', 'Geyser Pressure Valves', 'Booster Pump Sync'],
  },
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & introductory header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary-100/90 text-primary-900 border border-primary-200 rounded-full text-xs font-bold uppercase tracking-wider mb-3.5">
            <span>🔧</span>
            <span>WHAT WE DO</span>
          </div>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-primary-950 leading-tight">
            Comprehensive Plumbing Services
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal">
            Specialized solutions with high-precision tools, genuine replacement parts, and emergency dispatch across Miyapur, Hafeezpet &amp; all Hyderabad localities.
          </p>
        </div>

        {/* Responsive Grid: 
            - Mobile: 1 column card with auto-scaled media & tap targets
            - Tablet: 2 columns with balanced image heights
            - Desktop / Laptop: 3 columns with micro-elevation and hover zoom
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group card-hover bg-white rounded-2xl sm:rounded-3xl border border-gray-100 hover:border-primary-400/80 shadow-md hover:shadow-xl shadow-gray-200/50 hover:shadow-primary-900/10 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Responsive Image Container:
                    - Mobile: optimized 180px - 210px height
                    - Tablet: 200px - 220px height
                    - Laptop/Desktop: 230px - 250px height
                */}
                <div className="relative w-full h-48 xs:h-52 sm:h-52 md:h-56 lg:h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark gradient overlay for text readability and badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Top category badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-primary-900 font-extrabold text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon badge floating on bottom-right of photo */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/95 backdrop-blur-md text-primary-700 flex items-center justify-center shadow-lg group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-5 sm:p-6 lg:p-7">
                  <h3 className="text-base sm:text-lg font-display font-extrabold text-gray-950 group-hover:text-primary-700 transition-colors leading-snug mb-2 sm:mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                    {service.description}
                  </p>

                  {/* Bullet feature tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center text-[10px] sm:text-xs font-semibold text-primary-800 bg-primary-50 px-2.5 py-1 rounded-md"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7 pt-2 flex items-center justify-between border-t border-gray-100 gap-2">
                <a
                  href="tel:+919652040779"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent-600 hover:text-accent-700 transition-colors py-1 focus:outline-none"
                >
                  <span>Book Technician</span>
                  <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>

                <a
                  href={`https://wa.me/919652040779?text=Hi%20Balaji%20Plumber%20Services%2C%20I%20need%20help%20with%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-green-700 hover:text-green-800 bg-green-50 hover:bg-green-100 px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside What We Do */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-display font-bold">
              Looking for a custom plumbing quote or immediate visit?
            </h4>
            <p className="text-xs sm:text-sm text-primary-200 mt-1.5 max-w-xl">
              We provide upfront free telephone consultations and transparent price estimates before any work starts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 flex-shrink-0 w-full md:w-auto">
            <a
              href="tel:+919652040779"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-lg transition-all"
            >
              <span>📞</span>
              <span>Call +91 96520 40779</span>
            </a>
            <a
              href="https://wa.me/919652040779?text=Hi%20Balaji%20Plumber%20Services%2C%20I%20would%20like%20a%20price%20estimate."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              <span>💬 Free WhatsApp Quote</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
