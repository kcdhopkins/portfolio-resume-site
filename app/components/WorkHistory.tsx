import { useMemo } from "react";
import workHistory from "./verbiage/verbiage";

type workHistory = {
    workHistory: WorkHistoryType[]
}

type WorkHistoryType = {
    company: string;
    title: string;
    dates: string;
    responsibilities: string[];
    current: boolean;
}

const WorkHistory: React.FC = () => {
    const history: workHistory = workHistory;
    const convertedHistoryToComponents = useMemo(() => {
        return history.workHistory.map(({ company, title, dates, responsibilities, current }, index) => {
            return (
                <div className="pb-4" key={`history-${index}`}>
                    <div className="">
                        <div className="flex justify-between">
                            <div className="text-2xl font-bold">{company}</div>
                            <div className="text-2xl font-bold">{dates}</div>
                        </div>
                        <div className="border"></div>
                    </div>

                    <div className="text-2xl font-bold">{title}</div>

                    <div className="pl-10">
                        <ul className="list-disc pl-5">
                            {responsibilities.map((resp, index) => <li className="text-2xl font-bold" key={`res-${index}`}>{resp}</li>)}
                        </ul>
                    </div>
                </div>
            )
        })
    }, [history])

    return (
        <div className="pt-4">
            <div className="text-4xl font-bold flex justify-center">Technical Experience</div>
            <div className="flex-row pt-4">
                {convertedHistoryToComponents}
            </div>
        </div>)
}

export default WorkHistory;