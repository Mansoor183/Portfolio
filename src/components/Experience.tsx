
const Experience = () => {

    interface Experience {
        title: string,
        company: string,
        period: string,
        description: string,
        responsibilities: string[]
    }

    const experiences: Experience[] = [
        {
            title: 'Software Developer',
            company: 'Deloitte',
            period: 'Dec 2025 - Present',
            description: 'At Deloitte, I work on a multi-tenant SaaS platform serving 1,000-2,000 users, focusing on security hardening and building async data pipelines on AWS. My work spans VAPT remediation, event-driven backend architecture, and release management tooling,',
            responsibilities: [
                'Resolved 10 VAPT audit findings on a 1,000–2,000 user multi-tenant SaaS platform, implementing rate limiting, security headers, hardened password policy, idle session timeout, and single-session enforcement to eliminate concurrent session vulnerabilities.',
                'Engineered an async Video-to-SOP pipeline on AWS, where ECS extracts frames from short-form videos and publishes to SQS, Lambda consumes each frame and invokes an LLM for step descriptions, and structured docs are persisted to a NoSQL store with sequence integrity.',
                'Shipped a desktop app versioning system with version tracked in DB and surfaced in the webapp, where CI/CD auto-extracts version on merge, syncs to S3 and Secrets Manager, and triggers an in-app installer prompt on mismatch.',
            ]
        },
        {
            title: 'Software Development Engineer - I',
            company: 'Nanoheal',
            period: 'Apr 2024 - Dec 2025',
            description: 'At Nanoheal, I worked on building scalable backend services and optimizing cross-platform desktop applications. I contributed to key modules like License & Activation and IGM for ONDC, and led a complete desktop client revamp serving 40K+ devices.',
            responsibilities: [
                'Built License & Activation module using Spring Boot and MySQL on AWS EC2, designing REST APIs for license validation, activation state tracking, and expiry enforcement, handling 50K+ requests/month.',
                'Rebuilt desktop client for 40K+ devices by migrating to Electron-React with Fluent UI, decoupling UI rendering from backend calls using async handlers, cutting load time by 80% and improving backend interaction by 30%.',
                'Developed IGM module for ONDC’s B2B platform using Node.js, TypeScript, and MongoDB, integrating Redis caching for frequently accessed grievance records, improving API response time by 40%.',
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'OpenText',
            period: 'Jun 2022 - Dec 2022',
            description: 'At OpenText, I worked on strengthening authentication and authorization in a Spring Boot application, tracing and fixing a critical access control bypass, and improving test coverage for security-critical login flows.',
            responsibilities: [
                'Fixed a critical authentication bypass in a Spring Boot app where failed admin logins were incorrectly granted access, tracing root cause to a missing credential validation check and enforcing strict password verification before role assignment.',
                'Wrote and manually validated unit test cases for authentication and authorization flows, improving coverage of edge cases including invalid credentials, role boundary checks, and session expiry scenarios.',
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 bg-black/20">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Professional Experience
                </h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                                    <p className="text-xl text-gray-300">{exp.company}</p>
                                </div>
                                <span className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                            <ul className="space-y-2">
                                {exp.responsibilities.map((responsibility, i) => (
                                    <li key={i} className="text-gray-300 text-sm flex items-start">
                                        <span className="text-purple-400 mr-2 mt-1">•</span>
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;