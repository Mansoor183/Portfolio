import { useState } from 'react';
import Header from './Header';

const Contact = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: any) => {
        const api_key = import.meta.env.VITE_EMAIL_API_KEY;
        event.preventDefault();
        setIsLoading(true);
        setIsMessageSent(false);

        const formData = new FormData(event.target);
        formData.append('access_key', api_key);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                console.log('Success', res);
                setIsMessageSent(true);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id='contact' className='px-6'>
            <Header header='Contact Me' />
            <div className=' text-center pb-9'>
                Email: mansoorme2000@gmail.com
            </div>
            <form onSubmit={onSubmit} className='bg-gray-100 rounded-lg shadow-md p-6 max-w-2xl mx-auto'>
                {/* Name Field */}
                <div className='mb-6'>
                    <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
                        placeholder='Enter your name'
                        required
                    />
                </div>

                {/* Email Field */}
                <div className='mb-6'>
                    <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
                        placeholder='Enter your email'
                        required
                    />
                </div>

                {/* Message Field */}
                <div className='mb-6'>
                    <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
                        rows={5}
                        placeholder='Enter your message'
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className='text-center'>
                    <button
                        type='submit'
                        disabled={isLoading} // Disable the button when loading
                        className='rounded bg-gray-200 py-1.5 px-5 text-gray-700 border border-gray-300 transition duration-300 hover:scale-110 hover:shadow-[0_0_10px_4px_rgb(200,200,200)]'
                    >
                        {isLoading ? (
                            <div className='flex items-center justify-center'>
                                <svg
                                    className='animate-spin h-5 w-5 text-gray-700'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                >
                                    <circle
                                        className='opacity-25'
                                        cx='12'
                                        cy='12'
                                        r='10'
                                        stroke='currentColor'
                                        strokeWidth='4'
                                    ></circle>
                                    <path
                                        className='opacity-75'
                                        fill='currentColor'
                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                    ></path>
                                </svg>
                            </div>
                        ) : (
                            'Submit Form'
                        )}
                    </button>
                </div>

                {/* Success Message */}
                {isMessageSent && (
                    <div className='mt-4 text-center text-green-600'>
                        Message was sent to my e-mail. Thank you.
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;