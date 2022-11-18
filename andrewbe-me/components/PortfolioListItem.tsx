
interface PortfolioItemProps{
    title: string;
    link?: string;
}

export default function PortfolioListItem({title, link}: PortfolioItemProps){
    return(
        <a href={link} target="_blank" rel="noreferrer" className="link--has-underline text-white text-xs mr-4 whitespace-nowrap" >{title}</a>
    )
}