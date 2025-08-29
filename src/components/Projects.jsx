import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-indigo-50 px-6 py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
                Projects
            </h1>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition">
                    <img
                        src="./Screenshot (1234).png"
                        alt="Resume Builder"
                        className="w-full h-48 object-cover shadow-md rounded-xl"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">Resume Builder</h2>
                        <p className="text-gray-600 mb-4">
                            Resume Builder is a user-friendly web app to create, customize, and download professional resumes with ready-to-use templates and tips.
                        </p>
                        <div className="flex justify-center items-center gap-4">
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
                        <div className="flex mt-2 gap-4">
                            <a
                                href="https://resume-builder-frontend-5yy4.onrender.com"
                                target="_blank"
                                className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition">
                                View Live
                            </a>
                            <a
                                href="https://github.com/yogitaj-30/Resume-Builder"
                                target="_blank"
                                className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition">
                    <img
                        src="./Screenshot (1232).png"
                        alt="online_pharmacy"
                        className="w-full h-48 object-cover shadow-md rounded-xl"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">Online Pharmacy</h2>
                        <p className="text-gray-600 mb-4">
                            Online Pharmacy is a responsive e-commerce platform for medicines and healthcare products, with advanced search, filter, and add to cart feature.
                        </p>
                        <div className='flex justify-center items-center gap-4'>
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
                        <div className="flex mt-2 gap-4">
                            <a
                                href="https://legendary-bienenstitch-f1cc83.netlify.app"
                                target="_blank"
                                className="bg-indigo-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-indigo-600 transition">
                                View Live
                            </a>
                            <a
                                href="https://github.com/yogitaj-30/Online-Pharmacy"
                                target="_blank"
                                className="bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 transition">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition">
                    <img
                        src="./Screenshot (1233).png"
                        alt="Resume Builder"
                        className="w-full h-48 object-cover shadow-md rounded-xl"
                    />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">Digital Time Capsule</h2>
                        <p className="text-gray-600 mb-4">
                            Digital Time Capsule is an app to save photos, messages, and videos as memories, locked and revealed at a future date
                        </p>
                        <div className='flex justify-center items-center gap-4'>
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
                        <div className="flex mt-4 gap-4">
                            <a
                                href="https://digitaltimecapsul.netlify.app"
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
            </div>

        </section >
    );
};

export default Projects;


// import React from 'react';

// const Projects = () => {
//     return (
//         <section id="projects" className="min-h-screen bg-indigo-50 px-6 py-16">
//             <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
//                 Projects
//             </h1>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 <div className="relative group overflow-hidden rounded-xl shadow-lg">
//                     <img src="./Screenshot (1234).png" alt="Resume Builder" className="w-full h-60 object-cover group-hover:scale-110 transition" />
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-4 transition">
//                         <h2 className="text-xl font-semibold mb-2">Resume Builder</h2>
//                         <div className="flex gap-3">
//                             <a href="#" className="bg-indigo-500 px-3 py-1 rounded">Live</a>
//                             <a href="#" className="bg-gray-800 px-3 py-1 rounded">GitHub</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section >
//     );
// };

// export default Projects;
