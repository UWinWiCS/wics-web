export function Header() {
    return (
        <section className="h-[100vh] bg-[#FDEAF3] relative overflow-hidden">

            {/*shading components for the BG (Makes slightly pinker)*/}
            <div className="absolute bottom-0 right-0 w-[50%]">
                <img src="/src/assets/HeaderBRShading.png" alt="Right Shading"/>
            </div>
            <div className="absolute top-0 left-0 w-[50%]">
                <img src="/src/assets/HeaderTLShading.png" alt="Left Shading"/>
            </div>

            {/*University of Windsor text*/}
            <h1 className="font-madimi text-[4vw] text-center absolute top-[15%] left-1/2 -translate-x-1/2 text-[#FDA8C7] font-normal not-italic">UNIVERSITY OF WINDSOR</h1>

            {/*the main logo*/}
            <div className="w-[33%] relative top-[19%] left-[33%]">
                <img src="/src/assets/MainLogo.png" alt="Main Logo"/>
            </div>

            {/*text following logo*/}
            <h2 className="font-madimi text-[1.5vw] text-[#766A6E] absolute top-[82%] left-1/2 transform -translate-x-1/2 text-center">
                A student-run organization dedicated to fostering a supportive community <br/>
                for women in Computer Science at UWindsor
            </h2>

        </section>
    );
}
