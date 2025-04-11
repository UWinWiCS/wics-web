import About from "@/components/homepage/About.tsx";

function Navbar() {
    return (
        <div className="w-[100vw] h-[10%] fixed top-0 left-0 z-10">

            <div className="absolute top-[-50%] left-[-1%] w-[10%]">
                <img src="/src/assets/NavBarLogo.png" alt="Navbar Logo"/>
            </div>

            <h1 className="font-Marmalad text-[1.5vw] text-center absolute top-[15%] left-1/2 -translate-x-1/2 text-[#FDA8C7]">UNIVERSITY OF WINDSOR</h1>
        </div>
    );
}
export default Navbar;