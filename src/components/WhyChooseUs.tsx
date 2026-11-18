const reasons = [
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Experienced Experts',
    description: 'Years of practical mastery since 2018 across Hyderabad communities.',
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Response',
    description: 'Prompt doorstep dispatch for plumbing emergencies in under 30-45 minutes.',
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Affordable Pricing',
    description: 'Upfront rates, genuine parts estimation, and zero hidden inspection charges.',
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Durable Quality',
    description: 'Industrial-grade fittings and tested sealant techniques that prevent recurring leaks.',
  },
  {
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Satisfaction Promised',
    description: 'Polite demeanor, clean job completion, and verified testing before departure.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-block px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Why Choose Us
          </div>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-primary-950">
            Why Miyapur Trusts Balaji Plumber
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Honest communication, quick arrival, and proven plumbing results every single time.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile xs, 2 col on sm, 3 col on md, 5 col on lg/xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-hover text-center bg-gray-50/70 hover:bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-primary-200 shadow-sm transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                {reason.icon}
              </div>
              
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
