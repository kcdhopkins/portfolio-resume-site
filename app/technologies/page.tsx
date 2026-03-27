import TechBadges from "../components/TechBadges";

export default function Home() {
    return (
        <div className="p-30">
            <div className="text-4xl font-bold flex justify-center pt-4">
                Technologies
            </div>
            <div className="flex flex-col gap-4 pt-4 text-2xl">
                As a full-stack Software Engineer, I specialize in building scalable web applications using modern technologies such as Next.js, React, Tailwind CSS, MongoDB, Postgress, Typescript and Node. I've also expanded my expertise into DevOps and cloud practices to create efficient, maintainable, robust web solutions.
            </div>
            <TechBadges />
        </div>
    );
}
