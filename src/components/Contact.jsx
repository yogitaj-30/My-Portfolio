import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const [status, setStatus] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_w4zanwc",
                "template_kpeqjus",
                form.current,
                "25DpuRBvvHlwTQAgu"
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    e.target.reset();
                    setTimeout(() => setStatus(""), 4000)
                },
                (error) => {
                    setStatus("Failed to send, please try again.");
                    setTimeout(() => setStatus(""), 4000)
                    console.error(error.text);
                }
            )
    };

    return (
        <section
            id="contact"
            className="py-16 bg-indigo-400 text-center flex flex-col lg:flex-row justify-around px-6"
        >
            {/* Left Side */}
            <div className="mb-10 lg:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Connect With Me
                </h1>

                <div className="text-lg text-white mb-6">
                    <p>
                        📞 Contact Number:{" "}
                        <span className="font-semibold">9368871655</span>
                    </p>
                    <p>
                        📩 Email:{" "}
                        <a
                            href="mailto:joshiyogita167@gmail.com"
                            className="text-gray-200 hover:underline hover:text-yellow-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            joshiyogita167@gmail.com
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
                        href="mailto:joshiyogita167@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-4xl hover:scale-110 transition-transform hover:text-amber-200"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Right Side (Form) */}
            <div className="flex flex-col items-center md:items-start justify-center w-full lg:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Get In Touch
                </h1>
                {status && (
                    <span className="mt-2 mb-4 text-white font-medium">{status}</span>
                )}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col text-lg text-white w-full"
                >
                    <div className="flex flex-col md:flex-row">
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required
                            className="bg-white rounded-xl p-2 m-2 text-black text-sm flex-1"
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            className="bg-white rounded-xl p-2 m-2 text-black text-sm flex-1"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required
                            className="bg-white rounded-xl p-2 m-2 text-black text-sm flex-1"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone No."
                            className="bg-white rounded-xl p-2 m-2 text-black text-sm flex-1"
                        />
                    </div>

                    <textarea
                        rows={4}
                        name="message"
                        placeholder="Message"
                        required
                        className="bg-white rounded-xl p-2 m-2 text-black text-sm "
                    />

                    <button
                        type="submit"
                        className="text-indigo-500 bg-gray-50 rounded-xl px-6 py-2 mt-4 ml-3 w-1/2 text-lg font-semibold hover:scale-105 transition-transform hover:bg-indigo-300 hover:text-amber-200"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
