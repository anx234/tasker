import React from "react"
import PropTypes from "prop-types"
class Lesson extends React.Component {

  render () {
    return (
      <div className='card'>
        <div className='card-title' onClick={() => {this.openModal()}}>
          <h3>{this.props.name}</h3>
        </div>
        <div className='card-int'>
          <img src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default Lesson
