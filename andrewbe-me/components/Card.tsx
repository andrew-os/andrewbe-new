interface CardProps{
    title: string;
    link: string;
    content: string;
    tags: string[]
}

export default function Card({title, link, content, tags}: CardProps){
    return(
        <div>
            <a href={link} rel="noreferrer" target="_blank">
                <div className="flex flex-col justify-center px-5 py-3 shadow-xl">
                    <h3 className="text-center font-ultra text-xl">{title}</h3>
                    <p className="text-center py-4">{content}</p>
                    <div>
                        <ul className="flex flex-row items-center justify-center">
                            {tags.map((tag) =>(
                                <li className="text-xs px-2" key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    )
}