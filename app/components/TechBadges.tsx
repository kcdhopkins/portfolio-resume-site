import { useMemo } from "react";
import Image from "next/image";
import technologies from "./verbiage/tech";
const TechBadges: React.FC = () => {

    const tech = useMemo(() => {
        return technologies.technologies.map(({ name, icon }, index) => {
            return (
                <div className="bg-white rounded-lg w-40 h-10 mr-2 flex justify-between mb-2" key={`badge-${index}`}>
                    <div className="text-black p-2">{name}</div>
                    <div className="text-white p-2"><Image src={icon} alt="Picture of the author" width={25} height={25} /></div>
                </div>
            )
        })
    }, [technologies])

    return (
        <div className="pt-6 flex flex-wrap justify-center">
            {tech}
        </div>)
}

export default TechBadges;