import ProjectCard from "./ProjectCard";
import project_data from "./ProjectData";

export default function Projects() {
    const ProjectCards = project_data.map( (data, index) => {
        return (
            <ProjectCard
                key={index}
                img_path={data.img_path}
                img_alt={data.img_alt}
                title={data.title}
                tagline={data.tagline}
                description_1={data.description_1}
                description_2={data.description_2}
                icon_1_path={data.icon_1_path}
                icon_1_alt={data.icon_1_alt}
                icon_2_path={data.icon_2_path}
                icon_2_alt={data.icon_2_alt}
                icon_3_path={data.icon_3_path}
                icon_3_alt={data.icon_3_alt}
                live_url={data.live_url}
                github_url={data.github_url}
            />
        )
    })

    return (
        <>
            <section id="projects" className="bg-primary">
                <div className="max-w-7xl p-2 sm:p-6 lg:p-8 mx-auto">
                    <h1 className="text-3xl sm:text-7xl text-white text-center sm:text-left font-bold py-2 sm:py-4">Projects</h1>
                    {ProjectCards}
                </div>  
            </section>
        </>
    )
}