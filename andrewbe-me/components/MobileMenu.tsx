import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptopCode, faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faComment, faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function MobileMenu() {
  const router = useRouter();
  return (
    <div className="md:hidden bg-white fixed bottom-0 w-full">
      <div className="py-6">
        <ul className="flex flex-row justify-evenly">
           <li className="nav-link--mobile">
            <Link href="/">
              <a className={`${router.pathname == "/" ? "active" : ""} text-3xl px-4`}>
                <FontAwesomeIcon icon={faHome} />
              </a>
            </Link>
          </li>
          <li className="nav-link--mobile">
            <Link href="/myskills">
              <a className={`${router.pathname == "/myskills" ? "active" : ""} text-3xl px-4`}>
                <FontAwesomeIcon icon={faLaptopCode} />
              </a>
            </Link>
          </li>
          <li className="nav-link--mobile">
            <Link href="/portfolio">
              <a className={`${router.pathname == "/portfolio" ? "active" : ""} text-3xl px-4`}>
                <FontAwesomeIcon icon={faImage} />
              </a>
            </Link></li>
          <li className="nav-link--mobile">
            <Link href="/podcasting">
              <a className={`${router.pathname == "/podcasting" ? "active" : ""} text-3xl px-4`}>
                <FontAwesomeIcon icon={faMicrophoneAlt} />
              </a>
            </Link>
          </li>
          <li className="nav-link--mobile">
            <Link href="/contact">
              <a className={`${router.pathname == "/contact" ? "active" : ""} text-3xl px-4`}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </a></Link></li>
        </ul>
      </div>
    </div>
  )
}