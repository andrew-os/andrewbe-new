import { recentProjects } from "../utils/content"
import Card from "./Card"

export default function RecentProjectList(){
  return (
    <div>
      <h2>Latest Dev Projects</h2>
        <div className='grid md:grid-cols-3 md:gap-3 gap-y-6 my-12 scroll-snap--slider'>
            {recentProjects.map(({title,link,content,stack, image})=>(
                <Card key={title} title={title} link={link} content={content} tags={stack} image={image} />
            ))}
        </div>
      </div>
    )
}