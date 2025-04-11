import { Card } from "@/components/ui/Card";
import { faCoffee, faUsers, faCode } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (

        <section className="h-[75vh] bg-[#FFF3F8] relative overflow-hidden">

            {/*about us text*/}
            <div className="justify-center text-center mt-5 font-madimi">
                <h1 className="text-[4vw] flex justify-center text-[#FDA8C7]">ABOUT WiCS</h1>
                <p className="text-[1.5vw] mt-8 text-[#766A6E]">
                    Empowering women in Computer Science by fostering community,
                    mentorship, and growth opportunities.
                </p>
            </div>

            {/*cards*/}
            <div className="flex flex-wrap justify-center mt-10 items-stretch gap-10 h-80 mx-auto px-4">
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