import { portfolioList } from "../utils/content"
import PortfolioListItem from "./PortfolioListItem"

export default function PortfolioList(){
    return (
        <div>
            <ul>
                {portfolioList.map(({title, link}) => (
                    <li key={title}>
                        <PortfolioListItem title={title} link={link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

