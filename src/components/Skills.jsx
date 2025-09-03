import React from 'react';
const Skills = () => {
    return (
        <section id="skills" className="min-h-screen bg-white px-6 py-12 relative z-0">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10">
                Technical Skills
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300  relative z-0 overflow-hidden">
                    <h2 className="text-2xl font-semibold mb-4">Front-End</h2>
                    <div className="grid grid-cols-2 gap-4 place-items-center mb-4">
                        <img src="./react_original_wordmark_logo_icon_146375.png" className="h-16" alt="react_logo" />
                        <img src="./HTML5_logo_and_wordmark.svg.png" className="h-16" alt="html_logo" />
                        <img src="./CSS3_logo_and_wordmark.svg" className="h-16" alt="css_logo" />
                        <img src="./javascript-logo-javascript-icon-transparent-free-png.webp" className="h-18" alt="javascript_logo" />
                        <img src="./tailwind-css-logo-png_seeklogo-434090.png" className="h-28" alt="tailwind_logo" />
                        <img src="./Redux.png" className="h-16" alt="redux_logo" />
                    </div>
                    <p className="text-gray-600">
                        My preferred technologies for building responsive and modern UIs.
                    </p>
                </div>

                <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300  relative z-0 overflow-hidden">
                    <h2 className="text-2xl font-semibold mb-4">Back-End</h2>
                    <div className="grid grid-cols-2 gap-4 place-items-center mb-4">
                        <img src="./download.png" className="h-10" alt="express_logo" />
                        <img src="./images.png" className="h-16" alt="node_logo" />
                        <img
                            src="./mongodb_original_wordmark_logo_icon_146425.png"
                            className="h-16"
                            alt="mongodb_logo"
                        />
                        <img src="./logo-vertical.png" className='h-20' alt="firebase_logo" />
                    </div>
                    <p className="text-gray-600">
                        Backend technologies I use for APIs, servers, and databases.
                    </p>
                </div>

                <div className="p-6 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300  relative z-0 overflow-hidden">
                    <h2 className="text-2xl font-semibold mb-4">Tools</h2>
                    <div className="grid grid-cols-2 gap-4 place-items-center mb-4">
                        <img src="./GitHub-Logo.png" className="h-14" alt="github_logo" />
                        <img src="./Postman_(software).png" className="h-10" alt="postman_logo" />
                        <div className="col-span-2 flex justify-center">
                            <img src="./images (1).png" className="h-16" alt="vscode_logo" />
                        </div>
                    </div>
                    <p className="text-gray-600">
                        My favorite tools for version control, testing, and development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
