import { useState } from 'react';
import Header from './Header';
import ExperiencePopup from './ExperiencePopup';

const Experience = () => {

    interface iExperience {
        image: string;
        companyName: string;
        date: string;
        designation: string;
        short_desc: string;
        points: string[]; // Array of points
    }


//  • 
//  • 
//  • 

    const experienceData: iExperience[] = [
        {
            image: 'company_images/nanoheal.jpg',
            companyName: 'Nanoheal',
            date: 'Apr 2024 - Present',
            designation: 'Software Engineer',
            short_desc: 'Full-stack developer with experience building scalable backend systems and performant desktop apps. Delivered high-traffic modules using Spring Boot, Node.js, and MongoDB, optimized Electron-React UIs for 40K+ devices, secured APIs with public key pinning, and implemented CI/CD with GitHub Actions. Proven impact includes 80% faster UI loads, 40% faster APIs, and elimination of major DB inefficiencies.',
            points: [
                'Built License & Activation module with Spring Boot and MySQL on AWS EC2, serving 50K+ license requests/month.',
                'Rebuilt desktop client for 40K+ devices using Electron-React and Fluent UI, reducing UI load time by 80% and improving backend interaction by 30%.',
                'Fixed data duplication bug by refactoring backend logic and DB schema, eliminating 20x redundant writes.',
                'Implemented public key pinning with automated rotation to secure communications and prevent MITM attacks.',
                'Developed IGM module for ONDC’s B2B platform using Node.js, TypeScript, and MongoDB with Redis caching, improving API response time by 40%.',
                'Set up CI/CD pipelines using GitHub Actions for automated build, test, and deployment workflows.',
            ]            
        },
        {
            image: 'company_images/open_text.jpeg',
            companyName: 'OpenText',
            date: 'Jun 2023 - Dec 2023',
            designation: 'Software Engineer Intern',
            short_desc: 'Remediated critical security vulnerabilities across Spring Boot authentication systems, implementing enhanced encryption protocols and JWT optimization that reduced unauthorized access by 95% while maintaining 99.9% system uptime for 10,000+ user accounts.',
            points: [
                'Fixed a critical password encryption vulnerability in Spring Boot, securing 10,000+ user accounts with enhanced validation.',
                'Optimized token expiration handling in JWT tokens, reducing unauthorized access attempts by 95%.',
                'Deployed several critical hotfixes for back-end modules, ensuring 99.9% system uptime and improving security.'
            ]            
        }
    ];

    const [selectedExperience, setSelectedExperience] = useState<iExperience | null>(null);

    const handleMoreInfoClick = (experience: iExperience) => {
        setSelectedExperience(experience);
    };

    const handleClosePopup = () => {
        setSelectedExperience(null);
    };

    return (
        <section id='experience' className='px-6 pt-9'>
            <Header header='Experience' />
            {experienceData.map((data, index) => (
                <div key={index} className='flex justify-center pb-6'>
                    <div className='bg-gray-100 py-4 w-full md:w-3/4 rounded-lg shadow-md flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300'>
                        {/* Image Section - On top for mobile, left side for larger screens */}
                        <div className='w-full md:w-1/4 flex items-center justify-center pb-4 md:pb-0'>
                            <img 
                                src={data.image} 
                                alt={`${data.companyName} logo`}
                                className='h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600'
                            />
                        </div>

                        {/* Content Section */}
                        <div className='w-full md:w-3/4 flex flex-col justify-center gap-2 px-4 md:pr-4 md:pl-0'>
                            <div className='text-xl font-semibold text-gray-800 text-center md:text-left'>
                                {data.companyName}
                            </div>
                            <div className='text-gray-600 font-semibold text-center md:text-left'>
                                {data.designation}
                            </div>
                            <div className='text-gray-600 font-semibold text-center md:text-left'>
                                {data.date}
                            </div>
                            <div className='text-gray-600 text-center md:text-left'>
                                {data.short_desc}
                            </div>
                            <div className='mt-3 flex justify-center md:justify-start'>
                                <button 
                                    onClick={() => handleMoreInfoClick(data)}
                                    className='rounded bg-gray-200 py-1.5 px-5 text-gray-700 border border-gray-300 transition duration-300 hover:scale-110 hover:shadow-[0_0_10px_4px_rgb(200,200,200)]'
                                >
                                    More Info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {selectedExperience && (
                <ExperiencePopup experience={selectedExperience} onClose={handleClosePopup} />
            )}
        </section>
    );
};

export default Experience;