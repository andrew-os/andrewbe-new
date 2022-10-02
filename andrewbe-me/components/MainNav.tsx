import Link from "next/link"
import { useRouter } from 'next/router';

interface MainNavProps{
  invertColors: boolean
}

export default function MainNav({invertColors}: MainNavProps) {
  const router = useRouter();
  return (
    <nav className={`${invertColors ? `home-nav` : `page-nav`}`}>
      <ul className="flex flex-row justify-evenly">
          {/* <li className="nav-link">
            <Link href="/">
              <a className={`${router.pathname == "/" ? "active" : ""} px-6 py-12 flex`}>Home</a></Link>
          </li> */}
          <li className="nav-link">
            <Link href="/myskills">
              <a className={`${router.pathname == "/myskills" ? "active" : ""} px-6 py-12 flex`}>MySkills</a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/portfolio">
              <a className={`${router.pathname == "/portfolio" ? "active" : ""} px-6 py-12 flex`}>Portfolio</a>
            </Link></li>
          <li className="nav-link">
            <Link href="/podcasting">
              <a className={`${router.pathname == "/podcasting" ? "active" : ""} px-6 py-12 flex`}>Podcasting</a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/contact">
            <a className={`${router.pathname == "/contact" ? "active" : ""} px-6 py-12 flex`}>Contact</a></Link></li>
        </ul>
      </nav>
    )
}