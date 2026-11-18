export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section header */}
        <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-primary-950 leading-tight">
          Your Local Plumbing Partner <br />
          <span className="gradient-text">in Hyderabad</span>
        </h2>

        {/* Narrative text */}
        <p className="mt-5 sm:mt-8 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
          <strong className="text-gray-900 font-semibold">Balaji Plumber Services</strong> is a dedicated team of certified and highly skilled local plumbers solving problems for residential homes, apartments, villas, and commercial enterprises. Whether it&apos;s a sudden pipe burst at midnight, slow drains, complete bathroom sanitary installation, or standard tap repair — we have the specialized equipment and parts ready on hand.
        </p>

        <p className="mt-4 sm:mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
          Conveniently located at <strong className="text-primary-800 font-semibold">Mathrusree Nagar, Hafeezpet</strong>, we rapidly serve <strong className="text-primary-800 font-semibold">Miyapur, Kukatpally, KPHB Colony, Chandanagar, Gachibowli</strong>, and surrounding districts with transparent rates, zero hidden fees, and honest craftsmanship.
        </p>

        {/* Responsive Stats Grid (2 columns on mobile, 4 columns on tablets and desktops) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {[
            { value: '5.0 ★', label: 'Google Rating', color: 'from-amber-500 to-amber-600', sub: 'Verified reviews' },
            { value: '30+', label: 'Local Reviews', color: 'from-primary-600 to-primary-700', sub: 'Satisfied clients' },
            { value: '24/7', label: 'Availability', color: 'from-green-500 to-green-600', sub: 'Emergency response' },
            { value: '2018', label: 'Established In', color: 'from-accent-500 to-accent-600', sub: 'Years of trust' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-hover bg-gray-50/80 hover:bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm"
            >
              <p className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-bold text-gray-800">{stat.label}</p>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
