import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {

    interface Projects {
        title: string,
        image: string,
        description: string,
        technologies: string[],
        liveUrl: string,
        githubUrl: string
    }

    const projects: Projects[] = [
        {
            title: 'URL Shortener',
            image: 'project_images/url_shortener.webp',
            description: 'Engineered a high-capacity URL shortening service with 3.5T+ URL capacity, implementing Redis LRU caching for 90% query reduction, custom alias functionality, and containerized deployment architecture.',
            technologies: ['Spring Boot', 'Hibernate', 'Redis', 'Docker', 'Java', 'MySQL', 'Git'],
            liveUrl: '',
            githubUrl: 'https://github.com/Mansoor183/URL-Shortener'
        },
        {
            title: 'Movie App',
            image: 'project_images/movie_app.png',
            description: 'Engineered a high-performance React movie application with Tailwind CSS that reduced development time by 40% while integrating Firebase services capable of handling 100K+ operations per second.',
            technologies: ['React', 'React Router', 'Tailwind CSS', 'Firebase', 'TypeScript', 'Git'],
            liveUrl: 'https://netflix-clone-smoky-alpha-58.vercel.app/',
            githubUrl: 'https://github.com/Mansoor183/Netflix-Clone'
        },
        {
            title: 'To-Do List App',
            image: 'project_images/todo_app.png',
            description: 'Architected a scalable React To-Do application with Spring Boot backend that provides real-time synchronization for 100K+ tasks using MySQL and Spring Data JPA integration.',
            technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'Spring Data JPA', 'JavaScript', 'Git'],
            liveUrl: 'https://todo-list-app-new.vercel.app/',
            githubUrl: 'https://github.com/Mansoor183/Todo-App-WithBackend'
        },
        {
            title: 'Weather App',
            image: 'project_images/weather_app.png',
            description: 'Developed a weather app delivering hyperlocal forecasts, radar visualization, and personalized alerts for global locations in real-time.',
            technologies: ['React', 'Tailwind CSS', 'OpenWeatherMap API', 'Git'],
            liveUrl: 'https://weather-app-kohl-eight-78.vercel.app/',
            githubUrl: 'https://github.com/Mansoor183/Weather-App'
        },
    ];

    return (
        <section id="projects" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all hover:transform hover:scale-105">
                            <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                {/* <Code className="w-16 h-16 text-purple-400" /> */}
                                <img
                                    src={project.image}
                                    alt=""
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-3">
                                    {
                                        project.liveUrl &&
                                        <a
                                            href={project.liveUrl}
                                            target='_blank'
                                            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            Live Demo
                                        </a>
                                    }
                                    {
                                        project.githubUrl &&
                                        <a
                                            href={project.githubUrl}
                                            target='_blank'
                                            className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                                        >
                                            <Github className="w-4 h-4 mr-1" />
                                            Code
                                        </a>

                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;