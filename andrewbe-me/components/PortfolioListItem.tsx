

interface PortfolioItemProps{
    title: string;
    link: string;
}

export default function PortfolioListItem({title, link}: PortfolioItemProps){
    return(
        <a href={link} target="_blank" rel="noreferrer" >{title}</a>
    )
}