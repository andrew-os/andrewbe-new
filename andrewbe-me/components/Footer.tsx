import YearToday from './YearToday'

interface FooterProps{
    children?: React.ReactNode|React.ReactNode[];
}
export default function Footer({}: FooterProps){
    return(
        <footer className="bg-brand-pink flex flex-row justify-between px-5 py-4">
            <div>
                &copy; <YearToday /> andrewbeme
            </div>
            <div>
                <ul className="flex flex-row">
                    <li className="mr-4"><a>linkedin</a></li>
                    <li><a>github</a></li>
                </ul>
            </div>
        </footer>
    )
}