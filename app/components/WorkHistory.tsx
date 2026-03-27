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
    const convertedHistoryToComponents = () => {

        const componentHistory = history.workHistory.map(({ company, title, dates, responsibilities, current }) => {

            return (
                <div className="pb-4">
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
                            {responsibilities.map((resp) => <li className="text-2xl font-bold">{resp}</li>)}
                        </ul>
                    </div>
                </div>
            )
        })
        return componentHistory;
    }
    return (
        <div className="pt-4">
            <div className="text-4xl font-bold flex justify-center">Technical Experience</div>
            <div className="flex-row pt-4">
                {convertedHistoryToComponents()}
            </div>
        </div>)
}

export default WorkHistory;