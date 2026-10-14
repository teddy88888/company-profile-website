import { useEffect, useRef, useState } from "react";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "zoom", logo: "/zoom.png" },
  { name: "postman", logo: "/postmant.png" },
  { name: "databricks", logo: "/databricks_.png" },
  { name: "airbnb", logo: "/airbnb_.png" },
  { name: "dropbox", logo: "/dropbox_.png" },
  { name: "paypal", logo: "/paypal_.png" },
  { name: "netflix", logo: "/netflix_.png" },
  { name: "adobe", logo: "/adobe_.png" },
  { name: "upwork", logo: "/upwork_.png" },
];

const extendedCompanies = [...companies, ...companies, ...companies];

function getVisibleCount(): number {
  if (window.innerWidth >= 1024) {
    return 5;
  }

  if (window.innerWidth >= 640) {
    return 3;
  }

  return 2;
}

function TrustedBy() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(companies.length);
  const [itemWidth, setItemWidth] = useState(0);
  const [animate, setAnimate] = useState(true);

  /*
   * Calculate the number of visible logos
   * and the width of each logo item.
   */
  useEffect(() => {
    const updateLayout = () => {
      const count = getVisibleCount();

      setVisibleCount(count);

      if (viewportRef.current) {
        setItemWidth(viewportRef.current.clientWidth / count);
      }
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  /*
   * Reset carousel position when responsive
   * visible count changes.
   */
  useEffect(() => {
    setAnimate(false);
    setCurrentIndex(companies.length);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimate(true);
      });
    });
  }, [visibleCount]);

  /*
   * Only the left-most and right-most visible
   * logos can move the carousel.
   */
  const handleLogoClick = (index: number) => {
    const visiblePosition = index - currentIndex;

    // Left-most logo → move carousel right
    if (visiblePosition === 0) {
      setCurrentIndex((previous) => previous - 1);
      return;
    }

    // Right-most logo → move carousel left
    if (visiblePosition === visibleCount - 1) {
      setCurrentIndex((previous) => previous + 1);
    }
  };

  /*
   * Create an infinite-loop effect by returning
   * to the middle copy after reaching an edge.
   */
  const handleTransitionEnd = () => {
    if (currentIndex <= 0 || currentIndex >= companies.length * 2) {
      setAnimate(false);
      setCurrentIndex(companies.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    }
  };

  return (
    <section
      className="
        border-y
        border-gray-200
        bg-white
        py-16
        transition-colors
        duration-300
        dark:border-white/10
        dark:bg-black
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-black
              dark:text-white
            "
          >
            Trusted by Global Innovators & Leading Brands
          </p>
        </div>

        {/* Carousel viewport */}
        <div ref={viewportRef} className="relative overflow-hidden">
          {/* Carousel track */}
          <div
            className={`
              flex
              ${animate ? "transition-transform duration-500 ease-out" : ""}
            `}
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCompanies.map((company, index) => {
              const visiblePosition = index - currentIndex;

              const isLeftEdge = visiblePosition === 0;

              const isRightEdge = visiblePosition === visibleCount - 1;

              const isEdge = isLeftEdge || isRightEdge;

              return (
                <div
                  key={`${company.name}-${index}`}
                  className="shrink-0"
                  style={{
                    width: `${itemWidth}px`,
                  }}
                >
                  <button
                    type="button"
                    disabled={!isEdge}
                    onClick={() => handleLogoClick(index)}
                    aria-label={
                      isLeftEdge
                        ? `Move carousel right from ${company.name}`
                        : isRightEdge
                          ? `Move carousel left from ${company.name}`
                          : company.name
                    }
                    className={`
                      flex
                      h-20
                      w-full
                      items-center
                      justify-center
                      px-6
                      text-lg
                      font-semibold
                      text-gray-400
                      transition-all
                      duration-300
                      dark:text-gray-600

                      /* Hover berlaku untuk SEMUA logo */
                      hover:scale-110
                      hover:text-white
                      dark:hover:text-white

                      /* Cursor berbeda berdasarkan fungsi */
                      ${isEdge ? "cursor-pointer" : "cursor-default"}
                    `}
                  >
                    <span
                      className="
                        transition-all
                        duration-300
                      "
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="
                    max-h-10
                    max-w-[140px]
                    object-contain
                    opacity-60
                    grayscale
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:opacity-100
                    hover:grayscale-0
                     "
                      />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
