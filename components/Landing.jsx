import { useState, useEffect } from 'react';
import hobbies from "./Hobbies"

export default function Landing() {
    let [hobbyIndex, setHobbyIndex] = useState(0);
    const carouselSpeed = 5000; // Time in ms before auto-switching image

    useEffect(() => {
        const interval = setInterval(() => {
            setHobbyIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
        }, carouselSpeed);

        return () => clearInterval(interval); // Cleanup to prevent multiple intervals
    }, []);
    
    return (
        <>
            <section id="landing" className="bg-primary-light">
                <div className="sm:flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="w-full sm:w-1/2 my-auto px-2 sm:px-6 sm:border-2 sm:border-primary-dark sm:rounded-2xl sm:shadow-xl">
                        <h1 className="text-3xl sm:text-7xl text-white text-center sm:text-left font-bold pt-4 sm:py-4">Hi, I'm Wallis.</h1>
                        <h2 className="text-xl sm:text-3xl text-primary-dark text-center sm:text-left font-bold py-2 sm:py-4">
                            I'm a full-stack web developer looking for junior-to-mid level roles throughout the UK.
                        </h2>
                        <h3 className="text-lg sm:text-2xl text-primary-dark text-center sm:text-left font-bold py-2 sm:py-4">
                            I was born in South Wales and graduated the University of Southampton with a Master's degree in Physics.
                        </h3>
                        <h3 className="text-lg sm:text-2xl text-primary-dark text-center sm:text-left font-bold py-2 sm:py-4">
                            I have a strong background in engineering within the sustainability sector however I have decided to pursue my passion instead.
                        </h3>
                        <h3 className="hidden lg:block text-2xl text-primary-dark text-left font-bold py-4">
                            My current programming stack includes React, Node, Express and PostgreSQL, but I am always open to new technologies.
                        </h3>
                        <div className="hidden lg:flex gap-4 py-4">
                            <a className="flex gap-4 text-2xl bg-primary-dark text-white hover:bg-primary rounded-md p-2" href="https://github.com/wallisCodes" target="_blank">
                                <span>Github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a className="flex gap-4 text-2xl bg-primary-dark text-white hover:bg-primary rounded-md p-2" href="https://www.linkedin.com/in/joshwallis/" target="_blank">
                                <span>LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" className="hover:fill-primary-light">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 py-4 sm:py-20">
                        <img className="rounded-full w-[90%] h-auto mx-auto sm:mr-0 mb-6 sm:my-8 shadow-2xl" src={hobbies[hobbyIndex].img} alt={hobbies[hobbyIndex].alt_text}/>
                        <div className="w-[90%] mx-auto sm:mr-0">
                            <h2 className="text-xl sm:text-3xl w-[90%] mx-auto text-primary-dark text-center font-bold py-1 sm:py-2">Outside of work you'll find me</h2>
                            <h2 className="text-3xl sm:text-5xl w-[90%] mx-auto text-white text-center font-bold py-1 sm:py-2">{`${hobbies[hobbyIndex].activity}.`}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}