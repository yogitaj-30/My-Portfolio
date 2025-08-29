import React from 'react'

const Hero = () => {
    return (
        <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 text-white px-6 pt-20">
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Yogita Joshi</h1>

                <p className="text-lg md:text-xl mb-6">
                    👋 Hi, I'm <span className="font-semibold">Yogita Joshi</span>, an
                    aspiring <span className="text-yellow-300">Full-Stack Web Developer</span>.
                </p>

                <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-100">
                    Currently, I'm looking for an exciting opportunity where I can
                    contribute my skills, grow professionally, and collaborate with
                    like-minded individuals to build impactful technology.
                </p>

                <a
                    href="/Yogita_Joshi_Resume.pdf"
                    download
                    className="bg-white text-indigo-600 px-5 md:px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
                >
                    📄 Download Resume
                </a>
            </div>
        </section>
    )
}

export default Hero