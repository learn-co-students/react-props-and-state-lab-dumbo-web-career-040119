 import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleFilterChange = (type) => {
    // console.log(type)
    this.setState({
      filters: {
        type: type
      }
    })
  }

  handleFilterClick = () => {
    var query = ""
    switch (this.state.filters.type) {
      case 'cat':
      query = '?type=cat'
      break;
      case 'dog':
      query = '?type=dog'
      break;
      case 'micropig':
      query = '?type=micropig'
      break;
      default:
    }
    fetch(`/api/pets${query}`)
    .then(response => response.json())
    .then(results => {
      console.log(results)
    this.setState({
      pets: results
    })
   })
  }

  handleOnAdopt = (petId) => {
    // console.log(petId)
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets })
  }




  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleFilterChange}
                onFindPetsClick={this.handleFilterClick}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                onAdoptPet={this.handleOnAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
