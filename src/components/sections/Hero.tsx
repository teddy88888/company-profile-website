import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-20 transition-colors duration-300 dark:bg-black md:pt-40 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-6xl">
            Your Tech Partner for
            <span className="block text-orange-500">Smarter growth</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Let's Talk</Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto flex h-[360px] w-full max-w-lg items-center justify-center md:h-[600px]">
          {/* Light Mode */}
          <img
            src="/light.png"
            alt="Digital technology illustration"
            className="block h-full w-full rounded-3xl object-cover dark:hidden"
          />

          {/* Dark Mode */}
          <img
            src="/hero.png"
            alt="Digital technology illustration"
            className="hidden h-full w-full rounded-3xl object-cover dark:block"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
