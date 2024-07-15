import './index.css'

const AppItem = props => {
  const {details} = props
  const {appId, appName, imageUrl, category} = details

  return (
    <li className="item">
      <img src={imageUrl} alt={appName} className="img-item" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
