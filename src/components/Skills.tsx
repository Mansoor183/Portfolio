const Skills = () => {

    interface SkillCategories {
        [category: string]: {
            name: string;
            icon: string;
        }[];
    }

    const skillCategories: SkillCategories = {
        'Backend': [
            { name: 'Java', icon: 'skills_svg/Java-Dark.svg' },
            { name: 'Hibernate', icon: 'skills_svg/hibernate-dark.svg' },
            { name: 'Spring Boot', icon: 'skills_svg/Spring-Dark.svg' },
            { name: 'C++', icon: 'skills_svg/CPP.svg' },
            { name: 'C', icon: 'skills_svg/C.svg' },
            { name: 'Node.js', icon: 'skills_svg/NodeJS-Dark.svg' }
        ],
        'Frontend': [
            { name: 'React.js', icon: 'skills_svg/React-Dark.svg' },
            { name: 'JavaScript', icon: 'skills_svg/TypeScript.svg' },
            { name: 'TypeScript', icon: 'skills_svg/JavaScript.svg' },
            { name: 'Tailwind CSS', icon: 'skills_svg/TailwindCSS-Dark.svg' },
            { name: 'HTML5', icon: 'skills_svg/HTML.svg' },
            { name: 'CSS3', icon: 'skills_svg/CSS.svg' }
        ],
        'Database': [
            { name: 'MySQL', icon: 'skills_svg/MySQL-Dark.svg' },
            { name: 'PostgreSQL', icon: 'skills_svg/postgresql-dark.svg' },
            { name: 'Redis', icon: 'skills_svg/redis-dark.svg' },
            { name: 'MongoDB', icon: 'skills_svg/mongodb.svg' },
            { name: 'SQLite', icon: 'skills_svg/SQLite.svg' }
        ],
        'Tools & Others': [
            { name: 'Git', icon: 'skills_svg/Git.svg' },
            { name: 'GitLab', icon: 'skills_svg/GitLab-Dark.svg' },
            { name: 'GitHub', icon: 'skills_svg/Github-Dark.svg' },
            { name: 'AWS', icon: 'skills_svg/aws-dark.svg' },
            { name: 'Docker', icon: 'skills_svg/docker.svg' },
            { name: 'Kafka', icon: 'skills_svg/kafka.svg' },
            { name: 'CI/CD', icon: 'skills_svg/ci-cd.svg' }
        ]
    };

    return (
        <section id="skills" className="py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Skills & Technologies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/10">
                            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">{category}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center p-2 sm:p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:transform hover:scale-105">
                                        <img
                                            src={skill.icon}
                                            alt={`${skill.name} icon`}
                                            className='h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 flex-shrink-0'
                                        />
                                        <span className="text-xs sm:text-sm font-medium truncate">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;