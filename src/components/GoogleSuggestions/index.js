// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  UpdateSearchInput = id => {
    const {suggestionsList} = this.props
    const sugetionResults = suggestionsList.filter(
      eachItem => eachItem.id === id,
    )
    const {suggestion} = sugetionResults[0]
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogo"
        />
        <div className="suggestions">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchLogo"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="inputStyle"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <div>
            <ul className="suggestions-container">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  suggestionItem={eachItem}
                  key={eachItem.id}
                  UpdateSearchInput={this.UpdateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
