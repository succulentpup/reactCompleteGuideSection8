import styledClasses from './Card.module.css'

const Card = (props) => {
  return <div className={`${styledClasses.card} ${props.className}`}>{props.children}</div>
}

export default Card;
