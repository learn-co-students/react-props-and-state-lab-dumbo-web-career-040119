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

  // componentDidMount(){
  //   fetch(`/api/pets`)
  //   .then(resp => resp.json())
  //   .then(data => this.setState({
  //     pets: data
  //   }))
  // }

  onChangeType = (input) => {
    this.setState({filters: {
      type: input
    }})
  }

  onFindPetsClick = () => {
    let url = ''
    this.state.filters.type === 'all' ? url = `/api/pets` : url = `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({
      pets: data
    }))
  }

  onAdoptPet = (id) =>{
  
    const pets = this.state.pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true;
        // console.log(pet) 
      }
      return pet
    })
    this.setState({
      pets: pets
    })
  }

  render() {
    // console.log(this.state.filters)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet = {this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
