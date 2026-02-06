type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-(--color-border) bg-(--color-surface) p-6 space-y-4">
      <h3 className="text-lg font-semibold">{project.title}</h3>

      <p className="text-sm text-(--color-text-secondary)">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 text-xs">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white/5 px-3 py-1"
          >
            {item}
          </li>
        ))}
      </ul>

      <a
        href={project.link}
        className="inline-block text-sm text-primary hover:underline"
      >
        View project →
      </a>
    </article>
  );
}