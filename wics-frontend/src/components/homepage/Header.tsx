function Header() {
    return (
        <section className="py-1 bg-[#FDEAF3] relative overflow-hidden">

            {/*shading components for the BG (Makes slightly pinker)*/}
            <div className="absolute bottom-0 right-0 w-[50%]">
                <img src="/src/assets/HeaderBRShading.png" alt="Right Shading"/>
            </div>
            <div className="absolute top-0 left-0 w-[50%]">
                <img src="/src/assets/HeaderTLShading.png" alt="Left Shading"/>
            </div>

            {/*University of Windsor text*/}
            <h1 className="font-madimi sm:text-[4vw] text-[8vw] flex justify-center mt-20 text-[#FDA8C7]">UNIVERSITY OF WINDSOR</h1>

            {/*the main logo*/}
            <div className="mt-0 flex justify-center ">
                <img src="/src/assets/MainLogo.png" alt="Main Logo" className="w-80 sm:w-1/3"/>
            </div>

            {/*text following logo*/}
            <h2 className="font-madimi text-[4vw] sm:text-[1.5vw] pt-5 pb-10 text-[#FDA8C7] sm:text-[#766A6E] flex justify-center mb-5 mt-2 text-center">
                A student-run organization dedicated to fostering a supportive community <br/>
                for women in Computer Science at UWindsor
            </h2>

        </section>
    );
}
export default Header;
