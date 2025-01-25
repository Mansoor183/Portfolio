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
            short_desc: 'Upgraded legacy front-end to React-Electron, optimized performance, resolved data transfer issues, and implemented system-level monitoring.',
            points: [
                'Migrated legacy front-end code to React-Electron using Fluent UI, integrating IPC communication for seamless interaction with the C back-end.',
                'Optimized UI loading time by 80% by minimizing back-end calls and leveraging efficient SQL queries.',
                'Resolved a critical data transfer bug by redesigning the back-end flow with flag-based validation, reducing redundant database load by 95%.',
                'Implemented system-level data fetching using WMI classes and continuous monitoring via performance counters.'
            ]
        },
        {
            image: 'company_images/open_text.jpeg',
            companyName: 'OpenText',
            date: 'Jun 2022 - Dec 2022',
            designation: 'Software Engineer Intern',
            short_desc: 'Resolved critical security vulnerabilities, enhanced backend functionality with JSP and Tomcat, and deployed hotfixes for system reliability.',
            points: [
                'Fixed a critical security issue allowing logins with incorrect passwords, enhancing authentication reliability using Java.',
                'Developed and deployed robust backend features with JSP and Apache Tomcat, improving system functionality.',
                'Collaborated on backend modules and deployed hotfixes, ensuring operational continuity and system security.'
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
                    <div className='bg-gray-100 py-4 w-3/4 rounded-lg shadow-md flex hover:shadow-lg transition-shadow duration-300'>
                        {/* Image Section */}
                        <div className='w-1/4 flex items-center justify-center'>
                            <img src={data.image} className='h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-600'/>
                        </div>

                        {/* Content Section */}
                        <div className='w-3/4 flex flex-col justify-center gap-2 pr-4'>
                            <div className='text-xl font-semibold text-gray-800'>
                                {data.companyName}
                            </div>
                            <div className='text-gray-600 font-semibold'>
                                {data.designation}
                            </div>
                            <div className='text-gray-600'>
                                {data.date}
                            </div>
                            <div className='text-gray-600'>
                                {data.short_desc}
                            </div>
                            <div className='mt-3'>
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