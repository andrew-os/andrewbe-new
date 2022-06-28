import Link from "next/link"
export default function MainNav(){
    return (
    <ul className="flex flex-row justify-evenly">
        <li>
            <Link href="/"><a>Home</a></Link>
        </li>
        <li> <Link href="/myskills"><a>MySkills</a></Link></li>
        <li> <Link href="/portfolio"><a>Portfolio</a></Link></li>
        <li> <Link href="/podcasting"><a>Podcasting</a></Link></li>
        <li> <Link href="/contact"><a>Contact</a></Link></li>
    </ul>
    )
}