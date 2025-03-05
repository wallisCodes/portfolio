export default function ProjectCard(props) {
    return (
        <>
            <div className="sm:flex sm:border-2 sm:border-white sm:rounded-2xl sm:shadow-xl p-2 sm:p-4 md:p-6 my-2 sm:my-4 md:my-6">
                <img className="rounded-xl sm:w-1/2 h-auto mx-auto" src={props.img_path} alt={props.img_alt}/>
                <div className="text-white sm:w-1/2 py-2 sm:px-6 lg:px-8">
                    <h2 className="text-xl sm:text-3xl font-bold">{props.title}</h2>
                    <p className="sm:text-xl text-alt-light italic mb-1 sm:mb-2 md:mb-4">{props.tagline}</p>
                    <p className="sm:text-xl text-alt-light">{props.description_1}</p>
                    <p className="sm:text-xl text-alt-light">{props.description_2}</p>

                    <div className="flex py-4 sm:py-6 lg:py-8 space-x-4">
                        <img src={props.icon_1_path} className="w-10 h-10 sm:w-[60px] sm:h-[60px]" alt={props.icon_1_alt}/>
                        <img src={props.icon_2_path} className="w-10 h-10 sm:w-[60px] sm:h-[60px]" alt={props.icon_2_alt}/>
                        {/* Only render extra project icons (3+) if necessary */}
                        { props.icon_3_path && <img src={props.icon_3_path} className="w-10 h-10 sm:w-[60px] sm:h-[60px]" alt={props.icon_3_alt}/> }
                        { props.icon_4_path && <img src={props.icon_4_path} className="w-10 h-10 sm:w-[60px] sm:h-[60px]" alt={props.icon_4_alt}/> }
                    </div>

                    <div className="space-x-4 lg:space-x-6 mb-8">
                        {/* Only render live button if site has been deployed */}
                        { props.live_url && <a href={props.live_url} target="_blank" className="text-lg sm:text-2xl bg-primary-dark text-white hover:bg-primary-light p-2 px-4 sm:px-10 rounded-md">Visit Site</a> }
                        <a href={props.github_url} target="_blank" className="text-lg sm:text-2xl bg-primary-dark text-white hover:bg-primary-light p-2 px-4 sm:px-10 rounded-md">GitHub Repo</a>
                    </div>                    
                </div>
            </div>
        </>
    )
}