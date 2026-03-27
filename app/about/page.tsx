import WorkHistory from "../components/WorkHistory";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center p-30">
            <main className="">
                <div className="text-4xl pb-4 font-bold">ABOUT ME</div>
                <div className="pb-2 text-2xl font-bold">
                    Senior Frontend Engineer with over a decade of experience building scalable web applications and leading front-end development initiatives. Expertise in React, TypeScript, and modern JavaScript frameworks, with a strong background in developing Single Page Applications (SPAs) and integrating GraphQL and REST APIs. Proven ability to collaborate across cross-functional teams, mentor developers, and maintain high standards of code quality in large-scale production environments. Experienced working with cloud infrastructure in Google Cloud Platform (GCP), troubleshooting production systems, and delivering performant, maintainable applications that support business-critical platforms.
                </div>
                <div className="border-b-2 border-black pb-2"></div>
                <h1 className="text-4xl pt-4 pb-2 font-bold">Technical Summary</h1>

                <div className="text-2xl font-bold">
                    Frontend-focused engineer with extensive experience designing and developing modern web applications using React, TypeScript, and component-driven architectures. Skilled in building scalable front-end systems within monorepo environments, integrating Apollo GraphQL and REST APIs, and implementing robust testing strategies. Strong background working in Agile development environments with experience in Docker, Google Cloud Platform (GCP), and modern CI/CD workflows. Additional experience in full-stack development with Node.js, Java, and SQL-based systems, providing a well-rounded understanding of application architecture and end-to-end software development.
                </div>
                <div className="border-b-2 border-black pb-2"></div>
                <h1 className="text-4xl pt-4 pb-2 font-bold">Education</h1>
                <div className="text-2xl font-bold">
                    Bachelor of Science, Computer Science, 2012 - Tougaloo college, Tougaloo, MS 39174
                </div>
                <div className="border-b-2 border-black pb-2"></div>
                <WorkHistory />
            </main>
        </div>
    );
}
