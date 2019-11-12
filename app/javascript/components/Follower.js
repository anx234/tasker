import React from "react"
import PropTypes from "prop-types"
class Follower extends React.Component {
  render () {
    return (
      <div>
    <h3>{this.props.name}</h3>
    <a href ={'/users/'+this.props.id}>{this.props.name}</a>
    </div>
    );
  }
}

export default Follower
