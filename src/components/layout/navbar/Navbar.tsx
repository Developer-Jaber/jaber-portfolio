import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import '../../../styles/boarderAnimate.css'

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full backdrop-blur">
            <nav className="animated-navbar-border mx-auto flex h-16 max-w-7xl items-center justify-between px-4 bg-black/40">
                {/* Logo */}
                <Link href="/" className="text-2xl font-semibold tracking-tight">
                    Jaber's<span className="text-primary">.</span>
                </Link>

                {/* Desktop */}
                <DesktopNav />

                {/* Mobile */}
                <MobileNav />
            </nav>
        </header>
    )
}