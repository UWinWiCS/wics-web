import {faCoffee, faPaintbrush} from "@fortawesome/free-solid-svg-icons";
import {Event} from "@/components/events/Event.tsx";
import picnicImage from '../../assets/images/picnic.png';
import craftsNightImage from '../../assets/images/crafts_night.png';

function Events() {
    return (

        <section id="events" className="py-10 scroll-mt-20 bg-[#FFF3F8] relative overflow-hidden">
            {/*Events title*/}
            <div className="justify-center text-center mt-5 font-madimi">
                <h1 className="lg:text-[4vw] text-[10vw] flex justify-center text-[#FDA8C7]">Recent Events</h1>
            </div>

            {/*cards*/}
            <div className="flex flex-wrap justify-center gap-10 items-stretch w-full px-4 sm:px-0 mt-10">
                <Event
                    icon={faCoffee}
                    title="Summer Picnic"
                    date="August 2nd, 2025"
                    time="2:00 - 5:00 PM"
                    location="Reaume Park"
                    description="Join the WiCS club for some outdoor summer fun, including: free snacks + drinks, board games and activities, and mingle with club members!"
                    className=""
                    imgSrc={picnicImage.src}
                    imgAlt="Summer Picnic selfie"
                />
                <Event
                    icon={faPaintbrush}
                    title="Crafts Night"
                    date="April 4th, 2025"
                    time="5:30 - 8:30 PM"
                    location="Erie Hall 1115"
                    description="Join the WiCS club for some beginner friendly arts-n-crafts! Supplies will be available for crochet, origami, and colouring! Free snacks and drinks provided!"
                    className=""
                    imgSrc={craftsNightImage.src}
                    imgAlt="Crafts Night stock image"
                />
            </div>
        </section>
    );
}

export default Events;