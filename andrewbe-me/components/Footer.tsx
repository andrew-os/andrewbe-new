interface FooterProps{
    children?: React.ReactNode|React.ReactNode[];
    date: Date
}
export default function Footer({date}: FooterProps){
    return(
        <footer className="bg-teal-500 flex flex-row justify-between px-5">
            <div>
                &copy; andrewbeme
                date and text
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