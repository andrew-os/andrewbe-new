import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptopCode, faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faComment, faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function MobileMenu() {
  const router = useRouter();
  return (
    <div className="md:hidden bg-white fixed bottom-0 w-full z-40">
      <div className="gradient-line w-full h-4"></div>
      <div className="py-6 rounded-main">

        <ul className="flex flex-row justify-evenly px-5">
           <li className="nav-link--mobile">
            <Link href="/">
              <a className={`${router.pathname == "/" ? "active" : ""} text-2xl px-2 flex flex-col items-center content-center`}>
                <FontAwesomeIcon icon={faHome} />
                <span className="text-xios tracking-wide font-semibold uppercase pt-2">Home</span>
              </a>
            </Link>
          </li>
          <li className="nav-link--mobile">
            <Link href="/myskills">
              <a className={`${router.pathname == "/myskills" ? "active" : ""} text-2xl px-2  flex flex-col items-center content-center`}>
                <FontAwesomeIcon icon={faLaptopCode} />
                <span className="text-xios tracking-wide font-semibold uppercase pt-2">Skills</span>
              </a>
            </Link>
          </li>
          <li className="nav-link--mobile">
            <Link href="/portfolio">
              <a className={`${router.pathname == "/portfolio" ? "active" : ""} text-2xl px-2  flex flex-col items-center content-center`}>
                <FontAwesomeIcon icon={faImage} />
                <span className="text-xios tracking-wide font-semibold uppercase pt-2">Portfolio</span>
              </a>
            </Link></li>
          <li className="nav-link--mobile">
            <Link href="/podcasting">
              <a className={`${router.pathname == "/podcasting" ? "active" : ""} text-2xl px-2  flex flex-col items-center content-center`}>
                <FontAwesomeIcon icon={faMicrophoneAlt} />
                <span className="text-xios tracking-wide font-semibold uppercase pt-2">Podcasting</span>
              </a>
            </Link>
          </li>
          <li className="nav-link--mobile">
            <Link href="/contact">
              <a className={`${router.pathname == "/contact" ? "active" : ""} text-2xl px-2  flex flex-col items-center content-center`}>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span className="text-xios tracking-wide font-semibold uppercase pt-2">Contact</span>
              </a></Link></li>
        </ul>
      </div>
    </div>
  )
}