import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'

import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import Card from "app-js/frontoffice/components/Snippets/Card"
import CardMember from "app-js/frontoffice/components/Snippets/CardUserInfo"
import Modal from "@material-ui/core/Modal"
import {withStyles} from "@material-ui/core/styles"
import CustomTable from "app-js/frontoffice/components/Snippets/CustomTable/index"



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
class Single extends React.Component {
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
    document.title = 'Member'
  }

  setModalopen(operation){

    if(operation=="epargne"){
      this.setState({
        modalOpen: true,
        tableEntete:{
          id:"N°",
          date:"Date",
          montant:"Montant",
          interet:"Interêt",
          total:"Total",
        },
        tableType:operation, 
        tableTitle:"Epargne"
      })
    }else{
      this.setState({
        modalOpen: true,
        tableEntete:{
          id:"N°",
          date:"Date",
          montant:"Montant",
          taux:"Taux",
          interet:"Interêt",
          echeance:"Echeance",
          avance:"Avance",
          reste:"Reste",
        },
        tableType:operation,
        tableTitle:"Emprunt"
      })
    }
    
  }
  setModalClose(){
    this.setState({
      modalOpen: false
    })
  }

  render() {
    
    const {classes}=this.props
    console.log("props values============", this.props);

    return (
      //<!-- Document Wrapper -->
      <div className="single_member">
        <Navbar />
        
        <div className="container" style={{marginBottom:20 }}>
            <div className="row" style={{marginBottom:20, marginTop:20}}>
                <div class="col-12" >
                    <CardMember/>
                </div>
            </div>
            
            
            <div className="row" style={{marginBottom:20}}>
                <div className="col">
                  <Card cardTitle="Epargnes" handleOpenModal={this.setModalopen.bind(this, "epargne") } />
                </div>
                <div className="col">
                  <Card cardTitle="Emprunts" handleOpenModal={this.setModalopen.bind(this, "emprunt") }/>
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


