import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const NavBar = () => {
    interface NavItem {
        label: string;
        href: string;
    }

    const navItems: NavItem[] = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact Us', href: '#contact' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const renderNavItems = (items: NavItem[]) => {
        return items.map((item, index) => (
            <li key={index} className='cursor-pointer relative group'>
                <a 
                    href={item.href} 
                    className='relative text-gray-700'
                    onClick={() => setIsOpen(false)}
                >
                    {item.label}
                    <span className='absolute top-6 left-0 w-0 h-0.5 bg-gray-700 rounded-lg transition-all duration-300 group-hover:w-full'></span>
                </a>
            </li>
        ));
    };


    return (
        <nav className='shadow-md rounded-b-lg duration-300 bg-white relative'>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                <div className='py-4 text-xl font-semibold text-gray-800'>
                    Hi, I'm Mansoor!
                </div>
                
                <ul className='hidden md:flex justify-center space-x-10 py-4 text-lg'>
                    {renderNavItems(navItems)}
                </ul>
                
                <div className='md:hidden flex items-center'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-gray-700 focus:outline-none p-2'
                    >
                        {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
                    </button>
                </div>
            </div>
            
            {isOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col items-center space-y-4 px-4 py-6 bg-white'>
                        {renderNavItems(navItems)}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;