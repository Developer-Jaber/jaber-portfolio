import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full backdrop-blur bg-black/40">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <a href="/" className="text-lg font-semibold tracking-tight">
                    Jaber's<span className="text-primary">.</span>
                </a>

                {/* Desktop */}
                <DesktopNav />

                {/* Mobile */}
                <MobileNav />
            </nav>
        </header>
    )
}