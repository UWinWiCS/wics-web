
function Mission() {

    return (
        <section className="py-12 bg-[#ffe2ef] flex justify-center overflow-hidden">
            <div className="bg-[#FFF2F8] flex justify-center w-3/4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="pr-5 sm:w-2/3 text-left">

                    <h2 className="text-5xl pt-5 pl-5 font-madimi text-[#FDA8C7] mb-4">Our Mission</h2>
                    <p className="text-[#CA91A4] text-lg pl-6 pt-6 pb-5">
                        At WiCS, we're on a mission to increase the representation and success of women
                        in computer science and technology. We believe in creating an inclusive environment
                        where everyone can thrive and develop their skills.
                        Through our events, workshops, and community initiatives, we aim to inspire,
                        educate, and empower the next generation of women in tech.
                    </p>
                </div>

                <div className="w-0 sm:w-1/3 flex justify-end">
                    <img src="/src/assets/smallerLogo.png" alt="Mission Image" className="w-83 pr-5 h-auto rounded-lg hidden sm:block" />
                </div>

            </div>
        </section>
    );
}
export default Mission;