export default function ContactContent() {
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="h2">Get in Touch</h2>

      <p className="text-(--color-text-secondary)">
        I’m open to freelance work, full-time opportunities, and interesting
        collaborations. If you have a project in mind or just want to connect,
        feel free to reach out.
      </p>

      <div className="pt-2">
        <a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-2 rounded-md bg-(--color-primary) px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          Say Hello
        </a>
      </div>
    </div>
  );
}