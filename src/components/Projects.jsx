import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-gray-50 px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
                Projects
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                    <img
                        src="./Screenshot (1234).png"
                        alt="resume_builder"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className='flex flex-col space-y-4 text-left'>
                    <h2 className="text-2xl font-semibold">Resume Builder</h2>
                    <div className="flex gap-4 items-center">
                        <img
                            src="./mongodb_original_wordmark_logo_icon_146425.png"
                            className="h-10"
                            alt="mongodb"
                        />
                        <img
                            src="./express-js-logo-png_seeklogo-339850.png"
                            className="h-14"
                            alt="express"
                        />
                        <img
                            src="./react_original_wordmark_logo_icon_146375.png"
                            className="h-10"
                            alt="react"
                        />
                        <img
                            src="./images.png"
                            className="h-10"
                            alt="node"
                        />
                    </div>

                    <p className="text-gray-600 mb-4">
                        Resume Builder is a user-friendly web app to create, customize, and download professional resumes with ready-to-use templates and tips.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://resume-builder-frontend-5yy4.onrender.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition"
                        >
                            View Live
                        </a>
                        <a
                            href="https://github.com/yogitaj-30/Resume-Builder"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                    <img
                        src="./Screenshot (1232).png"
                        alt="online_pharmacy"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className='flex flex-col space-y-4 text-left'>
                    <h2 className="text-2xl font-semibold mb-3">Online Pharmacy</h2>
                    <div className='flex flex-row justify-center lg:justify-start gap-6 mb-4 flex-wrap'>
                        <img
                            src="./HTML5_logo_and_wordmark.svg.png"
                            className="h-10"
                            alt="mongodb"
                        />
                        <img
                            src="./CSS3_logo_and_wordmark.svg"
                            className="h-10"
                            alt="express"
                        />
                        <img
                            src="./javascript-logo-javascript-icon-transparent-free-png.webp"
                            className="h-11"
                            alt="react"
                        />
                        <img
                            src="./touchicon-180.png"
                            className="h-10"
                            alt="node"
                        />
                    </div>
                    <p className="text-gray-600 mb-4">
                        Online Pharmacy is a responsive e-commerce platform for medicines and healthcare products, with advanced search, filter, and add to cart feature.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://legendary-bienenstitch-f1cc83.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition">
                            View Live
                        </a>
                        <a
                            href="https://github.com/yogitaj-30/Online-Pharmacy"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition">
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                <div>
                    <img
                        src="./Screenshot (1233).png"
                        alt="digital_time_capsule"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className='flex flex-col space-y-4 text-left'>
                    <h2 className="text-2xl font-semibold mb-3">Digital Time Capsule</h2>
                    <div className='flex flex-row justify-center lg:justify-start gap-6 mb-4 flex-wrap'>
                        <img
                            src="./react_original_wordmark_logo_icon_146375.png"
                            className="h-10"
                            alt="react"
                        />
                        <img
                            src="./touchicon-180.png"
                            className="h-10"
                            alt="node"
                        />
                    </div>
                    <p className="text-gray-600 mb-4">
                        Digital Time Capsule is an app to save photos, messages, and videos as memories, locked and revealed at a future date
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://digitaltimecapsul.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition">
                            View Live
                        </a>
                        <a
                            href="https://github.com/yogitaj-30/Digital-Time-Capsule"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition">
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Projects;
