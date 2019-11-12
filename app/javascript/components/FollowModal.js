import React from "react"
import PropTypes from "prop-types"
class FollowModal extends React.Component {

  constructor(props) {
  super(props);
  this.state = {isModalOpen: false};
  }

  openModal() {
  this.setState({isModalOpen: true});
  console.log(this.state);

  }

  closeModal() {
  this.setState({isModalOpen: false});
  }




  render () {
    let modal;
       if (this.state.isModalOpen) {
         modal = (
           <div>
         <h3>{this.props.name}</h3>
         <a href ={'/users/'+this.props.id}>{this.props.name}</a>
         <button
         className='modal-close-btn'
         onClick={() => this.closeModal()}
         >
         とじる
         </button>
         </div>
         );
       }
    return (
      <div>

      {modal}
      </div>
    );
  }
}

export default FollowModal
