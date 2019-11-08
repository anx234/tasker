import React from "react"
import PropTypes from "prop-types"


var CommentBox = React.createClass({
  render: function() {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
});


export default CommentBox
