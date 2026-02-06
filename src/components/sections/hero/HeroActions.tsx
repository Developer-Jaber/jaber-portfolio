export default function HeroActions() {
    return (
        <div className="flex flex-wrap gap-4 pt-4">
            <a
                href="#projects"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
                View Projects
            </a>

            <a
                href="#contact"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
                Contact Me
            </a>
        </div>
    )
}