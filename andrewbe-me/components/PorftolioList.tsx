import { portfolioList } from "../utils/content"
import PortfolioListItem from "./PortfolioListItem"

export default function PortfolioList(){
    return (
        <div className="bg-secondary py-4">
            <ul className="flex md:flex-row items-center px-5 md:px-10 py-7 md:py-0 scroll-snap--slider">
                {portfolioList.map(({title, link}) => (
                    <li key={title} className="inline-block md:flex snap-slide--item">
                        <PortfolioListItem title={title} link={link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

