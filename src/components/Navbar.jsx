import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-end fixed top-0 w-full bg-gradient-to-r from-indigo-600 to-indigo-400 text-lg text-white p-4 z-50">
            <ul className="flex gap-6 justify-center">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar