// import React from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//     return (
//         <section
//             id="contact"
//             className="py-16 bg-indigo-400 text-center flex flex-row justify-around"
//         >
//             <div>
//                 <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//                     Connect With Me
//                 </h1>

//                 <div className="text-lg text-white mb-6">
//                     <p>📞 Contact Number: <span className="font-semibold">9368871655</span></p>
//                     <p>
//                         📩 Email:{" "}
//                         <a
//                             href="mailto:joshiyogita67@gmail.com"
//                             className="text-gray-200 hover:underline hover:text-yellow-300"
//                             target="_blank"
//                         >
//                             joshiyogita67@gmail.com
//                         </a>
//                     </p>
//                 </div>

//                 <div className="flex justify-center gap-8 mt-8">
//                     <a
//                         href="https://www.linkedin.com/in/yogita-joshi30/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white text-4xl hover:scale-110 transition-transform hover:text-amber-200"
//                     >
//                         <FaLinkedin />
//                     </a>
//                     <a
//                         href="https://github.com/yogitaj-30"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white text-4xl hover:scale-110 transition-transform hover:text-amber-200"
//                     >
//                         <FaGithub />
//                     </a>
//                     <a
//                         href="mailto:joshiyogita67@gmail.com"
//                         target="_blank"
//                         className="text-white text-4xl hover:scale-110 transition-transform hover:text-amber-200"
//                     >
//                         <FaEnvelope />
//                     </a>
//                 </div>
//             </div>

//             <div className="flex flex-col items-start justify-center">
//                 <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//                     Get In Touch
//                 </h1>

//                 <form className="flex flex-col text-lg text-white mb-6">
//                     <div className="">
//                         <input type="text" placeholder="First Name" className="bg-white rounded-xl p-2 m-2 text-black text-sm max-w-100 w-70" />
//                         <input type="text" placeholder="Last Name" className="bg-white rounded-xl p-2 m-2 text-black text-sm max-w-100 w-70" />
//                     </div>
//                     <div className="flex flex-row justify-center">
//                         <input type="email" placeholder="Email address" className="bg-white rounded-xl p-2 m-2 text-black text-sm max-w-100 w-70" />
//                         <input type="number" placeholder="Phone No." className="bg-white rounded-xl p-2 m-2 text-black text-sm max-w-100 w-70" />
//                     </div>
//                     <div>
//                         <textarea rows={4} placeholder="Message" className="bg-white rounded-xl p-2 m-2 text-black text-sm max-w-100 w-100" />
//                     </div>
//                     <button
//                         className="text-indigo-500 bg-gray-50 rounded-xl px-5 py-2 text-xl hover:scale-110 transition-transform
//                         hover:bg-indigo-300 hover:text-amber-200"
//                         onClick>
//                         Send
//                     </button>
//                 </form>
//             </div>

//         </section>
//     );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const [confirmation, setConfirmation] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8oi3fdi",   // from EmailJS
                "template_prg53b5",  // from EmailJS
                form.current,
                "r1azPmLPmfASnZ-bH"    // from EmailJS
            )
            .then((result) => {
                setConfirmation("Message sent successfully!")
                // alert("✅ Message sent successfully!");
                e.target.reset();
            })
            .catch((error) => {
                alert("❌ Failed to send, please try again.");
                console.log(error.text);
            })
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
