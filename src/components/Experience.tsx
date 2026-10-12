
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
            description: 'At Deloitte, I work on a SaaS platform, focusing on backend security hardening, AWS-based event-driven processing, and desktop application release management. My work spans VAPT remediation, authentication and session management, LLM-powered video-to-SOP pipelines, and application versioning and update workflows.',
            responsibilities: [
                'Remediated 10 VAPT findings in the Spring Boot backend by implementing per-user rate limiting, regex-based password validation, security headers, and CORS handling.',
                'Reconfigured Amazon Cognito JWT claims and token expiration; implemented configurable concurrent-session limits using custom middleware and AWS Secrets Manager.',
                'Developed and optimized an AWS Lambda consumer for SQS frame messages, generating LLM-based SOP steps and reducing per-message processing time from 15s to 5s under ideal conditions.',
                'Configured AWS infrastructure for the video-to-SOP pipeline, including ECS task definitions and ECR repositories; built video upload and SOP-viewing UI with S3 multipart uploads.',
                'Developed desktop application version-management APIs and UI, integrating AWS Secrets Manager for version configuration and S3 for installer storage and downloads.',
                'Implemented desktop update prompts and web-based downgrade warnings to handle application version changes.',
            ]
        },
        {
            title: 'Software Development Engineer I',
            company: 'Nanoheal',
            period: 'Apr 2024 - Dec 2025',
            description: 'Built and secured backend services and desktop client workflows for a large-scale device management platform, while improving performance, reliability, and deployment automation.',
            responsibilities: [
                'Built the License & Activation module using Spring Boot, MySQL, and AWS EC2, designing REST APIs for license validation, activation state, and expiry enforcement, serving 50K+ requests/month.',
                'Eliminated 20x redundant writes by refactoring backend logic and DB schema to fix a data duplication bug.',
                'Secured client-server traffic against MITM attacks with public key pinning and automated key rotation.',
                'Improved API response time by 40% in ONDC’s B2B IGM module using Node.js, TypeScript, MongoDB, and Redis caching for grievance records.',
                'Cut desktop client load time by 80% and improved backend interaction by 30% for 40K+ devices by rebuilding it in Electron-React with Fluent UI and async handlers.',
                'Automated build, test, and deployment workflows with GitHub Actions CI/CD pipelines.',
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'OpenText',
            period: 'Jun 2022 - Dec 2022',
            description: 'Worked on strengthening authentication and authorization in a Spring Boot application, fixing a critical access-control issue and improving security-focused test coverage.',
            responsibilities: [
                'Fixed a critical authentication bypass in a Spring Boot app where failed admin logins were incorrectly granted access by enforcing credential validation before role assignment.',
                'Wrote unit tests for authentication and authorization flows covering invalid credentials, role boundaries, and session expiry scenarios.',
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