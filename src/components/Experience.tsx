
const Experience = () => {

    interface Experience {
        title: string,
        company: string,
        period: string,
        description: string,
        responsibilities: string[]
    }

    const experiences : Experience[] = [
        {
            title: 'Software Engineer',
            company: 'Nanoheal',
            period: 'Apr 2024 - Present',
            description: 'Full-stack developer with experience building scalable backend systems and performant desktop apps. Delivered high-traffic modules using Spring Boot, Node.js, and MongoDB, optimized Electron-React UIs for 40K+ devices, secured APIs with public key pinning, and implemented CI/CD with GitHub Actions. Proven impact includes 80% faster UI loads, 40% faster APIs, and elimination of major DB inefficiencies.',
            responsibilities: [
                'Built License & Activation module with Spring Boot and MySQL on AWS EC2, serving 50K+ license requests/month.',
                'Rebuilt desktop client for 40K+ devices using Electron-React and Fluent UI, reducing UI load time by 80% and improving backend interaction by 30%.',
                'Fixed data duplication bug by refactoring backend logic and DB schema, eliminating 20x redundant writes.',
                'Implemented public key pinning with automated rotation to secure communications and prevent MITM attacks.',
                'Developed IGM module for ONDC’s B2B platform using Node.js, TypeScript, and MongoDB with Redis caching, improving API response time by 40%.',
                'Set up CI/CD pipelines using GitHub Actions for automated build, test, and deployment workflows.',
            ]
        },
        {
            title: 'Software Engineer Intern',
            company: 'OpenText',
            period: 'Jun 2023 - Dec 2023',
            description: 'Remediated critical security vulnerabilities across Spring Boot authentication systems, implementing enhanced encryption protocols and JWT optimization that reduced unauthorized access by 95% while maintaining 99.9% system uptime for 10,000+ user accounts.',
            responsibilities: [
                'Fixed a critical password encryption vulnerability in Spring Boot, securing 10,000+ user accounts with enhanced validation.',
                'Optimized token expiration handling in JWT tokens, reducing unauthorized access attempts by 95%.',
                'Deployed several critical hotfixes for back-end modules, ensuring 99.9% system uptime and improving security.'
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