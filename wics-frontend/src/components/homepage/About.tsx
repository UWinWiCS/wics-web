import { Card } from "@/components/ui/Card";
import { faCoffee, faUsers, faCode } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (

        <section id="about" className="py-10 scroll-mt-35 bg-gradient-to-b from-[#FFF3F8] to-[#ffedf4] relative overflow-hidden">

            {/*about us text*/}
            <div className="justify-center text-center mt-5 font-madimi">
                <h1 className="lg:text-[4vw] text-[10vw] flex justify-center text-[#FDA8C7]">ABOUT WiCS</h1>
                <p className="hidden sm:block lg:text-[1.5vw] mt-8 text-[#766A6E]">
                    Empowering women in Computer Science by fostering community,
                    mentorship, and growth opportunities.
                </p>
            </div>

            {/*cards*/}
            <div className="flex flex-wrap justify-center gap-10 items-stretch px-4 sm:px-10 mt-10">
            <Card
                    icon={faCoffee}
                    title="Friendly Community"
                    description="A safe space to discuss challenges, share successes, and grow!"
                    className=""
                />
                <Card
                    icon={faCode}
                    title="Technical Learning"
                    description="Workshops, study groups, and skill-building sessions!"
                    className=""
                />
                <Card
                    icon={faUsers}
                    title="Networking"
                    description="Networking opportunities with women in tech!"
                    className=""
                />
            </div>
        </section>

    );
}

export default About;