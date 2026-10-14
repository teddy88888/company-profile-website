import { useState } from "react";
import industries from "../../data/industries";

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const currentIndustry = industries[activeIndustry];

  return (
    <section
      id="industries"
      className="bg-white px-6 py-20 font-display text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white md:px-10 lg:px-[140px] lg:py-20"
    >
      <div className="mx-auto flex max-w-[1160px] flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col   gap-[11px] ">
          <h2 className="text-[32px] font-bold leading-tight tracking-[-0.02em] text-gray-900 md:text-[40px] md:leading-[56px] dark:text-white">
            Built for Your Industry
          </h2>

          <p className="text-base font-medium leading-8 text-gray-500 md:text-lg dark:text-[#A4A7AE]">
            We’ve helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Industry List */}
          <div className="flex flex-col gap-6 lg:w-64 lg:shrink-0">
            {industries.map((industry, index) => {
              const isActive = index === activeIndustry;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setActiveIndustry(index)}
                  className="flex h-[34px] items-center gap-2 text-left font-sans"
                >
                  <span
                    className={`h-8 w-1 shrink-0 rounded-full transition-colors duration-300 ${
                      isActive
                        ? "bg-[#FF623E]"
                        : "bg-gray-300 dark:bg-[#535862]"
                    }`}
                  />

                  <span
                     className={`text-[20px] font-semibold leading-[34px] transition-colors duration-300 ${
                     isActive
                       ? 'text-gray-900 dark:text-[#FDFDFD]'
                       : 'text-gray-400 dark:text-[#535862]'
                      }`}
>
                     {industry.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Industry Details */}
          <div className="flex min-w-0 flex-1 flex-col gap-5 lg:w-[840px]">
            <p className="min-h-16 text-base font-medium leading-8 text-gray-700 md:text-lg dark:text-[#FDFDFD]">
              {currentIndustry.description}
            </p>

            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl md:h-[351px]">
              <img
                key={currentIndustry.image}
                src={currentIndustry.image}
                alt={`${currentIndustry.title} industry`}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
