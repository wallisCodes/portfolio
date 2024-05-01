import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <>
            <section id="projects" className="bg-primary">
                <div className="h-screen max-w-7xl p-2 sm:p-6 lg:p-8 mx-auto">
                    <h1 className="text-3xl sm:text-5xl text-white text-center sm:text-left font-bold py-2 sm:py-4">Projects</h1>
                    <div className="sm:border sm:border-white sm:rounded-md sm:flex p-2 sm:p-4 md:p-6">
                        <ProjectCard />
                    </div>
                </div>  
            </section>
        </>
    )
}