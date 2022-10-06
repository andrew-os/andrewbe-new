import { homeSkillList } from "../utils/content"
import SkillListItem from "./SkillListItem"
import Button from "./Button"

function clickTest() {
  console.log("TEST TEST")
}
export default function KeySkillList(){
    return (
      <div className="bg-secondary py-4 flex flex-col md:flex-row justify-between">
            <ul className="flex flex-row items-center px-5 md:px-10 scroll-snap--slider">
                {homeSkillList.map(({title}) => (
                    <li className="flex snap-slide--item" key={title}>
                        <SkillListItem title={title}  />
                    </li>
                ))}
          </ul>
        <div className="mt-5 md:mt-0 flex justify-end">
          <Button classes="bg-secondary py-4 md:mr-10 mr-5 text-white text-xl"
            isLink={true}
            hasArrow={true}
            text="See More"
            href="myskills" arrowColor="text-primary" onClick={clickTest} />
        </div>
      </div>
    )
}

