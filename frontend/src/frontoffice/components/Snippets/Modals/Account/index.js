import React from "react";
import { connect } from "react-redux";
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'



// import './style.local.css';


export default 
@connect((state, props) => ({}))
class CustomModal extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        isOpen: this.props.isOpen
    }
  }

  handleClose(){
    this.setState((state)=>({ isOpen: false }))
  }



  render() {

    return (
      //<!-- Document Wrapper -->
      <Modal
        aria-labelledby='transition-modal-title'
        aria-discribedby='transition-modal-description'
        open={this.state.isOpen}
        onClose={this.handleClose}
        
      >
        {/* <Fade in={this.props.isOpen}>
            <h2 id="transition-modal-title">Titre Modal</h2>
            <p id="transition-modal-description">Descrription modal</p>
        </Fade> */}
        <h3>My modal</h3>
      </Modal>
    );
  }
}


