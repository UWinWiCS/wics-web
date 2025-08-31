import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-10 px-8 py-4 transition-colors duration-500 ${
                scrolled ? "bg-[#fed7e8]/80 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex items-center justify-between relative">

                {/* Logo */}
                <div className="flex items-center scale-300">
                    <img
                        src="/src/assets/NavBarLogo.png"
                        alt="Navbar Logo"
                        className="h-12 w-auto"
                    />
                </div>

                {/* Hamburger */}
                <div className="md:hidden text-[#766A6E]">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-8 font-marmelad text-[#766A6E] font-medium text-[1.375rem] items-center">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#mission">Mission</a>
                    <a href="/events">Events</a>
                    <a href="/store">Store</a>
                    <a
                        href="#discord"
                        className="bg-[#FDA8C7] text-white px-5 py-1 rounded-xl hover:bg-[#f28db4] transition"
                    >
                        Discord
                    </a>
                </div>
                {/* Mobile dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full flex flex-col items-center bg-white/80 backdrop-blur-md py-4 md:hidden font-marmelad text-[#766A6E] font-medium text-[1.375rem] space-y-4 z-20 rounded-lg">
                        <a href="/" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="/about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="/mission" onClick={() => setIsOpen(false)}>Mission</a>
                        <a href="/events" onClick={() => setIsOpen(false)}>Events</a>
                        <a href="/store" onClick={() => setIsOpen(false)}>Store</a>
                        <a
                            href="#discord"
                            className="bg-[#FDA8C7] text-white px-5 py-1 rounded-xl hover:bg-[#f28db4] transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Discord
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
