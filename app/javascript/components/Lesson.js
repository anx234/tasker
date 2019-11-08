import React from "react"
import PropTypes from "prop-types"
class Lesson extends React.Component {



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
           <div className='mod'>
                   <div className='modal-inner'>
                       <div className='modal-header'>
  <h2>{this.props.name}</h2>
                       </div>
                     <div className='modal-introduction'>
  <p>{this.props.introduction}</p>

                       </div>
                       <button
                       className='modal-close-btn'
                       onClick={() => this.closeModal()}
                       >
                       とじる
                       </button>
                     </div>
                   </div>
         );
       }

    return (
      <div className='card'>

          <div className='card-title' onClick={() => {this.openModal()}}>
                <h3>{this.props.name}</h3>

                </div>
                <div className='card-int'>
                 <img src={this.props.image} />
                </div>
                  {modal}
              </div>


    );
  }
}

export default Lesson
