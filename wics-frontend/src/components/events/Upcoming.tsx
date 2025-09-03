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
                    title="Spin & Win Info Booth"
                    date="September 3rd, 2025"
                    time="12:00 - 2:00 PM"
                    location="Lambton Tower Patio"
                    description="Learn more about our club and events! Spin our prize wheel to get cute merch!"
                    className=""
                />
                <Event
                    icon={faCircleInfo}
                    title="Tips & Tricks: Upper Year Q&A"
                    date="September 5th, 2025"
                    time="2:00 - 4:00 PM"
                    location="Erie Hall (Room TBD)"
                    description="Want a head start to help you plan your university career? Or maybe just some tips to help you transition into uni life? Come chat with the upper year WiCS!"
                    className=""
                />
                <Event
                    icon={faCookieBite}
                    title="Bits & Bytes: Bake Sale"
                    date="September 9th, 2025"
                    time="12:00 - 2:00 PM"
                    location="CAW"
                    description="Support our club and fund future events by getting yourself a little treat! Our talented team also made some cute crochet items!"
                    className=""
                />
                <Event
                    icon={faCookieBite}
                    title="Mingle & Munch: Welcome Party"
                    date="September 9th, 2025"
                    time="5:30 - 7:30 PM"
                    location="Erie Hall (Room TBD)"
                    description="Celebrate the start of the year with us! Free snacks and drinks will be provided, just bring your awesome self and make some new friends!"
                    className=""
                />
            </div>
        </section>
    );
}

export default Upcoming;