import ProjectCard from "./ProjectCard";
import ProjectCardAlternate from "./ProjectCardAlternate";
import project_data from "./ProjectData";

export default function Projects() {
    const ProjectCardsSmall = project_data.map( (data, index) => {
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
                icon_4_path={data.icon_4_path}
                icon_4_alt={data.icon_4_alt}
                live_url={data.live_url}
                github_url={data.github_url}
            />
        )
    })

    const ProjectCardsLarge = project_data.map( (data, index) => {
        if (index % 2 === 0){
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
                    icon_4_path={data.icon_4_path}
                    icon_4_alt={data.icon_4_alt}
                    live_url={data.live_url}
                    github_url={data.github_url}
                />
            )   
        } else {
            return (
                <ProjectCardAlternate
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
                    icon_4_path={data.icon_4_path}
                    icon_4_alt={data.icon_4_alt}
                    live_url={data.live_url}
                    github_url={data.github_url}
                />
            )
        } 
    })

    return (
        <>
            <section id="projects" className="bg-primary">
                <div className="max-w-7xl lg:hidden p-2 sm:p-6 mx-auto">
                    <h1 className="text-3xl sm:text-7xl text-white text-center sm:text-left font-bold py-2 sm:py-4">Projects</h1>
                    {ProjectCardsSmall}
                </div> 
                <div className="hidden max-w-7xl p-2 sm:p-6 lg:block lg:p-8 mx-auto">
                    <h1 className="text-3xl sm:text-7xl text-white text-center sm:text-left font-bold py-2 sm:py-4">Projects</h1>
                    {ProjectCardsLarge}
                </div>  
            </section>
        </>
    )
}