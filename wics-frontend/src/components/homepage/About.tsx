import { Card } from "@/components/ui/Card";
import { faCoffee, faUsers, faCode } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (

        <section className="h-[75vh] bg-[#FDEAF3] relative overflow-hidden">

            <div className="text-center mt-3 font-madimi">
                <h1 className="text-[4vw] text-[#FDA8C7]">ABOUT WiCS</h1>
                <p className="text-[1.5vw] text-[#766A6E]">
                    Empowering women in Computer Science by fostering community,
                    mentorship, and growth opportunities.
                </p>
            </div>

            <div className="w-full h-full flex flex-col sm:flex-row items-center gap-x-16 justify-center top-12 absolute">
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