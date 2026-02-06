import ProjectsGrid from "./ProjectsGrid";


export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-app space-y-10">
        <header className="max-w-2xl">
          <h2 className="h2">Projects</h2>
          <p className="text-(--color-text-secondary)">
            Selected work showcasing my approach to building scalable and
            maintainable web applications.
          </p>
        </header>

        <ProjectsGrid />
      </div>
    </section>
  );
}