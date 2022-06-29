import Link from "next/link"
import { useRouter } from 'next/router';

export default function MainNav(){
    const router = useRouter();

    return (
    <ul className="flex flex-row justify-evenly">
        <li className="p-2">
            <Link href="/">
                <a className={router.pathname == "/" ? "text-yellow hover:text-white" : 'text-white hover:text-yellow'}>Home</a>
                
            </Link>
        </li>
        <li className="p-2"> 
            <Link href="/myskills">
                <a className={router.pathname == "/myskills" ? "text-yellow hover:text-white" : 'text-white hover:text-yellow'}>MySkills</a>
            </Link>
        </li>
        <li className="p-2"> <Link href="/portfolio"><a className={router.pathname == "/portfolio" ? "text-yellow hover:text-white" : 'text-white hover:text-yellow'}>Portfolio</a></Link></li>
        <li className="p-2"> <Link href="/podcasting"><a className={router.pathname == "/podcasting" ? "text-yellow hover:text-white" : 'text-white hover:text-yellow'}>Podcasting</a></Link></li>
        <li className="p-2"> <Link href="/contact"><a className={router.pathname == "/contact" ? "text-yellow hover:text-white" : 'text-white hover:text-yellow'}>Contact</a></Link></li>
    </ul>
    )
}