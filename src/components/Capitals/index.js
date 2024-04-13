import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedOptionId: 'NEW_DELHI',
  }

  render() {
    const {selectedOptionId} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      eachCountry => selectedOptionId === eachCountry.id,
    ).country
    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select>
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <p>{selectedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
