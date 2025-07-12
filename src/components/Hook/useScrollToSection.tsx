import { useState, useEffect } from 'react';

type SectionId = string;

interface UseScrollToSectionReturn {
    activeSection: SectionId;
    scrollToSection: (sectionId: SectionId) => void;
}

export const useScrollToSection = (
    sections: SectionId[] = ['header', 'skills', 'experience', 'projects', 'contact']): UseScrollToSectionReturn => {
    const [activeSection, setActiveSection] = useState('header');

    const scrollToSection = (sectionId: SectionId): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

    return { activeSection, scrollToSection };
};