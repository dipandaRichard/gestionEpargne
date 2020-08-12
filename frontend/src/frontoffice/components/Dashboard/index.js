import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'

import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import Card from "app-js/frontoffice/components/Snippets/Card"
import CardMember from "app-js/frontoffice/components/Snippets/CardUserInfo"
import Modal from "@material-ui/core/Modal"
import {withStyles} from "@material-ui/core/styles"
import CustomTable from "app-js/frontoffice/components/Snippets/CustomTable"

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
@connect((state, props) => ({}))
@withStyles(useStyle)
class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      modalOpen: false,
      tableEntete: null,
      tableTitle:"",
      tableType:""
    }
  }

  componentWillMount() {
    document.title = 'Dashboard'
  }

  setModalopen(){
      this.setState({
        modalOpen: true,
        tableEntete:{
          id:"N°",
          date:"Date",
          montant:"Montant",
          interet:"Interêt",
          total:"Total",
        },
        tableType:"epargne", 
        tableTitle:"Epargne"
      })
    
  }
  setModalClose(){
    this.setState({
      modalOpen: false
    })
  }

  render() {

    console.log("analytic===============================================");
    
    
    const {classes}=this.props
    console.log("props values============", this.props);

    return (
      //<!-- Document Wrapper -->
      <div className="dashboard">
        <Navbar />
        
        
        <div className="container">
            <div className="row" style={{marginBottom:20, marginTop:20}}>
                <div className="col-3" >
                  <div className="card"
                   style={{width: "16rem", height:"12rem", backgroundColor:"pink"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Epargnes</h5>
                      <h3 className="card-text"> 1.000.000.000.000 Fcfa .</h3>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card" style={{width: "16rem", height:"12rem", backgroundColor:"green" }}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Interêts d'épargnes</h5>
                      <h4 className="card-text">1 000 000 Fcfa.</h4>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card" style={{width: "16rem", height:"12rem", backgroundColor:"red" }}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Emprunts</h5>
                      <h3 className="card-text"> 1.000.000.000.000 Fcfa .</h3>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card" style={{width: "16rem", height:"12rem", backgroundColor:"blue" }}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Interêts d'emprunts</h5>
                      <h3 className="card-text"> 1.000.000.000.000 Fcfa .</h3>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row" style={{marginBottom:20}}>
                <div className="col">
                <div className="card" style={{width: "16rem", height:"12rem", backgroundColor:"yellow"}}>
                  <img src="..." class="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Pénalités</h5>
                    <h3 className="card-text"> 1.000.000.000.000 Fcfa .</h3>
                    <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                  </div>
                </div>
                </div>
                <div className="col">
                
                </div>
            </div>
            </div>
            
            <Modal 
              open={this.state.modalOpen}
              onClose={this.setModalClose.bind(this)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className={classes.modalPaper}>
                <CustomTable 
                  tableTitle={this.state.tableTitle} 
                  tableType={this.state.tableType} 
                  tableEntete={this.state.tableEntete}
                />
              </div>

            </Modal>

      </div>
    );
  }
}


