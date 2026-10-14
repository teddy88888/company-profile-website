import { useState } from "react";
import testimonials from "../../data/testimonials";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      id="testimonials"
      className="bg-white py-20 font-display transition-colors duration-300 dark:bg-black md:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-16 px-6 text-center lg:px-8">
          <h2 className="text-[32px] font-bold leading-[42px] tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] md:text-[40px] md:leading-[56px]">
            What Partners Say About Working With Us
          </h2>

          <p className="mt-3 text-base font-medium leading-8 text-gray-500 dark:text-[#A4A7AE] md:text-[18px]">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative overflow-x-clip overflow-y-visible">
          <div
            className="flex items-start gap-5 transition-transform duration-500 ease-out"
            style={{
              transform:
                window.innerWidth >= 768
                  ? `translateX(calc(50% - 310px - ${activeIndex * 640}px))`
                  : `translateX(calc(50% - ${activeIndex * 0}px - 50vw + 24px))`,
            }}
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex w-[calc(100vw-48px)] max-w-[620px] shrink-0 flex-col items-center text-left outline-none"
                  aria-label={`View testimonial from ${testimonial.name}`}
                >
                  {/* Card */}
                  <article
                    className={`relative w-full rounded-2xl border px-8 pb-8 pt-16 transition-all duration-500 md:px-10 ${
                      isActive
                        ? "border-[#FF623E] bg-white opacity-100 shadow-[0_0_0_1px_rgba(255,98,62,0.15)] dark:bg-[#080b10]"
                        : "border-gray-200 bg-gray-50 opacity-50 hover:opacity-80 dark:border-white/10 dark:bg-[#080b10] dark:opacity-25 dark:hover:opacity-60"
                    }`}
                  >
                    {/* Quote */}
                    <img
                      src="/quote.png"
                      alt=""
                      aria-hidden="true"
                      className="absolute right-[-10] top-[-36px] z-10 h-[70px] w-auto -translate-x-0 object-contain"
                    />

                    {/* Rating */}
                    <div
                      className="flex justify-center gap-1 text-[#F5B942]"
                      aria-label={`${testimonial.rating ?? 5} out of 5 stars`}
                    >
                      {Array.from({
                        length: testimonial.rating ?? 5,
                      }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="text-xl"
                          aria-hidden="true"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Message */}
                    <p className="mx-auto mt-6 max-w-[520px] text-center text-base font-medium leading-8 text-gray-700 dark:text-[#FDFDFD] md:text-[18px]">
                      “{testimonial.message}”
                    </p>

                    {/* Name */}
                    <h3 className="mt-7 text-center text-base font-medium text-gray-900 dark:text-[#FDFDFD] md:text-[18px]">
                      {testimonial.name}
                    </h3>

                    {/* Position */}
                    <p className="mt-2 mb-4 text-center text-base font-medium text-[#FF623E] md:text-[18px]">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </article>

                  {/* Avatar */}
                  <div className="relative z-10 -mt-10 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-200 dark:border-black dark:bg-gray-700">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-16 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <span
              key={testimonial.id}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#FF623E]"
                  : "bg-gray-300 dark:bg-[#252B36]"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
