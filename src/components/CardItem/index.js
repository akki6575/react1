// Write your code here.
import './index.css'

const Page = props => {
  const {card, key} = props
  const {title, description, className, imgUrl} = card
  console.log(key)

  return (
    <li className={`card ${className}`}>
      <div className="text-container">
        <h1 className="heading">{title}</h1>
        <p className="context">{description}</p>
      </div>
      <div className="img-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Page
