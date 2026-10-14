interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 max-w-4xl ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-orange-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-gray-400 md:text-base md:leading-7 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
