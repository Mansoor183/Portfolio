import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
    interface iData {
        name: string;
        about: string;
    }

    interface iLinkData {
        link: string;
        image: string;
        alt: string;
    }

    const data: iData = {
        name: "Mansoor Elahi",
        about: "Proficient in React.js, Spring Boot, and MySQL, with expertise in JWT-based authentication, RESTful APIs, and database optimization using Hibernate. Solved over 300 problems on LeetCode, showcasing strong analytical skills. Migrated legacy systems, improved app performance, and reduced load times. Delivered secure, high-performance applications with innovative solutions like shared memory mechanisms and precise server logging. Passionate about continuous learning and delivering impactful solutions.",
    };

    const linkData: iLinkData[] = [
        {
            link: "https://linkedin.com/in/mansoor-elahi-569059180",
            image: "skills_svg/LinkedIn.svg",
            alt: "LinkedIn",
        },
        {
            link: "https://github.com/Mansoor183",
            image: "skills_svg/Github-Dark.svg",
            alt: "GitHub",
        },
        {
            link: "https://leetcode.com/Mansoor_Elahi",
            image: "skills_svg/Leetcode.svg",
            alt: "LeetCode",
        },
        {
            link: "https://www.hackerrank.com/profile/mansoorme2000",
            image: "skills_svg/Hackerrank.svg",
            alt: "HackerRank",
        },
        {
            link: "https://www.geeksforgeeks.org/user/mansoorme2000",
            image: "skills_svg/Geeksforgeeks.svg",
            alt: "GeeksforGeeks",
        }
    ];

    const renderLinks = (links: iLinkData[]) => {
        return links.map((link, index) => (
            <div key={index} className="relative group inline-block">
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={link.image}
                        alt={link.alt}
                        className="h-10 w-10 object-contain transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_10px_rgb(200,200,200)] rounded-lg"
                    />
                </a>
                {/* Tooltip */}
                <span className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none md:left-auto md:right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
                    {link.alt}
                </span>
            </div>
        ));
    };


    return (
        <section id="about" className="space-y-9 p-6">
            <div className="flex flex-col md:flex-row justify-between gap-9">
                {/* Left Side: Text Portion */}
                <div className="space-y-6 md:w-2/3">
                    <div className="text-2xl">
                        <div>
                            I am{" "}
                            <span className="text-gray-700 font-semibold">
                                {data.name}
                            </span>
                        </div>
                        <div>
                            I am a{" "}
                            <TypeAnimation
                                sequence={[
                                    "Spring Boot Developer",
                                    1000,
                                    "Full Stack Developer",
                                    1000,
                                    "Back-End Developer",
                                    1000,
                                    "Front-End Developer",
                                    1000,
                                ]}
                                speed={50}
                                className="text-gray-700 font-semibold"
                                repeat={Infinity}
                                cursor={true}
                            />
                        </div>
                    </div>
                    <div className='rounded-lg p-6 shadow-md'>
                        <div className="text-2xl mb-3 relative inline-block text-gray-700">
                            About Me
                            <span className="absolute top-full left-0 h-0.5 bg-gradient-to-r from-gray-700 to-transparent rounded-lg w-full"></span>
                        </div>
                        <div className="italic text-gray-700">{data.about}</div>
                    </div>
                </div>

                {/* Right Side: Images Portion */}
                <div className="flex flex-row md:flex-col gap-3 md:gap-6 justify-center md:justify-start">
                    {renderLinks(linkData)}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;