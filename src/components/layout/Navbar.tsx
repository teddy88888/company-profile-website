import { useEffect, useState } from "react";
import type { NavItem } from "../../types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;

      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");

      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-black/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2"
          aria-label="Go to homepage"
        >
          <img src=" /logos.png" alt="logo" className="h-10 w-10" />
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            Your Logo
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 flex-1 items-center justify-center gap-4 md:flex lg:gap-7"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-500 lg:text-base"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Light / Dark Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="relative flex h-7 w-12 shrink-0 items-center rounded-full border border-gray-300 bg-gray-100 p-1 transition-colors duration-300 dark:border-[#252B37] dark:bg-[#252B37]"
          >
            <span
              className={`h-5 w-5 rounded-full transition-transform duration-300 ${
                isDark ? "translate-x-5 bg-white" : "translate-x-0 bg-black"
              }`}
            />
          </button>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-400 md:inline-flex"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 md:hidden dark:text-white dark:hover:bg-white/10"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6L18 18M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 7H20M4 12H20M4 17H20" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg md:hidden dark:border-white/10 dark:bg-black">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100 hover:text-orange-500 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-orange-500"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
