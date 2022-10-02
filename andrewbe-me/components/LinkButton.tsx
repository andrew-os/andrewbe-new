import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface LinkButtonProps{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string
  hasArrow?: boolean
  secondaryColor?: boolean
  classes?: string[]

}

export default function LinkButton({onClick, text, classes, hasArrow, secondaryColor = false }: LinkButtonProps) {
  return (
    <button className={`${classes} ${secondaryColor ? `bg-secondary` : `bg-orange`}`} onClick={onClick}>
      {text}
      {hasArrow ? (
        <span><FontAwesomeIcon icon={faArrowRight } /></span>
      ) : (
          null
      )}
    </button>
  )
}