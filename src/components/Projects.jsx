import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-gray-50 px-6 py-16">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">
                Projects
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="p-6 shadow-lg rounded-xl bg-white hover:scale-105 transition-transform duration-300 relative z-0 overflow-hidden">
                    <h2 className="text-2xl font-semibold mb-3">Resume Builder</h2>
                    <img
                        src="./Screenshot (1234).png"
                        alt="resume_builder"
                        className="w-full h-48 object-cover rounded-lg mb-4 border"
                    />
                    <div className='flex flex-row justify-center items-center gap-6 mb-4'>
                        <img
                            src="./mongodb_original_wordmark_logo_icon_146425.png"
                            alt="resume_builder"
                            className="h-10"
                        />
                        <img
                            src="./express-js-logo-png_seeklogo-339850.png"
                            alt="resume_builder"
                            className="h-14"
                        />
                        <img
                            src="./react_original_wordmark_logo_icon_146375.png"
                            alt="resume_builder"
                            className="h-10"
                        />
                        <img
                            src="./images.png"
                            alt="resume_builder"
                            className="h-10"
                        />
                    </div>
                    <p className="text-gray-600 mb-4">
                        Resume Builder is a user-friendly web app to create, customize, and download professional resumes with ready-to-use templates and tips.
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://resume-builder-frontend-5yy4.onrender.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition"
                        >
                            Live
                        </a>
                        <a
                            href="https://github.com/yogitaj-30/Resume-Builder"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="p-6 shadow-lg rounded-xl bg-white hover:scale-105 transition-transform duration-300 relative z-0 overflow-hidden">
                    <h2 className="text-2xl font-semibold mb-3">Online Pharmacy</h2>
                    <img
                        src="./Screenshot (1232).png"
                        alt="online_pharmacy"
                        className="w-full h-48 rounded-lg mb-4 border"
                    />
                    <p className="text-gray-600 mb-4">
                        Online Pharmacy is a responsive e-commerce platform for medicines and healthcare products, with advanced search, filter, and add to cart feature.
                    </p>
                    <div className="flex justify-center gap-6">
                        <a href="https://legendary-bienenstitch-f1cc83.netlify.app/" target="_blank" rel="noreferrer" className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition">Live</a>
                        <a href="https://github.com/yogitaj-30/Online-Pharmacy" target="_blank" rel="noreferrer" className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition">GitHub</a>
                    </div>
                </div>

                <div className="p-6 shadow-lg rounded-xl bg-white hover:scale-105 transition-transform duration-300 relative z-0 overflow-hidden">
                    <h2 className="text-2xl font-semibold mb-3">Digital Time Capsule</h2>
                    <img
                        src="./Screenshot (1233).png"
                        alt="digital_time_capsule"
                        className="w-full h-48 rounded-lg mb-4 border"
                    />
                    <p className="text-gray-600 mb-4">
                        Digital Time Capsule is an app to save photos, messages, and videos as memories, locked and revealed at a future date
                    </p>
                    <div className="flex justify-center gap-6">
                        <a href="https://digitaltimecapsul.netlify.app/" target="_blank" rel="noreferrer" className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition">Live</a>
                        <a href="https://github.com/yogitaj-30/Digital-Time-Capsule" target="_blank" rel="noreferrer" className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition">GitHub</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
