import React from 'react'

class Pet extends React.Component {

  constructor(props) {
  super(props);
  //ask instructor what this does. Got it on docs
  this.handleClick = this.handleClick.bind(this);
}


  genderSymbol = (props) => {
    if (props.pet.gender === "male") {
      return "♂"
    } else {
      return "♀"
    }
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderSymbol(this.props)}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={this.handleClick}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
