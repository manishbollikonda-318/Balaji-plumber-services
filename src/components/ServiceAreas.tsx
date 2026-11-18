const areas = [
  'Miyapur',
  'Hafeezpet',
  'Kukatpally',
  'KPHB Colony',
  'Chandanagar',
  'Manikonda',
  'Gachibowli',
  'Kondapur',
  'Madhapur',
  'Nizampet',
  'Pragathi Nagar',
  'Bachupally',
  'Alwal',
  'Kompally',
  'Lingampally',
  'Patancheru',
];

export default function ServiceAreas() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Service Coverage
          </div>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-primary-950">
            Areas We Serve in Hyderabad
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Doorstep plumbing service dispatched promptly across all nearby localities.
          </p>
        </div>

        {/* Responsive Area Tags Grid: 2 col on mobile, 3 col on sm, 4 col on md, 4 col on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4 mb-10 sm:mb-14">
          {areas.map((area) => (
            <div
              key={area}
              className="card-hover bg-gray-50/80 hover:bg-primary-600 rounded-xl px-3 sm:px-5 py-3 sm:py-4 border border-gray-100 hover:border-primary-600 text-center transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                <span className="text-primary-500 group-hover:text-white transition-colors text-xs sm:text-sm">📍</span>
                <span className="font-semibold text-xs sm:text-sm text-gray-800 group-hover:text-white transition-colors">
                  {area}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Map Embed Container with Aspect Ratio */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative w-full h-[280px] xs:h-[340px] sm:h-[400px] lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2!2d78.357!3d17.4931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb933a257955b3%3A0x3a11f3047943e9bf!2sBalaji%20Plumber%20Services!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Balaji Plumber Services Location - Hafeezpet, Miyapur, Hyderabad"
          />
        </div>

      </div>
    </section>
  );
}
