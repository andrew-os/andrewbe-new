import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface ButtonStaticProps{
  text: string
  hasArrow?: boolean
  arrowColor?: string
  secondaryColor?: boolean
  borderColor?: string
  classes?: string
  href?: string
}

interface ButtonProps extends ButtonStaticProps{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLink: boolean

}

function LinkButton({text, href, hasArrow, classes, arrowColor, borderColor}: ButtonStaticProps){
  return (
    <Link href={`/${href}`}>
      <a className={`${classes}`}>
        <span className={`inline border-b-3 border-primary pb-1 ${borderColor}`}>{text}</span>
      {hasArrow ? (
        <span className="ml-4"><FontAwesomeIcon icon={faArrowRight } className={`${arrowColor}`} /></span>
      ) : (
          null
      )}
      </a>
    </Link>

  )
}

export default function Button({isLink, onClick, text, href, classes, hasArrow, arrowColor, borderColor="border-primary", secondaryColor = false }: ButtonProps) {
  return (
    isLink ? (
      <LinkButton href={href} text={text} hasArrow={hasArrow} classes={classes} arrowColor={arrowColor} borderColor={borderColor} />
    ) :(
    <button className={`${classes} ${secondaryColor ? `bg-secondary` : `bg-primary`}`} onClick={onClick}>
      {text}
      </button>
    )
  )
}