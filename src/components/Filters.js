import React from 'react'

class Filters extends React.Component {
  // state = {
  //   type: 'all'
  // }
  
  // handleOnchange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  //   // this.props.onChangeType(e.target.value)
  // }

  // handleClick = (e) => {
  //   this.props.onChangeType(this.state.type)
  //   this.props.onFindPetsClick(this.state.type)
  //   // e.target.value = '';
  // }

  render() {
    // console.log(this.state.type)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={(e) => {this.props.onChangeType(e.target.value)}} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
