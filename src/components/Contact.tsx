import { useState } from 'react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const api_key = import.meta.env.VITE_EMAIL_API_KEY;
        event.preventDefault();
        setIsLoading(true);
        setIsMessageSent(false);

        const formData = new FormData(event.currentTarget);
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
            setTimeout(() => {
                setIsMessageSent(false);
            }, 2000)
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-black/20">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                I'm always interested in new opportunities and exciting projects.
                                Whether you want to discuss a potential collaboration or just say hello,
                                I'd love to hear from you!
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                                <span>mansoorme2000@email.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                                <span>+91-84150-54874</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                                <span>Bengaluru, Karnataka, India</span>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://github.com/Mansoor183" target='_blank' className="rounded-lg hover:scale-110 transition ease-in-out duration-300">
                                <img src='/skills_svg/github-light.svg' className="w-11 h-11" />
                            </a>
                            <a href="https://linkedin.com/in/mansoor-elahi" target='_blank' className="rounded-lg hover:scale-110 transition ease-in-out duration-300">
                                <img src='/skills_svg/LinkedIn.svg' className="w-11 h-11" />
                            </a>
                            <a href="https://leetcode.com/Mansoor_Elahi" target='_blank' className="rounded-lg hover:scale-110 transition ease-in-out duration-300">
                                <img src='/skills_svg/leetcode-light.svg' className="w-11 h-11" />
                            </a>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                        {isMessageSent && (
                            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                                <p className="text-green-400 text-center">Message sent successfully!</p>
                            </div>
                        )}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id='messang'
                                    name='messang'
                                    rows={4}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled = {isLoading}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {(isLoading) ? "Sending..." : "Send Message" }
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center mt-16">
                    <a
                        href="https://drive.google.com/file/d/1aslYl47lg7AVcbOY-iyFjYR2-rc8Nsra/view?usp=sharing"
                        target='_blank'
                        className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;