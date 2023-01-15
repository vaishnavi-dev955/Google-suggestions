import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, UpdateSearchInput} = props
  const {suggestion, id} = suggestionItem
  const onClickSuggestion = () => {
    UpdateSearchInput(id)
  }
  return (
    <div className="list-item">
      <li className="todo-container">
        <p className="suggestionItem">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrowLogo"
          alt="arrow"
          onClick={onClickSuggestion}
        />
      </li>
    </div>
  )
}

export default SuggestionItem
