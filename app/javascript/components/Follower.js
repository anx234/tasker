import React from "react"
import PropTypes from "prop-types"
class Follower extends React.Component {
  render () {
    return (
    <h3>{this.props.name}</h3>
    );
  }
}

export default Follower
