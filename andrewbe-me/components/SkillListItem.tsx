
interface SkillListItemProps{
    title: string;
    link?: string;
}

export default function SkillListItem({title}: SkillListItemProps){
    return(
        <p className="text-white text-xs mr-4" >{title}</p>
    )
}