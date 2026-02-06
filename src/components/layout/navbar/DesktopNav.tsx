import { navLinks } from "./NavLinks";

export default function DesktopNav() {
    return (
        <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <a
                        href={link.href}
                        className="text-sm text-white/80 transition hover:text-white"
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}