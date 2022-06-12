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
                <h3>{title}</h3>
                <p>{content}</p>
                <div>
                    <ul>
                        {tags.map((tag) =>(
                            <li key={tag}>tag</li>
                        ))}
                    </ul>
                </div>
            </a>
        </div>
    )
}