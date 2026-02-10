"use client"

import { useState } from "react"
import { navLinks } from "./NavLinks";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                aria-label="Toggle menu"
                onClick={() => setOpen(!open)}
                className="text-white text-2xl"
            >
                ☰
            </button>

            {open && (
                <div className="absolute left-0 top-16 w-full bg-black/95">
                    <ul className="flex flex-col gap-6 px-6 py-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-lg text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li><button className="">Email Me</button></li>
                    </ul>
                </div>
            )}
        </div>
    )
}