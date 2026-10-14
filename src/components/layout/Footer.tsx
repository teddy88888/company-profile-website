const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      //   <img src=" /facebook.png" alt="Facebook" />
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <circle
          cx="20"
          cy="20"
          r="19.5"
          fill="none"
          className="stroke-gray-300 dark:stroke-[#252B37]"
        />

        <path
          d="M25.08 10H21.76C18.44 10 16.5 12.08 16.5 15.48V18.5H13V22.5H16.5V30H20.7V22.5H24.2L24.75 18.5H20.7V15.9C20.7 14.75 21.05 14 22.4 14H25.08V10Z"
          className="fill-gray-900 dark:fill-[#FDFDFD]"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <rect
          x="10"
          y="10"
          width="20"
          height="20"
          rx="5"
          className="fill-none stroke-gray-900 dark:stroke-[#FDFDFD]"
          strokeWidth="2"
        />

        <circle
          cx="20"
          cy="20"
          r="4.5"
          className="fill-none stroke-gray-900 dark:stroke-[#FDFDFD]"
          strokeWidth="2"
        />

        <circle
          cx="25.5"
          cy="14.5"
          r="1.25"
          className="fill-gray-900 dark:fill-[#FDFDFD]"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <path
          d="M11.6 13.35C11.6 12.25 12.5 11.35 13.6 11.35C14.7 11.35 15.6 12.25 15.6 13.35C15.6 14.45 14.7 15.35 13.6 15.35C12.5 15.35 11.6 14.45 11.6 13.35ZM11.9 17.15H15.3V28.65H11.9V17.15ZM17.25 17.15H20.5V18.72H20.55C21 17.82 22.1 16.85 23.95 16.85C27.4 16.85 28.05 19.12 28.05 22.08V28.65H24.65V22.82C24.65 21.43 24.62 19.65 22.72 19.65C20.8 19.65 20.5 21.15 20.5 22.7V28.65H17.25V17.15Z"
          className="fill-gray-900 dark:fill-[#FDFDFD]"
        />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <path
          d="M25.4 10.05H21.2V24.1C21.2 25.77 19.9 27.05 18.3 27.05C16.7 27.05 15.4 25.77 15.4 24.1C15.4 22.47 16.7 21.15 18.3 21.15C18.62 21.15 18.95 21.2 19.25 21.3V17.05C18.94 17.01 18.62 16.99 18.3 16.99C14.38 16.99 11.2 20.17 11.2 24.1C11.2 28.03 14.38 31.2 18.3 31.2C22.22 31.2 25.4 28.03 25.4 24.1V17.1C27.02 18.27 28.95 18.96 31.05 18.96V14.76C27.92 14.76 25.4 12.23 25.4 10.05Z"
          className="fill-gray-900 dark:fill-[#FDFDFD]"
        />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-white px-6 py-10 font-display transition-colors duration-300 dark:bg-black md:px-10 lg:px-[140px]">
      <div className="mx-auto max-w-[1160px] rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-[#252B37] dark:bg-[#0A0D12] md:p-10">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-[281px] text-[30px] font-bold leading-[44px] tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] md:text-[36px]">
            Let&apos;s DISCUSS YOUR IDEAS
          </h2>

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-[9.6px]"
            aria-label="Go to homepage"
          >
            {/* Logo symbol */}
            <span className="relative block h-8 w-[30px]">
              <img src=" /logos.png" alt="logos" />
            </span>

            <span className="text-2xl font-semibold leading-9 text-gray-900 dark:text-white">
              Your Logo
            </span>
          </a>
        </div>

        {/* Divider */}
        <div className="my-10 mb-2 h-px w-full bg-gray-200 dark:bg-[#252B37]" />

        {/* Footer Bottom */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Menu */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-1"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-base font-medium leading-[30px] text-gray-700 transition-colors hover:text-[#FF623E] dark:text-[#FDFDFD]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Media */}
          <div className="flex items-center h-35 w-45 gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-200 hover:border-[#FF623E] hover:text-[#FF623E] dark:border-[#252B37] dark:text-[#FDFDFD]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;