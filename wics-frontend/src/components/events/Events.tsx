import {faCoffee, faPaintbrush, faCircleInfo, faCookieBite} from "@fortawesome/free-solid-svg-icons";
import {Event} from "@/components/events/Event.tsx";

const ALL_EVENTS = [
    {
        icon: faCookieBite,
        title: "Mingle & Munch: Welcome Party",
        date: "September 9th, 2025",
        time: "5:30 - 7:30 PM",
        location: "Erie Hall",
        description: "Celebrate the start of the year with us! Free snacks and drinks will be provided, just bring your awesome self and make some new friends!",
    },
    {
        icon: faCookieBite,
        title: "Bits & Bytes: Bake Sale",
        date: "September 9th, 2025",
        time: "12:00 - 2:00 PM",
        location: "CAW",
        description: "Support our club and fund future events by getting yourself a little treat! Our talented team also made some cute crochet items!",
    },
    {
        icon: faCircleInfo,
        title: "Tips & Tricks: Upper Year Q&A",
        date: "September 5th, 2025",
        time: "2:00 - 4:00 PM",
        location: "Erie Hall",
        description: "Want a head start to help you plan your university career? Or maybe just some tips to help you transition into uni life? Come chat with the upper year WiCS!",
    },
    {
        icon: faCircleInfo,
        title: "Spin & Win Info Booth",
        date: "September 3rd, 2025",
        time: "12:00 - 2:00 PM",
        location: "Lambton Tower Patio",
        description: "Learn more about our club and events! Spin our prize wheel to get cute merch!",
    },
    {
        icon: faCoffee,
        title: "Summer Picnic",
        date: "August 2nd, 2025",
        time: "2:00 - 5:00 PM",
        location: "Reaume Park",
        description: "Join the WiCS club for some outdoor summer fun, including: free snacks + drinks, board games and activities, and mingle with club members!",
        imgSrc: "/src/assets/images/picnic.png",
        imgAlt: "Summer Picnic selfie",
    },
    {
        icon: faPaintbrush,
        title: "Crafts Night",
        date: "April 4th, 2025",
        time: "5:30 - 8:30 PM",
        location: "Erie Hall 1115",
        description: "Join the WiCS club for some beginner friendly arts-n-crafts! Supplies will be available for crochet, origami, and colouring! Free snacks and drinks provided!",
        imgSrc: "/src/assets/images/crafts_night.png",
        imgAlt: "Crafts Night stock image",
    },
];

function Events({ showViewAllButton = false, limit }: { showViewAllButton?: boolean; limit?: number }) {
    const displayedEvents = limit ? ALL_EVENTS.slice(-limit) : ALL_EVENTS;
    // Note: assuming that we maintain chronological order and paste newest events at the top of the array...
    // To display the two oldest events: .slice(-limit)
    // To display the two newest events: .slice(0, limit)
    return (
        <section id="events" className="py-10 scroll-mt-20 bg-[#FFF3F8] relative overflow-hidden">
            {/*Events title*/}
            <div className="justify-center text-center mt-5 font-madimi">
                <h1 className="lg:text-[4vw] text-[10vw] flex justify-center text-[#FDA8C7]">Recent Events</h1>
            </div>

            {/*cards*/}
            <div className="flex flex-wrap justify-center gap-10 items-stretch w-full px-4 sm:px-0 mt-10">
                {displayedEvents.map((event, index) => (
                    <Event key={index} {...event} />
                ))}
            </div>

            {showViewAllButton && (
            <div className="flex justify-center mt-10">
                <a href="/events" aria-label="View all events">
                    <button className="px-6 py-3 bg-[#FDA8C7] hover:bg-[#f98db4] text-white font-semibold rounded-sm shadow-md transition duration-300">
                        View All Events
                    </button>
                </a>
            </div>)}
        </section>
    );
}

export default Events;