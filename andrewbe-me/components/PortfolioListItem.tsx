

interface PortfolioItemProps{
    title: string;
    link: string;
}

export default function PortfolioListItem({title, link}: PortfolioItemProps){
    return(
        <a href={link} target="_blank" rel="noreferrer" className="underline decoration-brand-pink text-primary underline-offset-4">{title}</a>
    )
}