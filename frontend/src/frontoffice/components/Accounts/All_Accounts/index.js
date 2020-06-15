import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'

import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CustomTable from "app-js/frontoffice/components/Snippets/CustomTable/index"
import { withStyles } from '@material-ui/core/styles';
import RegisterForm from "../../Snippets/RegisterForm";
import Operations from "../../Snippets/Operations";
import AccountForm from "../../Snippets/AccountForm";
import BalanceGrid from "../../Snippets/BalanceGrid";
import DepositForm from "../../Snippets/Operations/DepositForm";
import RefundForm from "../../Snippets/Operations/RefundForm";
import AddAccount from "../../Snippets/AddAccount";
import { default as AntdModal} from 'antd/lib/modal';



// import './style.local.css';

const useStyles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper:{
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  header_style: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },}
  )


export default 
@connect((state, props) => ({}))
@withStyles(useStyles)
class All_Accounts extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isOpen: false, 
      content: null,
    }
  }


  componentWillMount() {
    document.title = 'All-Accounts'
  }
  
  _handleOpen(value){
    this.setState({ isOpen: true, content: value })
    console.log('Parameter on handleOpen function ', value)
  }

  _handleClose(){
    this.setState({ isOpen: false })
    // console.log('Parameter on h')
  }

  _handlesubmitForm(){
    this.setState({ isOpen: false })
    AntdModal.success({
      title: "Enregistrement réussi",
      content: "Votre formulaire a été enregistré avec succès. Merci"
    })
  }

  _renderModalContent(value_content){
    const { classes } = this.props

    switch(value_content){
      case 'add_account':
        return (
          <div>
            <h2 id="transition-modal-title" className={classes.header_style}>Nouveau Compte</h2>
            <AddAccount handleSubmit={this._handlesubmitForm.bind(this)}/>
          </div>
        )
      case 'deposit_form':
        return(
          <div>
            <h2 id="transition-modal-title" className={classes.header_style}>Dépôt</h2>
            <DepositForm handleSubmit={this._handlesubmitForm.bind(this)} />
          </div>
          )
      case 'rent_form':
        return(
          <div>
            <h2 id="transition  -modal-title" className={classes.header_style}>Emprunt</h2>
            <BalanceGrid handleSubmit={this._handlesubmitForm.bind(this)} />
          </div>
          )
      case 'refund_form':
        return(
          <div>
            <h2 id="transition  -modal-title" className={classes.header_style}>Remboursement</h2>
            <RefundForm handleSubmit={this._handlesubmitForm.bind(this)} />
          </div>
          )

          default:
            return null
    }
  }


  render() {
    const { classes } = this.props
    var content = this.state.content 

    return (
      //<!-- Document Wrapper -->
      <div className="all_accounts">
        <Navbar />
        <div className="container" style={{ paddingTop: 50 }}>
          <div className="row" style={{ marginBottom: 30 }}>
            <div className="">
              <Button
                variant="contained"
                color='primary'
                onClick={this._handleOpen.bind(this, "add_account")}
              >
                <i className="fa fa-plus"></i> &nbsp;
                Ajouter un compte
              </Button>
            </div>
          </div>

          <div className="row" style={{ width: "100%", marginBottom:20}}  >
        <div className="col-sm-4" style={{paddingLeft:0}}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={this._handleOpen.bind(this, "deposit_form")}
            style={{ 
              width: "200px", 
              margin: "0 auto", 
              marginTop: 20 
            }}
          >
            Dépôt
          </Button>
        </div>
        <div className="col-sm-4">
          <Button 
            variant="contained" 
            color="primary" 
            onClick={this._handleOpen.bind(this, "rent_form")} 
            style={{ 
              width: "200px", 
              margin: "0 auto", 
              marginTop: 20 
            }}
          >
            Emprunt
          </Button>
        </div>
        <div className='col-sm-4'>
          <Button 
            variant="contained" 
            color="primary"
            onClick={this._handleOpen.bind(this, "refund_form")}  
            style={{ 
              width: "200px", 
              margin: "0 auto", 
              marginTop: 20 
            }}
          >
            Rembousement
          </Button>
        </div>
        
      </div>

          <div className="row">            
            <CustomTable />
            {/* <div style={{marginTop:20}}>
            <AccountForm />
            </div> */}

          </div>
          
        </div>
        
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={this.state.isOpen}
          className={classes.modal}
          onClose={this._handleClose.bind(this)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
              timeout: 500
          }}
          
        >
          {/* <Fade in={this.props.isOpen}> */}
            <div className={classes.paper}>
              {this._renderModalContent(content)} 
            </div>
          {/* </Fade> */}
        </Modal>
        
        
        

      </div>
    );
  }
}


