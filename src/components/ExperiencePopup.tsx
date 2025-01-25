import React from 'react';

interface ExperiencePopupProps {
    experience: {
        companyName: string;
        points: string[];
    };
    onClose: () => void;
}

const ExperiencePopup: React.FC<ExperiencePopupProps> = ({ experience, onClose }) => {
    return (
        <div className='fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50'>
            <div className=' bg-gray-300 p-6 rounded-lg shadow-lg w-2/3'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl text-gray-700 font-semibold'>{experience.companyName}</h2>
                </div>
                {/* Points Section */}
                <div className='space-y-4'>
                    {experience.points.map((point, index) => (
                        <React.Fragment key={index}>
                            <div className='text-gray-600'>
                                {point}
                            </div>
                            {index < experience.points.length - 1 && (
                                <hr className='border-t border-gray-400' />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Close Button */}
                <div className='mt-4'>
                    <button
                        onClick={onClose}
                        className='bg-gray-200 py-1.5 px-5 text-gray-700 border border-gray-300 rounded transition duration-300 hover:scale-110 hover:shadow-[0_0_10px_4px_rgb(200,200,200)]'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePopup;