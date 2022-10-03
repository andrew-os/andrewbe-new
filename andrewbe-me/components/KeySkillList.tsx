import { homeSkillList } from "../utils/content"
import SkillListItem from "./SkillListItem"
import Button from "./Button"

function clickTest() {
  console.log("TEST TEST")
}
export default function KeySkillList(){
    return (
      <div className="bg-secondary py-4 flex flex-row justify-between">
            <ul className="flex flex-row items-center px-10">
                {homeSkillList.map(({title}) => (
                    <li className="flex " key={title}>
                        <SkillListItem title={title}  />
                    </li>
                ))}
          </ul>
        <div>
          <Button classes="bg-secondary py-4 mr-10 text-white text-xl" isLink={true} hasArrow={true} text="See More" href="myskills" arrowColor="text-primary" onClick={clickTest} />
        </div>
      </div>
    )
}

