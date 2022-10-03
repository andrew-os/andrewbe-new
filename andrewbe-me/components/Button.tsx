import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface ButtonProps{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string
  hasArrow?: boolean
  arrowColor?: string
  secondaryColor?: boolean
  classes?: string
  isLink: boolean
  href?: string

}

function LinkButton({href, title, hasArrow, classes, arrowColor}){
  return (
    <Link href={`/${href}`}>
      <a className={`${classes}`}>
        <span className="inline border-b-3 border-primary pb-1">{title}</span>
      {hasArrow ? (
        <span className="ml-4"><FontAwesomeIcon icon={faArrowRight } className={`${arrowColor}`} /></span>
      ) : (
          null
      )}
      </a>
    </Link>

  )
}

export default function Button({isLink, onClick, text, href, classes, hasArrow, arrowColor, secondaryColor = false }: ButtonProps) {
  return (
    isLink ? (
      <LinkButton href={href} title={text} hasArrow={hasArrow} classes={classes} arrowColor={arrowColor} />
    ) :(
    <button className={`${classes} ${secondaryColor ? `bg-secondary` : `bg-primary`}`} onClick={onClick}>
      {text}
      </button>
    )
  )
}