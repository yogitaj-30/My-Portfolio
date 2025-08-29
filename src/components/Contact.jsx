import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 bg-indigo-400 text-center"
        >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Contact
            </h1>

            <div className="text-lg text-white mb-6">
                <p>📞 Contact Number: <span className="font-semibold">9368871655</span></p>
                <p>
                    📩 Email:{" "}
                    <a
                        href="mailto:joshiyogita67@gmail.com"
                        className="text-gray-200 hover:underline hover:text-yellow-300"
                        target="_blank"
                    >
                        joshiyogita67@gmail.com
                    </a>
                </p>
            </div>

            <div className="flex justify-center gap-8 mt-8">
                <a
                    href="https://www.linkedin.com/in/yogita-joshi30/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-4xl hover:scale-110 transition-transform hover:text-amber-200"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/yogitaj-30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-4xl hover:scale-110 transition-transform hover:text-amber-200"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:joshiyogita67@gmail.com"
                    target="_blank"
                    className="text-white text-4xl hover:scale-110 transition-transform hover:text-amber-200"
                >
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
};

export default Contact;
