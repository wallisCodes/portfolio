// import MyImageSvg from "../src/assets/images/postgres.svg";

export default function ProjectCard() {
    return (
        <>
            <img className="rounded-md sm:w-1/2 h-auto mx-auto" src="../src/assets/images/Avenue136-cropped.png" alt="Avenue136 hairdressing website screenshot"/>
            <div className="text-white sm:w-1/2 py-2 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-3xl font-bold">Avenue136</h2>
                <p className="sm:text-xl text-alt-light">Hairdressing website for local business</p>
                <p className="sm:text-xl text-alt-light">My first project built using vanilla HTML, CSS and Javascript. Fully responsive static site, hosted on Cloudflare Pages.</p>
                <p className="sm:text-xl text-alt-light">Purposefully designed from the ground up to reinforce the frontend basics before moving on to more advanced technologies/frameworks.</p>

                <div className="flex py-2 sm:py-6 lg:py-8 space-x-2">
                    <img src="../src/assets/icons/html.svg" width="50" height="50" alt="html logo"/>
                    <img src="../src/assets/icons/css.svg" width="50" height="50" alt="css logo"/>
                    <img src="../src/assets/icons/javascript.svg" width="50" height="50" alt="javascript logo"/>
                </div>

                <div className="space-x-2 sm:space-x-4 lg:space-x-6">
                    <a href="https://avenue136.co.uk/" target="_blank" className="text-lg px-2 sm:px-4 py-1 sm:py-2  border border-white rounded-md">Live</a>
                    <a href="https://github.com/wallisCodes/Avenue136" target="_blank" className="text-lg px-2 sm:px-4 py-1 sm:py-2 border border-white rounded-md">GitHub</a>
                </div>
            </div>
        </>
    )
}