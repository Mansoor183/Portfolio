import { useState, useEffect } from 'react';

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

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderNavItems = (items: NavItem[]) => {
        return items.map((item, index) => (
            <li key={index} className='cursor-pointer relative group'>
                <a href={item.href} className='relative text-gray-700'>
                    {item.label}
                    <span className='absolute top-6 left-0 w-0 h-0.5 bg-gray-700 rounded-lg rounded-b-lg transition-all duration-300 group-hover:w-full'></span>
                </a>
            </li>
        ));
    };

    const maxScroll = 200;
    const opacity = Math.min(scrollPosition / maxScroll, 1);
    const backgroundColor = `rgba(209, 213, 219, ${opacity})`;

    return (
        <nav style={{ backgroundColor }} className='shadow-md rounded-b-lg transition-colors duration-300'>
            <div className='container px-4'>
                <ul className='flex justify-center space-x-10 py-4 text-[17px]'>
                    {renderNavItems(navItems)}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;