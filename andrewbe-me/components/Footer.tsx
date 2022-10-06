import Link from "next/link"
import YearToday from './YearToday'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
    return(
        <footer className="flex flex-row md:justify-end">
          <div className='w-full md:w-3/12 bg-brand-slate py-4 px-5'>
            <ul className="flex flex-col">
              <ul className="flex flex-row">
                <li className="mr-4">
                  <a className='text-white' href="https://www.linkedin.com/in/asleigh/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:text-primary" />
                  </a>
                </li>
                <li>
                <a className='text-white' target="_blank" href="https://github.com/andrew-os" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithubAlt} className="text-white hover:text-primary" />
                  </a>
                </li>
              </ul>
            <li>
              <Link href="/play">
                <a className='text-white hover:text-primary'>about me</a>
              </Link>
            </li>
            <li className='text-white'>&copy; <YearToday /> andrewbeme</li>

            </ul>
          </div>
        </footer>
    )
}