export default function ProjectCard(props) {
    return (
        <>
            <div className="sm:flex sm:border-2 sm:border-white sm:rounded-md p-2 sm:p-4 md:p-6 my-2 sm:my-4 md:my-6">
                <img className="rounded-md sm:w-1/2 h-auto mx-auto" width="583" height="450" src={props.img_path} alt={props.img_alt}/>
                <div className="text-white sm:w-1/2 py-2 sm:px-6 lg:px-8">
                    <h2 className="text-xl sm:text-3xl font-bold">{props.title}</h2>
                    <p className="sm:text-xl text-alt-light italic mb-1 sm:mb-2 md:mb-4">{props.tagline}</p>
                    <p className="sm:text-xl text-alt-light">{props.description_1}</p>
                    <p className="sm:text-xl text-alt-light">{props.description_2}</p>

                    <div className="flex py-2 sm:py-6 lg:py-8 space-x-2">
                        <img src={props.icon_1_path} width="50" height="50" alt={props.icon_1_alt}/>
                        <img src={props.icon_2_path} width="50" height="50" alt={props.icon_2_alt}/>
                        {/* Only render extra project icons (3+) if necessary */}
                        { props.icon_3_path && <img src={props.icon_3_path} width="50" height="50" alt={props.icon_3_alt}/> }
                    </div>

                    <div className="space-x-2 sm:space-x-4 lg:space-x-6">
                        {/* Only render live button if site has been deployed */}
                        { props.live_url && <a href={props.live_url} target="_blank" className="text-lg px-2 sm:px-4 py-1 sm:py-2  border border-white rounded-md">Live</a> }
                        <a href={props.github_url} target="_blank" className="text-lg px-2 sm:px-4 py-1 sm:py-2 border border-white rounded-md">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}