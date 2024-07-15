import './index.css'

const TabItem = props => {
  const {details, updateTab, isActive} = props
  const {tabId, displayText} = details
  const change = () => {
    updateTab(tabId)
  }
  const finalClass = isActive ? 'special' : ''
  return (
    <li>
      <button className={`btn ${finalClass}`} onClick={change}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
