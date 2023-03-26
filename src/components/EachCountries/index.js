import './index.css'

const EachCountries = props => {
  const {eachObjectList, onClickEachVisit, onClickRemoveVisited} = props
  const {name, isVisited, id} = eachObjectList
  const isButtonVisit = isVisited ? 'Visited' : 'Visit'
  const isVisitStyle = isVisited ? '' : 'style-Visit'

  const onClickVisit = () => {
    onClickEachVisit(id)
  }

  const onClickRemove = () => {
    onClickRemoveVisited(id)
  }

  return (
    <li className="list-style">
      <div className="style-button-container">
        <p className="name-Element">{name}</p>
        {isVisited ? (
          <p className="is-Visited" onClick={onClickRemove}>
            {isButtonVisit}
          </p>
        ) : (
          <button
            type="button"
            className={`${isVisitStyle} button-Element`}
            onClick={onClickVisit}
          >
            {isButtonVisit}
          </button>
        )}
      </div>
      <div className="horizontal-line-container">
        <hr className="horizontal-line" />
      </div>
    </li>
  )
}

export default EachCountries
