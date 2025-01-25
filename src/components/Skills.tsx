import Header from "./Header";

const Skills = () => {

    interface Skill {
        name: string;
        img_name: string;
        alt: string;
    }

    const backend_skills: Skill[] = [
        { name: "Java", img_name: "skills_svg/Java-Dark.svg", alt: "Java" },
        { name: "C++", img_name: "skills_svg/CPP.svg", alt: "C++" },
        { name: "C", img_name: "skills_svg/C.svg", alt: "C" },
        { name: "Spring", img_name: "skills_svg/Spring-Dark.svg", alt: "Spring" },
        { name: "Node.js", img_name: "skills_svg/NodeJS-Dark.svg", alt: "Node.js" },
        { name: "MySQL", img_name: "skills_svg/MySQL-Dark.svg", alt: "MySQL" },
        { name: "SQLite", img_name: "skills_svg/SQLite.svg", alt: "SQLite" }
    ];

    const front_end: Skill[] = [
        { name: "JavaScript", img_name: "skills_svg/JavaScript.svg", alt: "JavaScript" },
        { name: "TypeScript", img_name: "skills_svg/TypeScript.svg", alt: "TypeScript" },
        { name: "React", img_name: "skills_svg/React-Dark.svg", alt: "React" },
        { name: "Tailwind", img_name: "skills_svg/TailwindCSS-Dark.svg", alt: "Tailwind" },
        { name: "HTML", img_name: "skills_svg/HTML.svg", alt: "HTML" },
        { name: "CSS", img_name: "skills_svg/CSS.svg", alt: "CSS" }
    ];

    const other_skills: Skill[] = [
        { name: "Git", img_name: "skills_svg/Git.svg", alt: "Git" },
        { name: "GitLab", img_name: "skills_svg/GitLab-Dark.svg", alt: "GitLab" },
        { name: "GitHub", img_name: "skills_svg/Github-Dark.svg", alt: "GitHub" },
        { name: "Firebase", img_name: "skills_svg/Firebase-Dark.svg", alt: "Firebase" },
        { name: "Postman", img_name: "skills_svg/Postman.svg", alt: "Postman" },
        { name: "VS Code", img_name: "skills_svg/VSCode-Dark.svg", alt: "VS Code" },
        { name: "Visual Studio", img_name: "skills_svg/VisualStudio-Dark.svg", alt: "Visual Studio" }
    ];

    const renderSkills = (skills: Skill[]) => {
        return skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center'>
                <img src={skill.img_name} alt={skill.alt} className='rounded-lg h-12 w-12' />
                <span className='mt-2 text-gray-700'>{skill.name}</span>
            </div>
        ));
    };

    return (
        <section id="skills" className='px-6 py-9'>
            {/* Title */}
            <Header header="Skills" />

            {/* Skills Container */}
            <div className='flex flex-col gap-8 max-w-4xl mx-auto'>

                {/* Backend Skills Box */}
                <div className='bg-gray-100 rounded-lg p-6 shadow-md'>
                    <div className='text-center'>
                        <div className="text-2xl relative inline-block text-center mb-12">
                            Back-End
                            <span className="absolute top-full left-0 h-0.5 bg-gradient-to-r from-gray-700 to-transparent rounded-lg w-full"></span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        {renderSkills(backend_skills)}
                    </div>
                </div>

                {/* Frontend Skills Box */}
                <div className='bg-gray-100 rounded-lg p-8 shadow-md'>
                    <div className='text-center'>
                        <div className="text-2xl relative inline-block text-center mb-12">
                            Front-End
                            <span className="absolute top-full left-0 h-0.5 bg-gradient-to-r from-gray-700 to-transparent rounded-lg w-full"></span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-6 justify-center'>
                        {renderSkills(front_end)}
                    </div>
                </div>

                {/* Other Technologies Box */}
                <div className='bg-gray-100 rounded-lg p-6 shadow-md'>
                    <div className='text-center'>
                        <div className="text-2xl relative inline-block text-center mb-12">
                            Other Technologies
                            <span className="absolute top-full left-0 h-0.5 bg-gradient-to-r from-gray-700 to-transparent rounded-lg w-full"></span>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        {renderSkills(other_skills)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;