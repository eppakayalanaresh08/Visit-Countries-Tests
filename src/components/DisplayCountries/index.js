import './index.css'

const DisplayCountries = props => {
  const {eachListCountries, onClickEachRemove} = props
  const {imageUrl, name, id} = eachListCountries
  const onClickRemove = () => {
    onClickEachRemove(id)
  }
  return (
    <li className="list-countries">
      <img src={imageUrl} alt="thumbnail" className="image-countries" />
      <div className="button-container">
        <p className="name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default DisplayCountries
