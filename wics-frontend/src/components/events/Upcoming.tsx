import {faCoffee, faPaintbrush, faCircleInfo, faCookieBite} from "@fortawesome/free-solid-svg-icons";
import {Event} from "@/components/events/Event.tsx";

function Upcoming() {
    return (

        <section id="upcoming" className="py-10 scroll-mt-20 bg-[#FFF3F8] relative overflow-hidden">
            {/*Events title*/}
            <div className="justify-center text-center mt-5 font-madimi">
                <h1 className="lg:text-[4vw] text-[10vw] flex justify-center text-[#FDA8C7]">Upcoming Events</h1>
            </div>

            {/*cards*/}
            <div className="flex flex-wrap justify-center gap-10 items-stretch w-full px-4 sm:px-0 mt-10">
                <Event
                    icon={faCircleInfo}
                    title="More events coming soon!"
                    date="TBD"
                    time="TBD"
                    location="TBD"
                    description="We'll see you in the new year for more fun events!"
                    className=""
                />
            </div>
        </section>
    );
}

export default Upcoming;