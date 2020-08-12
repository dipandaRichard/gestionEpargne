import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'
import  Modal from "@material-ui/core/Modal"


import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import CustomTable from "app-js/frontoffice/components/Snippets/CustomTable/index"
import OperationsButtons from "app-js/frontoffice/components/Snippets/OperationsButtons/index"
import Deposit from "app-js/frontoffice/components/Snippets/OperationsButtons/DepositForm"
import Refund from "app-js/frontoffice/components/Snippets/OperationsButtons/RefundForm"
import {withStyles} from "@material-ui/core/styles"

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


// import './style.local.css';


export default 
@withStyles(useStyle)
@connect((state, props) => ({}))
class Member extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      component: null
    }
  }

  componentWillMount() {
    document.title = 'operations'
  }

  setModalClose(){
    this.setState({
      modalOpen: false
    })
  }

  setModalopen(component){
    this.setState({
      modalOpen: true,
      component: component,
    })
  
}


  render() {
    const {classes}=this.props

    return (
      //<!-- Document Wrapper -->
      <div className="">
        <Navbar />
        
        <div className="row" style={{ marginBottom: 30, marginTop:30, marginLeft:100}}>
          <div className="row" style={{ width: "100%", marginBottom:20}}  >
            <div className="col-sm-4">
              <Button 
                variant="contained" 
                color="primary"  
                style={{ width: "200px", margin: "0 auto", marginTop: 20 }}
                onClick={ this.setModalopen.bind(this, <Deposit />) }
              >
                Dépôt
              </Button>
            </div>
            <div className="col-sm-4">
              <Button 
                variant="contained" 
                color="primary"  
                style={{ width: "200px", margin: "0 auto", marginTop: 20 }}
                onClick={ this.setModalopen.bind(this, null) }
              >
                Emprunt
              </Button>
            </div>
            <div className='col-sm-4'>
              <Button 
                variant="contained" 
                color="primary"  
                style={{ width: "200px", margin: "0 auto", marginTop: 20 }}
                onClick={ this.setModalopen.bind(this, <Refund />) }
              >
                Rembousement
              </Button>
            </div>
            
          </div>
          </div>
       
        <div className="container" style={{ paddingTop: 30 }}>
         {/* <CustomTable /> */}
        </div>
        
        <Modal 
          open={this.state.modalOpen}
          onClose={this.setModalClose.bind(this)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.modalPaper}>
            {this.state.component}
          </div>

        </Modal>

      </div>
    );
  }
}


