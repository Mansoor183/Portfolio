
const Header = () => {
    return (
        <section id="header" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold">
                        ME
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                        Mansoor Elahi
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                        Full Stack Developer & UI/UX Designer
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Full-stack developer skilled in Spring Boot, Java, Node.js, React, and TypeScript. Built scalable backends and responsive UIs for production apps using MySQL, MongoDB, Redis, Docker, and AWS. Solved 400+ LeetCode problems and DSA certified, bringing strong problem-solving skills. Created side projects like a URL shortener and Firebase-based movie app.
                    </p>
                </div>
                <div className="flex justify-center space-x-6">
                    <button
                        //   onClick={() => scrollToSection('projects')}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                        View My Work
                    </button>
                    <button
                        //   onClick={() => scrollToSection('contact')}
                        className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header
