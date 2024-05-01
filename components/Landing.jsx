import { useState } from 'react';

//TODO: import image data from an images.json file
const images = [
    {
        id: 1,
        src: "../src/assets/images/tennis.jpeg",
        alt_text: "tennis photo",
        activity: "playing tennis",
    },
    {
        id: 2,
        src: "../src/assets/images/hiking.jpg",
        alt_text: "hiking photo",
        activity: "hiking",
    },
    {
        id: 3,
        src: "../src/assets/images/sup-cropped.jpg",
        alt_text: "stand-up paddleboarding photo",
        activity: "paddleboarding",
    },
    {
        id: 4,
        src: "../src/assets/images/skiing-cropped.jpeg",
        alt_text: "skiing photo",
        activity: "skiing",
    }
]


export default function Landing() {
    let [imageIndex, setImageIndex] = useState(0);
    let resetIndex = imageIndex >= images.length - 1;
    const carouselSpeed = 5000; // Time in ms before auto-switching image
    var currentInterval;

    function nextImage() {
        !resetIndex ? setImageIndex(imageIndex + 1) : setImageIndex(0);
    }

    currentInterval = setInterval(() => {
        nextImage();
    }, carouselSpeed);
    
    return (
        <>
            <section id="landing" className="bg-primary-light">
                <div className="sm:flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="w-full sm:w-1/2 my-auto px-2 sm:px-6 sm:border sm:border-primary-dark sm:rounded-md sm:shadow-xl">
                        <h1 className="text-3xl sm:text-5xl text-white text-center sm:text-left font-bold py-4">Hi, I'm Wallis.</h1>
                        <h2 className="text-xl sm:text-2xl text-primary-dark text-center sm:text-left font-bold py-1 sm:py-2">
                            An engineer by trade, with a masters degree in Physics from the University of Southampton.
                        </h2>
                        <h2 className="text-xl sm:text-2xl text-primary-dark text-center sm:text-left font-bold py-1 sm:py-2">
                            I pride myself on being a keen learner, in addition to working well within teams.
                        </h2>
                        <h2 className="text-xl sm:text-2xl text-primary-dark text-center sm:text-left font-bold py-1 sm:py-2">
                            An aspiring full stack web developer seeking an entry-level role in the UK. 
                        </h2>
                        <h2 className="text-xl sm:text-2xl text-primary-dark text-center sm:text-left font-bold py-1 sm:py-2">
                            Currently living in South Wales, however I'm more than happy to relocate for the right role.
                        </h2>
                        <h2 className="text-xl sm:text-2xl text-primary-dark text-center sm:text-left font-bold py-1 sm:py-2">Outside of work you'll find me
                            <span className="text-white">
                                {" " + images[imageIndex].activity + "."}
                            </span>
                        </h2>
                    </div>
                    <div className="w-full sm:w-1/2 py-10">
                        <img className="rounded-full w-4/5 h-auto mx-auto sm:mr-0 shadow-2xl" src={images[imageIndex].src} alt={images[imageIndex].alt_text}/>
                    </div>
                </div>
            </section>
        </>
    )
}