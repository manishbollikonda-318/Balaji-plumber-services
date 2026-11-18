export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-400 pt-12 sm:pt-16 pb-20 sm:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-600/30 text-white font-bold flex-shrink-0">
                🔧
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white leading-tight">
                  Balaji Plumber
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold text-primary-400 tracking-widest uppercase">
                  Services Hyderabad
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 max-w-sm">
              Your neighborhood certified plumbing agency serving Miyapur, Hafeezpet, Kukatpally &amp; all Hyderabad districts since 2018 with genuine parts and dependable 24/7 service.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-green-400 bg-green-950/60 border border-green-800/80 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
              Open 24 Hours &bull; Mon - Sun
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-3.5 sm:mb-4">
              Quick Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                { label: 'Home', href: '#' },
                { label: 'Pipe Leak Repair', href: '#services' },
                { label: 'Bathroom Plumbing', href: '#services' },
                { label: 'Drain Cleaning', href: '#services' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'Service Coverage', href: '#areas' },
                { label: 'Emergency Contact', href: 'tel:+919652040779' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors py-1 truncate"
                >
                  &rsaquo; {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 lg:col-span-1 space-y-3.5 text-xs sm:text-sm">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-3.5 sm:mb-4">
              Contact &amp; Location
            </h4>

            <div className="flex items-start gap-2.5">
              <span className="text-primary-400 text-sm mt-0.5 flex-shrink-0">📍</span>
              <span className="leading-snug">
                44/1, Mathrusree Nagar, Hafeezpet, Hyderabad, Telangana 500049 (Near Miyapur)
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-accent-400 text-sm flex-shrink-0">📞</span>
              <a href="tel:+919652040779" className="font-bold text-white hover:text-accent-400 transition-colors">
                +91 96520 40779 / 096520 40779
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-green-400 text-sm flex-shrink-0">💬</span>
              <a
                href="https://wa.me/919652040779"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Instant WhatsApp Booking
              </a>
            </div>

            <div className="pt-2 text-[11px] text-gray-500">
              Serving: Miyapur, Hafeezpet, Kukatpally, Chandanagar, Kondapur, Gachibowli, Manikonda, Madhapur, Pragathi Nagar, Nizampet.
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-gray-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Balaji Plumber Services. All rights reserved.
          </p>
          <p>
            Designed for Desktop, Laptop, Tablet &amp; Mobile devices.
          </p>
        </div>

      </div>
    </footer>
  );
}
