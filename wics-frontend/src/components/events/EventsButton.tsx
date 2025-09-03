import {faCoffee, faPaintbrush} from "@fortawesome/free-solid-svg-icons";
import {Event} from "@/components/events/Event.tsx";
import picnicImage from '../../assets/images/picnic.png';
import craftsNightImage from '../../assets/images/crafts_night.png';

function EventsButton() {
    return (
        <section id="eventsbutton" className="pb-10 bg-[#FFF3F8] relative overflow-hidden">
            <div className="flex justify-center">
                <a href="/events" aria-label="View all events">
                    <button className="px-6 py-3 bg-[#FDA8C7] hover:bg-[#f98db4] text-white font-semibold rounded-sm shadow-md transition duration-300">
                        View All Events
                    </button>
                </a>
            </div>
        </section>
    );
}

export default EventsButton;