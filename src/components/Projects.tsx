import Header from './Header';

const Projects = () => {

    interface ProjectsInterface {
        project_name: string;
        project_tech: string;
        project_description: string;
        project_image: string;
        project_image_alt: string;
        project_live_demo: string;
        project_github: string;
    }

    const projectsData: ProjectsInterface[] = [
        {
            project_name: 'URL Shortener',
            project_tech: 'Spring Boot, Hibernate, Java, MySQL, Redis',
            project_description: 'A URL shortener that converts long links into concise, shareable URLs with seamless redirection.',
            project_image: 'project_images/url_shortener.webp',
            project_image_alt: 'URL Shortener Image',
            project_live_demo: '',
            project_github: 'https://github.com/Mansoor183/URL-Shortener',
        },
        {
            project_name: 'Movie App',
            project_tech: 'React, React Router, Tailwind CSS, Firebase, TypeScript',
            project_description: 'A responsive movie app with secure logins and personalized saved movie collections.',
            project_image: 'project_images/movie_app.png',
            project_image_alt: 'Movie App Image',
            project_live_demo: 'https://netflix-clone-smoky-alpha-58.vercel.app/',
            project_github: 'https://github.com/Mansoor183/Netflix-Clone',
        },
        {
            project_name: 'To-Do List App',
            project_tech: 'React, Tailwind CSS, Spring Boot, MySQL, Spring Data JPA, JavaScript',
            project_description: 'A task management application with real-time task synchronization and an intuitive interface.',
            project_image: 'project_images/todo_app.png',
            project_image_alt: 'Todo App Image',
            project_live_demo: 'https://todo-list-app-new.vercel.app/',
            project_github: 'https://github.com/Mansoor183/Todo-App-WithBackend',
        },
        {
            project_name: 'Weather App',
            project_tech: 'React, Tailwind CSS, OpenWeatherMap API',
            project_description: 'A weather forecasting app that provides real-time weather data for any location worldwide.',
            project_image: 'project_images/weather_app.png',
            project_image_alt: 'Weather App Image',
            project_live_demo: 'https://weather-app-kohl-eight-78.vercel.app/',
            project_github: 'https://github.com/Mansoor183/Weather-App'
        }
    ];

    return (
        <section id='projects' className='px-6'>
            <div className='text-center'>
                <Header header='Projects' />
            </div>
            <div className='space-y-6 max-w-4xl mx-auto'>
                {projectsData.map((data, index) => (
                    <div key={index} className='pb-6'>
                        <div className='w-full bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                                {/* Left Content */}
                                <div className='flex-1 space-y-4'>
                                    <div className='space-y-2'>
                                        <h2 className='text-2xl font-bold text-gray-800'>{data.project_name}</h2>
                                    </div>

                                    <div className='bg-gray-200 rounded-lg p-4'>
                                        <p className='text-gray-700 leading-relaxed'>
                                            {data.project_tech}
                                        </p>
                                        <p className='text-gray-700 leading-relaxed mt-2'>
                                            {data.project_description}
                                        </p>
                                    </div>

                                    <div className='flex gap-6'>
                                    {
                                        data.project_github &&
                                        <a href={data.project_github} target='_blank' className='cursor-pointer rounded bg-gray-200 py-1.5 px-5 text-gray-700 border border-gray-300 transition duration-300 hover:scale-110 hover:shadow-[0_0_10px_4px_rgb(200,200,200)]'>
                                            GitHub
                                        </a>
                                    }
                                    {
                                        data.project_live_demo &&
                                        <a href={data.project_live_demo} target='_blank' className='cursor-pointer rounded bg-gray-200 py-1.5 px-5 text-gray-700 border border-gray-300 transition duration-300 hover:scale-110 hover:shadow-[0_0_10px_4px_rgb(200,200,200)]'>
                                            Live Demo
                                        </a>
                                    }
                                    </div>
                                </div>

                                {/* Right Content - Mockup */}
                                <div className='flex-1'>
                                    <div className='bg-white rounded-lg p-4 shadow-sm'>
                                        <div className='h-40 flex items-center justify-center'>
                                            <img src={data.project_image} alt={data.project_image_alt} className='hover:scale-110 transition duration-300 rounded-lg cursor-pointer'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;