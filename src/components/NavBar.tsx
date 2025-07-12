import { useState } from 'react';
import { useScrollToSection } from './Hook/useScrollToSection';
import { BiMenu, BiX } from 'react-icons/bi';

const NavBar = () => {

    const { activeSection, scrollToSection } = useScrollToSection();
    const [isOpen, setIsOpen] = useState(false);

    const handleSectionClick = (section: string) => {
        scrollToSection(section);
        setIsOpen(false);
    };

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
                                className={`capitalize transition-colors hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : 'text-gray-300'}`}
                            >
                                {section === 'header' ? 'Home' : section}
                            </button>
                        ))}
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-purple-400 hover:text-purple-300 transition-all duration-200 ease-in-out transform hover:scale-110 active:scale-95 p-2 rounded-lg hover:bg-purple-500/10'
                        >
                            {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="py-4 space-y-2">
                        {['header', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => handleSectionClick(section)}
                                className={`block w-full text-left px-4 py-2 capitalize transition-colors hover:text-purple-400 hover:bg-white/5 rounded-lg ${activeSection === section ? 'text-purple-400 bg-white/5' : 'text-gray-300'}`}
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