import {Menu, X} from "lucide-react";

function Footer() {

   // return (
       // <footer className="bg-[#ffffff] h-[15vh] flex flex-col sm:flex-row justify-center gap-5 sm:gap-0">
       // </footer>
    //);

    // I started with the code from Navbar as a "base" to build the footer. - Nonika
    // Navbar.tsx also has the code for the collapsing links/hamburger menu.
    return (
        <footer className="bg-[#fed7e8]/80 h-[15vh] backdrop-blur-md w-full flex flex-col sm:flex-row justify-center gap-5 sm:gap-0}">
            <div className="mx-auto flex items-center justify-between relative">

                {/* Logo */}
                <div className="flex items-center scale-300">
                    <img
                        src="/src/assets/NavBarLogo.png"
                        alt="Navbar Logo"
                        className="h-12 w-auto"
                    />
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-8 font-marmelad text-[#766A6E] font-medium text-[1.375rem] items-center">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#highlights">Highlights</a>
                    <a href="#events">Events</a>
                    <a href="#store">Store</a>
                    <a
                        href="#discord"
                        className="bg-[#FDA8C7] text-white px-5 py-1 rounded-xl hover:bg-[#f28db4] transition"
                    >
                        Discord
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;