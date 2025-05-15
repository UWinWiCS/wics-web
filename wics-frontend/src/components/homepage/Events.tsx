import {Card} from "@/components/ui/Card.tsx";
import {faCode, faCoffee, faPaintbrush} from "@fortawesome/free-solid-svg-icons";
import {Event} from "@/components/ui/Event.tsx";

function Events() {
    return (

        <section className="py-10 bg-[#FFF3F8] relative overflow-hidden">
            {/*Events title*/}
            <div className="justify-center text-center mt-5 font-madimi">
                <h1 className="lg:text-[4vw] text-[10vw] flex justify-center text-[#FDA8C7]">Recent Events</h1>
            </div>

            {/*cards*/}
            <div className="flex flex-wrap justify-center gap-10 items-stretch w-full px-4 sm:px-0 mt-10">
                <Event
                    icon={faPaintbrush}
                    title="Crafts Night"
                    date="April 4th, 2025"
                    time="5:30 - 8:30 PM"
                    location="Erie Hall 1115"
                    description="Join the WiCS club for some beginner friendly arts-n-crafts! Supplies will be available for crochet, origami, and colouring! Free snacks and drinks provided!"
                    className=""
                />
                <Event
                    icon={faCoffee}
                    title="Coming Soon..."
                    date=""
                    time=""
                    location=""
                    description="Join us for more fun events!"
                    className=""
                />
            </div>
        </section>
    );
}

export default Events;