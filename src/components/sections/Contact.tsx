import { useState } from "react";

const serviceOptions = [
  "Web Development",
  "Cloud Solutions",
  "Mobile App Development",
  "Software Development",
  "UI/UX Design",
  "Other",
];

function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Form submission can be connected to an API later.
    console.log({
      name: event.currentTarget.name,
      email: event.currentTarget.email,
      message: event.currentTarget.message,
      services: selectedServices,
    });
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 py-20 font-display transition-colors duration-300 dark:bg-black md:px-10 lg:px-[140px] lg:py-20"
    >
      <div className="mx-auto flex max-w-[720px] flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-[32px] font-bold leading-[44px] tracking-[-0.02em] text-gray-900 dark:text-[#FDFDFD] md:text-[40px] md:leading-[56px]">
            Ready to Start? Let’s Talk.
          </h2>

          <p className="text-base font-medium leading-8 text-gray-500 dark:text-[#A4A7AE] md:text-[18px]">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Input Fields */}
          <div className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-bold leading-7 text-gray-900 dark:text-[#FDFDFD]"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="box-border h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base font-medium leading-[30px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#FF623E] dark:border-[#252B37] dark:bg-black dark:text-[#FDFDFD] dark:placeholder:text-[#717680]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-bold leading-7 text-gray-900 dark:text-[#FDFDFD]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="box-border h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base font-medium leading-[30px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#FF623E] dark:border-[#252B37] dark:bg-black dark:text-[#FDFDFD] dark:placeholder:text-[#717680]"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-bold leading-7 text-gray-900 dark:text-[#FDFDFD]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                required
                className="box-border min-h-[134px] w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-2 text-base font-medium leading-[30px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#FF623E] dark:border-[#252B37] dark:bg-black dark:text-[#FDFDFD] dark:placeholder:text-[#717680]"
              />
            </div>
          </div>

          {/* Services */}
          <fieldset className="flex flex-col gap-4 border-0 p-0">
            <legend className="text-sm font-bold leading-7 mb-4 text-gray-900 dark:text-[#FDFDFD]">
              Services
            </legend>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {serviceOptions.map((service) => {
                const isSelected = selectedServices.includes(service);

                return (
                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleService(service)}
                      className="sr-only"
                    />

                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                        isSelected
                          ? "border-[#FF623E] bg-[#FF623E]"
                          : "border-gray-300 bg-transparent dark:border-[#252B37]"
                      }`}
                      aria-hidden="true"
                    >
                      {isSelected && (
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M5 10.5 8.5 14 15 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>

                    <span className="text-base font-medium leading-[30px] text-gray-700 dark:text-[#FDFDFD]">
                      {service}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Submit */}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#FF623E] px-2 text-base font-bold tracking-[-0.02em] text-white shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] transition-all duration-200 hover:bg-[#e95635] hover:scale-[1.01]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
