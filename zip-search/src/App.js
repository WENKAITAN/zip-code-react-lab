import React, { Component } from 'react';
import './App.css';
import ZipSearchField from './ZipSearchField'
import City from './City'

class App extends Component {
  state = {
    cities: []
  }
  saveCities = (cities) => {
    this.setState({cities})
  }
  render() {
    const {cities} = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <ZipSearchField saveCities = {(cities) => this.saveCities(cities)}/>
        <div>
        {cities.length === 0 
        ? (<div className="list-cities">No Results</div>) 
        : (<div className="list-cities">
            {cities.map((city, idx) => (
              <ul>
                <li key={idx}>
                  <City city={city}/>
                </li>
              </ul>))}
          </div>)}
        </div>
      </div>
    );
  }
}

export default App;
