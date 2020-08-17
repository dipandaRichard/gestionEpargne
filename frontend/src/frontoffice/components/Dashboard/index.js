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
                  <div className="card" style={{ backgroundColor:"gray", marginBottom:20, padding: 15}}>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                       <div className="col-10" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <h5 className="card-title">Epargnes</h5>
                       </div>
                       <div className="col-2"></div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                      <div className="col-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>12K XAF</div>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>10M XAF</div>
                      </div>
                      <div className="col-4">
                        <i className="fas fa-chart-line fa-3x"></i>
                      </div>
                      <div className="col-4" style={{ paddingRight: 0 }}>
                        <span className="text-success">
                          <i className="fa fa-arrow-up"></i>
                          &nbsp; &nbsp;
                          15,2%
                        </span>
                      </div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0, marginTop: 20 }}>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                     </div>
                  </div>
                </div>
                <div className="col-3" >
                  <div className="card" style={{ backgroundColor:"pink", marginBottom:20, padding: 15}}>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                       <div className="col-10" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <h5 className="card-title">Epargnes Intérêt</h5>
                       </div>
                       <div className="col-2"></div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                      <div className="col-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>12K XAF</div>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>10M XAF</div>
                      </div>
                      <div className="col-4">
                        <i className="fas fa-chart-line fa-3x"></i>
                      </div>
                      <div className="col-4" style={{ paddingRight: 0 }}>
                        <span className="text-success">
                          <i className="fa fa-arrow-up"></i>
                          &nbsp; &nbsp;
                          15,2%
                        </span>
                      </div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0, marginTop: 20 }}>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                     </div>
                  </div>
                </div>
                <div className="col-3" >
                  <div className="card" style={{ backgroundColor:"red", marginBottom:20, padding: 15}}>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                       <div className="col-10" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <h5 className="card-title">Emprunts</h5>
                       </div>
                       <div className="col-2"></div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                      <div className="col-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>12K XAF</div>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>10M XAF</div>
                      </div>
                      <div className="col-4">
                        <i className="fas fa-chart-line fa-3x"></i>
                      </div>
                      <div className="col-4" style={{ paddingRight: 0 }}>
                        <span className="text-success">
                          <i className="fa fa-arrow-up"></i>
                          &nbsp; &nbsp;
                          15,2%
                        </span>
                      </div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0, marginTop: 20 }}>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                     </div>
                  </div>
                </div>
                <div className="col-3" >
                  <div className="card" style={{ backgroundColor:"orange", marginBottom:20, padding: 15}}>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                       <div className="col-10" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <h5 className="card-title">dette Intérêt</h5>
                       </div>
                       <div className="col-2"></div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                      <div className="col-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>12K XAF</div>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>10M XAF</div>
                      </div>
                      <div className="col-4">
                        <i className="fas fa-chart-line fa-3x"></i>
                      </div>
                      <div className="col-4" style={{ paddingRight: 0 }}>
                        <span className="text-success">
                          <i className="fa fa-arrow-up"></i>
                          &nbsp; &nbsp;
                          15,2%
                        </span>
                      </div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0, marginTop: 20 }}>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                     </div>
                  </div>
                </div>
                <div className="col-3" >
                  <div className="card" style={{ backgroundColor:"yellow", marginBottom:20, padding: 15}}>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                       <div className="col-10" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <h5 className="card-title">Pénalités</h5>
                       </div>
                       <div className="col-2"></div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>
                      <div className="col-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>12K XAF</div>
                        <div className="row" style={{ marginLeft: 0, marginRight: 0 }}>10M XAF</div>
                      </div>
                      <div className="col-4">
                        <i className="fas fa-chart-line fa-3x"></i>
                      </div>
                      <div className="col-4" style={{ paddingRight: 0 }}>
                        <span className="text-success">
                          <i className="fa fa-arrow-up"></i>
                          &nbsp; &nbsp;
                          15,2%
                        </span>
                      </div>
                     </div>
                     <div className="row" style={{ marginLeft: 0, marginRight: 0, marginTop: 20 }}>
                      <a href="#" className="btn btn-primary" onClick={this.setModalopen.bind(this)}>Details</a>
                     </div>
                  </div>
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


