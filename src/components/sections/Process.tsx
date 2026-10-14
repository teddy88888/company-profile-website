import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import type { ProcessStep } from "../../types";

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    description: "Understand Your Needs & Goals",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    description: "Craft UX That Converts",
  },
  {
    id: 4,
    title: "Development & Implementation",
    description: "Deliver With Speed & Precision",
  },
  {
    id: 5,
    title: "Testing & Optimization",
    description: "Ensure Quality at Every Step",
  },
  {
    id: 6,
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continuously",
  },
];

function Process() {
  const [openSteps, setOpenSteps] = useState<number[]>(
    processSteps.map((step) => step.id),
  );

  const toggleStep = (id: number) => {
    setOpenSteps((previous) =>
      previous.includes(id)
        ? previous.filter((stepId) => stepId !== id)
        : [...previous, id],
    );
  };

  return (
    <section
      id="process"
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
          title="Our Process"
          description="Clear steps. Smart execution. Results you can count on."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div
            className="
              absolute
              bottom-0
              left-6
              top-0
              w-px
              bg-gray-200
              dark:bg-white/10
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step) => {
              const isOpen = openSteps.includes(step.id);
              const isLeft = step.id % 2 !== 0;

              return (
                <div
                  key={step.id}
                  className="
                    relative
                    grid
                    grid-cols-[48px_1fr]
                    items-center
                    gap-5
                    md:grid-cols-[1fr_72px_1fr]
                    md:gap-0
                  "
                >
                  {/* Left card */}
                  <div
                    className={`
                      hidden
                      md:block
                      ${isLeft ? "md:col-start-1 md:pr-8" : ""}
                    `}
                  >
                    {isLeft && (
                      <ProcessCard
                        step={step}
                        isOpen={isOpen}
                        onToggle={toggleStep}
                      />
                    )}
                  </div>

                  {/* Number */}
                  <div
                    className="
                      relative
                      z-10
                      col-start-1
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-500
                      text-sm
                      font-semibold
                      text-white
                      md:col-start-2
                      md:h-10
                      md:w-10
                      md:justify-self-center
                    "
                  >
                    {step.id}
                  </div>

                  {/* Right / mobile card */}
                  <div
                    className="
                      col-start-2
                      md:col-start-3
                      md:pl-8
                    "
                  >
                    <div className="md:hidden">
                      <ProcessCard
                        step={step}
                        isOpen={isOpen}
                        onToggle={toggleStep}
                      />
                    </div>

                    {!isLeft && (
                      <div className="hidden md:block">
                        <ProcessCard
                          step={step}
                          isOpen={isOpen}
                          onToggle={toggleStep}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: ProcessStep;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

function ProcessCard({ step, isOpen, onToggle }: ProcessCardProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(step.id)}
      aria-expanded={isOpen}
      className="
        w-full
        rounded-xl
        border
        border-gray-200
        bg-gray-50
        p-5
        text-left
        transition-all
        duration-300
        hover:border-orange-500/50
        dark:border-white/10
        dark:bg-[#080b10]
        dark:hover:border-orange-500/50
      "
    >
      <div className="flex items-center justify-between gap-4">
        <h3
          className="
            text-sm
            font-semibold
            text-gray-900
            md:text-base
            dark:text-white
          "
        >
          {step.title}
        </h3>

        <span
          className={`
            shrink-0
            text-lg
            text-gray-500
            transition-transform
            duration-300
            dark:text-gray-400
            ${isOpen ? "rotate-0" : "rotate-180"}
          `}
        >
          ^
        </span>
      </div>

      {isOpen && (
        <p
          className="
            mt-3
            text-xs
            leading-6
            text-gray-500
            dark:text-gray-400
            md:text-sm
          "
        >
          {step.description}
        </p>
      )}
    </button>
  );
}

export default Process;
