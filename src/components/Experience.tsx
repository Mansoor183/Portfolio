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

    const experienceData: iExperience[] = [
        {
            image: 'company_images/nanoheal.jpg',
            companyName: 'Nanoheal',
            date: 'Apr 2024 - Present',
            designation: 'Software Engineer',
            short_desc: 'Engineered scalable front-end and back-end solutions, optimizing system performance, security, and data flow across React-Electron, Spring Boot, and Node.js ecosystems.',
            points: [
                'Migrated legacy front-end to React-Electron using Fluent UI and TypeScript, enhancing UI/UX and integrating IPC for seamless communication with the C-based back-end.',
                'Utilized WMI queries, CMD, and open-source APIs to collect and analyze network and system-level data for performance monitoring and diagnostics.',
                'Remastered back-end logic, reducing repeated server-side entries by 95% through flag-based validation and eliminating inconsistent data transfer.',
                'Reduced UI loading time by 80% by minimizing back-end calls, optimizing SQL queries, and efficiently rendering data in the React-TypeScript front-end.',
                'Developed and integrated ONDC platform APIs using Node.js/Express with TypeScript, enabling seamless data exchange, issue resolution, and compliance with ONDC standards for the seller app.',
                'Built a Spring Boot microservice for high-throughput transactions, optimizing persistence with JPA/Hibernate and enhancing performance via caching and async processing.'
            ]
        },
        {
            image: 'company_images/open_text.jpeg',
            companyName: 'OpenText',
            date: 'Jun 2022 - Dec 2022',
            designation: 'Software Engineer Intern',
            short_desc: 'Enhanced system security and authentication reliability by resolving critical issues in password decryption, JWT authorization, and session management using Spring Boot.',
            points: [
                'Fixed a critical security issue where password decryption and validation were not handled properly, enhancing authentication reliability using Spring Boot.',
                'Resolved an authorization bug involving JWT tokens, addressing improper handling of token expiration and inconsistent session management, improving system security.',
                'Collaborated on back-end modules and deployed hotfixes, ensuring operational continuity and system security.'
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