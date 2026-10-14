function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 transition-colors duration-300 dark:bg-black md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              About Us
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
              Technology that moves your business forward.
            </h2>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
              We partner with businesses to design and build digital solutions
              that are practical, scalable, and focused on real business
              outcomes.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
              From strategy and product development to technology
              implementation, we combine creativity and engineering to turn
              ideas into meaningful digital experiences.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-gray-200 pt-8 dark:border-white/10">
              <div>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                  10+
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Projects Delivered
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                  5+
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
