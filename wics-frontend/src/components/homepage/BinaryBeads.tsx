import smallerLogo from '../../assets/smallerLogo.png';

function BinaryBeads() {

    return (
        <section id="binarybeads" className="py-12 bg-[#ffe2ef] scroll-mt-60 flex justify-center overflow-hidden">
            <div className="bg-[#FFF2F8] flex justify-center w-3/4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="flex justify-center mt-10 mb-10">
                    <a href="https://khan661.myweb.cs.uwindsor.ca/WiCS-Binary-Beads/root/" aria-label="Binary Bead Bracelet Builder">
                        <button className="px-6 py-3 bg-[#FDA8C7] hover:bg-[#f98db4] text-white font-semibold rounded-sm shadow-md transition duration-300">
                            Binary Bead Bracelet Builder
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default BinaryBeads;