import SectionTitle from "../ui/SectionTitle";
import type { StatItem } from "../../types";

const results: StatItem[] = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "5+",
    label: "Years of Experience",
  },
  {
    value: "10+",
    label: "Industry Awards Won",
  },
  {
    value: "100%",
    label: "Client Satisfaction Rate",
  },
];

function Results() {
  return (
    <section
      id="results"
      className="
        bg-white
        py-20
        transition-colors
        duration-300
        dark:bg-black
        md:py-28
      "
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionTitle
          title="End-to-End IT Solutions That Drive Results"
          description="From strategy to execution, we deliver solutions that grow your business."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <div
              key={result.label}
              className="
                rounded-full
                border
                border-gray-200
                bg-gray-100 dark:bg-white/[0.09]
                p-1
                h-60
                mt-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-500/50
                dark:border-white/10
              "
            >
              <p
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-orange-500
                  md:text-5xl
                "
              >
                {result.value}
              </p>

              <p
                className="
                  mt-2
                  text-base
                  leading-7
                  text-center
                  font-semibold                  
                  text-gray-900
                  dark:text-gray-100
                "
              >
                {result.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
