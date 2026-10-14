import SectionTitle from '../ui/SectionTitle';
import portfolio from '../../data/portfolio';

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white py-20 font-display transition-colors duration-300 dark:bg-black md:py-28"
    >
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <SectionTitle 
          title="From Vision to Launch! Projects We’re Proud Of"
          description="Take a closer look at our recent work powering startups, enterprises, and everything in beetwen."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article key={project.id}>
              <div                
                className="relative aspect-[16/10] overflow-hidden group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 dark:border-white/10 dark:bg-[#080b10] dark:hover:border-orange-500/50"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold text-orange-500">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-gray-900 transition-colors hover:text-orange-500 dark:text-white"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;