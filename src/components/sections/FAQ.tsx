import { useState } from "react";
import faq from "../../data/faq";

function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-white px-6 py-20 font-display transition-colors duration-300 dark:bg-black md:px-10 lg:px-[120px] lg:py-20"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[331px] text-[32px] font-bold leading-[44px] tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] md:text-[40px] md:leading-[56px]">
            Need Help? Start Here.
          </h2>

          <p className="max-w-[245px] text-base font-medium leading-8 text-gray-500 dark:text-[#A4A7AE] md:text-right md:text-[18px]">
            Everything you need to know — all in one place.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 dark:bg-[#252B37]" />

        {/* Content */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[73px]">
          {/* FAQ List */}
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {faq.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="flex w-full items-center justify-between gap-8 py-1 text-left"
                    aria-expanded={isActive}
                  >
                    <span className="text-lg font-bold leading-9 text-gray-900 dark:text-[#FDFDFD] md:text-[24px]">
                      {item.question}
                    </span>

                    <span
                      className="relative flex h-6 w-6 shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="absolute h-0.5 w-5 bg-gray-900 dark:bg-[#FDFDFD]" />

                      {!isActive && (
                        <span className="absolute h-5 w-0.5 bg-gray-900 dark:bg-[#FDFDFD]" />
                      )}
                    </span>
                  </button>

                  {isActive && (
                    <div className="mt-4 pr-10">
                      <p className="text-base font-medium leading-7 text-gray-500 dark:text-[#A4A7AE] md:text-[20px] md:leading-[34px]">
                        {item.answer}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 h-px w-full bg-gray-200 dark:bg-[#252B37]" />
                </div>
              );
            })}
          </div>

          {/* Consultation Card */}
          <aside className="flex w-full flex-col gap-6 rounded-3xl bg-[#CC4E32] p-6 lg:w-[350px] h-[466px] lg:shrink-0">
            <div className="flex flex-col gap-1">
              <h3 className="text-[30px] font-bold leading-[44px] tracking-[-0.02em] text-white md:text-[36px]">
                Let’s talk it through
              </h3>

              <p className="text-base font-semibold leading-8 text-white md:text-[18px]">
                book a free consultation with our team. 
              </p>
            </div>

            <div className="h-[153px] w-full overflow-hidden rounded-2xl bg-orange-300">
              <img
                src=" /consultation.png"
                alt="Consultation"
                className="h-full w-full object-cover"
              />
            </div>

            <a
              href="#contact"
              className="flex h-12 w-full items-center justify-center rounded-full bg-white px-2 text-base font-bold tracking-[-0.02em] text-black shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] transition-transform duration-200 hover:scale-[1.02]"
            >
              Book a Consultation
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
