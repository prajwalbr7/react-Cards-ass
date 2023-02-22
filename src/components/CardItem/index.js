import './index.css'

// Write your code here.
const Cards = props => {
  const {cardProfiles} = props
  const {title, description, imgUrl, className} = cardProfiles
  return (
    <li className={`card-design ${className}`}>
      <h1 className="heading">{title}</h1>
      <p className="">{description}</p>
      <div className="img-right">
        <img src={imgUrl} className="" alt={title} />
      </div>
    </li>
  )
}
export default Cards
