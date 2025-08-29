import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-indigo-400 text-white z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <a href="#" className="text-2xl font-bold">
                    Yogita Joshi
                </a>

                <ul className="hidden md:flex gap-8 text-lg font-medium">
                    <li><a href="#" className="hover:text-yellow-300">Home</a></li>
                    <li><a href="#about" className="hover:text-yellow-300">About Me</a></li>
                    <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
                    <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
                    <li><a href="#github" className="hover:text-yellow-300">GitHub</a></li>
                    <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
                </ul>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isOpen && (
                <ul className="md:hidden flex flex-col items-center bg-white/20 rounded-md backdrop-blur-md py-6 gap-6 text-lg font-medium fixed top-16 left-0 w-full shadow-lg">
                    <li><a href="#about" className="font-bold text-xl text-gray-700" onClick={() => setIsOpen(false)}>About Me</a></li>
                    <li><a href="#skills" className="font-bold text-xl text-gray-700" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" className="font-bold text-xl text-gray-700" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#github" className="font-bold text-xl text-gray-700" onClick={() => setIsOpen(false)}>GitHub</a></li>
                    <li><a href="#contact" className="font-bold text-xl text-gray-700" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
