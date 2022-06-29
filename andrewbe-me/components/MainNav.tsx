import Link from "next/link"
export default function MainNav(){
    return (
    <ul className="flex flex-row justify-evenly">
        <li className="p-2">
            <Link href="/"><a className="text-primary">Home</a></Link>
        </li>
        <li className="p-2"> <Link href="/myskills"><a className="text-primary">MySkills</a></Link></li>
        <li className="p-2"> <Link href="/portfolio"><a className="text-primary">Portfolio</a></Link></li>
        <li className="p-2"> <Link href="/podcasting"><a className="text-primary">Podcasting</a></Link></li>
        <li className="p-2"> <Link href="/contact"><a className="text-primary">Contact</a></Link></li>
    </ul>
    )
}