import HeroActions from "./HeroActions";
import HeroMeta from "./HeroMeta";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center">
            <div className="mx-auto max-w-7xl px-4">
                <div className="max-w-3xl space-y-6">
                    <p className="text-sm uppercase tracking-widest text-primary">
                        Web Developer
                    </p>

                    <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                        I build modern, scalable web experiences.
                    </h1>

                    <p className="text-lg text-white/70">
                        Frontend-focused developer specializing in Next.js, performance,
                        and clean UI systems.
                    </p>

                    <HeroActions />
                    <HeroMeta />
                </div>
            </div>
        </section>
    )
}