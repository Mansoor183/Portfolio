import { useScrollToSection } from './Hook/useScrollToSection';

const NavBar = () => {

    const {activeSection, scrollToSection} = useScrollToSection();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Hi, I'm Mansoor
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {['header', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize transition-colors hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : 'text-gray-300'
                                    }`}
                            >
                                {section === 'header' ? 'Home' : section}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;