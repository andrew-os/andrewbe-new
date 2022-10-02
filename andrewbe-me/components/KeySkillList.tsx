import { homeSkillList } from "../utils/content"
import SkillListItem from "./SkillListItem"

export default function KeySkillList(){
    return (
        <div className="bg-secondary py-4">
            <ul className="flex flex-row px-10">
                {homeSkillList.map(({title}) => (
                    <li key={title}>
                        <SkillListItem title={title}  />
                    </li>
                ))}
            </ul>
        </div>
    )
}

