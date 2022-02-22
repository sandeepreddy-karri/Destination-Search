// Write your code here

import './index.css'

const DestinationItem = props => {
  const {locationDetails} = props
  const {name, imgUrl} = locationDetails

  return (
    <li className="location-card-container">
      <img src={imgUrl} className="location-pic" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
