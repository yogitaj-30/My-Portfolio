import React from 'react'

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-indigo-50 px-6"
        >
            <div className="max-w-4xl items-center gap-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
                    About Me
                </h1>

                <div className="text-center md:text-left">
                    <div className="flex justify-center mb-4">
                        <img
                            src="/profile.jpeg"
                            alt="Yogita Joshi"
                            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg border-4 border-white"
                        />
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                        I’m an aspiring{" "}
                        <span className="font-semibold text-indigo-600">
                            Full-Stack Web Developer
                        </span>{" "}
                        with hands-on experience in building real-world projects and strong
                        problem-solving skills in{" "}
                        <span className="font-semibold">Data Structures & Algorithms</span>.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        I hold a <span className="font-semibold">B.Sc. degree in Computer Science </span>
                        and I’m passionate about coding, learning new technologies, and
                        creating impactful digital experiences. My goal is to grow
                        professionally while contributing to exciting projects and
                        collaborating with like-minded individuals.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About