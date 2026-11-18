const testimonials = [
  {
    stars: 5,
    quote: 'Good service good behaviour great price! Fixed a severe kitchen pipeline leak on short notice without mess. Very polite and knowledgeable.',
    name: 'Rajesh Kumar',
    location: 'Miyapur, Hyderabad',
  },
  {
    stars: 5,
    quote: 'Good service good experience reasonable prices. We had a midnight pipe burst and they arrived in 25 minutes. Repaired properly on the spot!',
    name: 'Priya Reddy',
    location: 'Mathrusree Nagar, Hafeezpet',
  },
  {
    stars: 5,
    quote: 'Good work Humble person keep up good work! Did the whole bathroom plumbing work and sanitary fixtures for our flat. Clean execution and fair rate.',
    name: 'Venkat Rao',
    location: 'KPHB Colony, Hyderabad',
  },
  {
    stars: 5,
    quote: 'Very dependable plumber in Miyapur. Transparent with material costs and very punctual. Will definitely call Balaji services for all plumbing needs.',
    name: 'Fatima Begum',
    location: 'Kukatpally, Hyderabad',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Customer Feedback
          </div>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-primary-950">
            Real Reviews From Real Customers
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Rated <span className="font-bold text-amber-600">5.0 / 5.0 ⭐</span> across 30+ Google reviews in Miyapur and Hafeezpet.
          </p>
        </div>

        {/* Responsive Testimonials: 1 col on mobile, 2 col on tablet/small laptop, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-white rounded-2xl p-5 sm:p-7 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-3.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                <p className="text-xs text-primary-700 font-medium mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google verification pill */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white border border-gray-200 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-sm text-xs sm:text-sm text-gray-700">
            <span className="font-bold text-blue-600">G</span>
            <span className="font-semibold">Google Verified Business</span>
            <span className="hidden xs:inline text-gray-300">|</span>
            <span className="text-amber-600 font-bold">5.0 ★ Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}
