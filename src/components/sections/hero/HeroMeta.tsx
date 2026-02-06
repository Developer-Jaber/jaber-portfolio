const stack = ["Next.js", "TypeScript", "Tailwind", "Node.js"];

export default function HeroMeta() {
    return (
        <div className="pt-6">
            <p className="mb-2 text-xs uppercase tracking-wide text-white/50">
                Tech Stack
            </p>

            <ul className="flex flex-wrap gap-3">
                {stack.map((tech) => (
                    <li
                        key={tech}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
    )
}