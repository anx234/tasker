import React from "react"
import PropTypes from "prop-types"
class FollowFollower extends React.Component {
  render () {
    return (
      <div className='follow-list'>
        <a href ={'/users/'+this.props.id}>{this.props.name}</a>
        {this.props.greeting}
      </div>
    );
  }
}

export default FollowFollower
