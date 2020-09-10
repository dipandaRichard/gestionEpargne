import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'
import Modal from "@material-ui/core/Modal"

import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import CustomTable from "app-js/frontoffice/components/Snippets/CustomTable/index"
import RegisterForm from "app-js/frontoffice/components/Snippets/RegisterForm/index"
import {withStyles} from "@material-ui/core/styles"




// import './style.local.css';

const useStyle=(theme)=>({
  modalPaper:{
    position:"absolute",
    width:"800px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2,4,3),
    boxShadow: theme.shadows[5],
    top:"15%",
    left: "15%",
  },
})

export default 
@withStyles(useStyle)
@connect((state, props) => ({}))
class Member extends React.Component {
  componentWillMount() {
    document.title = 'Member'
  }

  constructor(props){
    super(props)
    this.state={
      isOpen:false
    }
  }

  setModalOpen() {
    this.setState(
      {isOpen:true}
    )
  }
  setModalClose(){
    this.setState(
      {isOpen:false}
    )
  }


  render() {
    const {classes}=this.props
    return (
      //<!-- Document Wrapper -->
      <div className="single_account">
        <Navbar />
        
        <div className="row" style={{ marginBottom: 30, marginTop:30, marginLeft:100}}>
            <div className="">
              <Button
                variant="contained"
                color='primary'
              onClick={this.setModalOpen.bind(this)}
              >
                <i className="fa fa-plus"></i> &nbsp;
                Ajouter un Membre
              </Button>
            </div>
          </div>
       
        <div className="container" style={{ paddingTop: 30 }}>
         <CustomTable />
        </div>
        <Modal
        aria-labelledby='transition-modal-title'
        aria-discribedby='transition-modal-description'
        open={this.state.isOpen}
        onClose={this.setModalClose.bind(this)}
        
      >
        {/* <Fade in={this.props.isOpen}>
            <h2 id="transition-modal-title">Titre Modal</h2>
            <p id="transition-modal-description">Descrription modal</p>
        </Fade> */}
        <div className={classes.modalPaper}><RegisterForm/></div>
      </Modal>

      </div>
    );
  }
}


