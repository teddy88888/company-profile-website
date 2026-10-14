import SectionTitle from "../ui/SectionTitle";
import services from "../../data/services";

function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 transition-colors duration-300 dark:bg-black md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          title="Smart IT Solutions That Grow With You"
          description="Tailored tech to boost efficiency, security, and results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative mt-8 rounded-xl border border-gray-200 bg-gray-50 px-6 pb-6 pt-10 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 dark:border-white/10 dark:bg-[#080b10] dark:hover:border-orange-500/50"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-6 flex h-12 w-20 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-md dark:border-white/10 dark:bg-[#080b10]">
                <img
                  src={service.icon}
                  alt=""
                  className="h-60 w-60 object-contain"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white md:text-lg">
                {service.title}
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
