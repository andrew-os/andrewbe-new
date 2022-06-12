import { recentProjects } from "../utils/content"
import Card from "./Card"

export default function RecentProjectList(){
    return (
        <div className='grid md:grid-cols-3'>
            {recentProjects.map(({title,link,content,stack})=>(
                <Card key={title} title={title} link={link} content={content} tags={stack} />
            ))}
        </div>
    )
}