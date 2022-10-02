import { portfolioList } from "../utils/content"
import PortfolioListItem from "./PortfolioListItem"

export default function PortfolioList(){
    return (
        <div className="bg-secondary py-4">
            <ul className="flex flex-row px-10">
                {portfolioList.map(({title, link}) => (
                    <li key={title}>
                        <PortfolioListItem title={title} link={link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

