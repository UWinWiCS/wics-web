function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-10 px-8 py-4">
            <div className="mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <img src="/src/assets/NavBarLogo.png" alt="Navbar Logo" className=" absolute -ml-10 h-43 w-auto" />
                </div>

                {/* Nav Links */}
                <div className="flex items-center space-x-8 font-marmelad text-[#766A6E] font-medium text-[1.375rem]">
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
        </nav>
    );
}

export default Navbar;
