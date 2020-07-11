import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'

import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import { withStyles } from '@material-ui/core/styles';
import RegisterForm from "../../Snippets/RegisterForm";
import Operations from "../../Snippets/Operations";
import AccountForm from "../../Snippets/AccountForm";
import BalanceGrid from "../../Snippets/BalanceGrid";
import DepositForm from "../../Snippets/Operations/DepositForm";
import RefundForm from "../../Snippets/Operations/RefundForm";
import AddAccount from "../../Snippets/AddAccount";
import { default as AntdModal} from 'antd/lib/modal';
import Table from "../../Snippets/EditableTable"


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

    const columns = [
      { title: 'Titre', field: 'title' },
      { title: 'Slug', field: 'slug' },
      { title: 'Montant', field: 'montant' },
      { title: 'Interet', field: 'interet' },
    ];
    const title = "Tous  les compes" 
    const datas = [
      { title: 'Groupe 1', slug: 'groupe-1' },
      { title: 'Groupe 2', slug: 'groupe-2' },
    ]

    return (
      //<!-- Document Wrapper -->
      <div className="all_accounts">
        <Navbar />
        <div className="container">
          <Table tableTitle={title} tableColumns={columns} tableDatas={datas} />
        </div>

      </div>
    );
  }
}


