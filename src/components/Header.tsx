'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top announcement bar - responsive layout for all screens */}
      <div className="bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 text-white text-xs sm:text-sm py-2 sm:py-2.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xs:flex-row items-center justify-between gap-1.5 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 text-center xs:text-left">
            <span className="text-red-400 text-sm sm:text-base">📍</span>
            <span className="font-medium truncate max-w-[280px] xs:max-w-none">
              Hafeezpet &amp; Miyapur, Hyderabad
            </span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+919652040779"
              className="flex items-center gap-1.5 hover:text-accent-300 transition-colors font-semibold"
            >
              <span>📞</span>
              <span>+91 96520 40779</span>
            </a>
            <span className="hidden xs:inline text-primary-400">|</span>
            <span className="hidden xs:flex items-center gap-1 text-green-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft inline-block" />
              24/7 Service
            </span>
          </div>
        </div>
      </div>

      {/* Main header - optimized for Mobile, Tablet, Laptop, and Ultrawide Desktop */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-md shadow-primary-900/5 border-b border-gray-100/80 py-2.5 sm:py-3'
            : 'bg-white py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-md shadow-primary-600/30 group-hover:scale-105 transition-transform flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
              </svg>
            </div>
            <div>
              <span className="block text-base sm:text-lg lg:text-xl font-display font-extrabold text-primary-950 leading-tight tracking-tight">
                Balaji Plumber
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold text-primary-600 tracking-wider uppercase">
                Services Hyderabad
              </span>
            </div>
          </a>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {[
              { label: 'Home', href: '#' },
              { label: 'Services', href: '#services' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Areas', href: '#areas' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tablet & Desktop Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/919652040779"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex lg:hidden xl:inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full hover:bg-green-100 transition-colors"
            >
              <span className="text-green-600">💬</span>
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+919652040779"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full btn-glow shadow-md shadow-accent-600/30 hover:shadow-accent-600/50 hover:scale-105 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Call Now</span>
            </a>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Mobile / Tablet Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(40px+57px)] sm:top-[calc(44px+65px)] bottom-0 bg-black/40 backdrop-blur-sm z-40 animate-fade-in">
            <div className="bg-white px-5 py-6 shadow-2xl border-b border-gray-100 flex flex-col gap-3 max-h-[85vh] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {[
                  { label: 'Home', href: '#' },
                  { label: 'Services', href: '#services' },
                  { label: 'Why Choose Us', href: '#why-us' },
                  { label: 'Customer Reviews', href: '#reviews' },
                  { label: 'Service Areas', href: '#areas' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-semibold text-gray-800 hover:text-primary-600 py-3 px-4 rounded-xl hover:bg-primary-50 active:bg-primary-100 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href="tel:+919652040779"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-bold text-base py-3.5 rounded-xl shadow-lg shadow-accent-600/30"
                >
                  <span>📞</span>
                  <span>Call +91 96520 40779</span>
                </a>

                <a
                  href="https://wa.me/919652040779?text=Hi%20Balaji%20Plumber%20Services%2C%20I%20need%20plumbing%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-base py-3.5 rounded-xl shadow-lg shadow-green-500/20"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
