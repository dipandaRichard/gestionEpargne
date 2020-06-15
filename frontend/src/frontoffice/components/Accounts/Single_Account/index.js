import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'


import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import RegisterForm from "app-js/frontoffice/components/Snippets/RegisterForm/index"
import CustomTable from "app-js/frontoffice/components/Snippets/CustomTable/index"

import Operations from "../../Snippets/Operations";
import BalanceGrid from "../../Snippets/BalanceGrid";



// import './style.local.css';


export default 
@connect((state, props) => ({}))
class Single_Account extends React.Component {
  componentWillMount() {
    document.title = 'Single-Account'
  }


  render() {

    return (
      //<!-- Document Wrapper -->
      <div className="single_account">
        <Navbar />
        
        <div className="row" style={{ marginBottom: 30, marginTop:30, marginLeft:100}}>
            <div className="">
              <Button
                variant="contained"
                color='primary'
                
              >
                <i className="fa fa-plus"></i> &nbsp;
                Ajouter un Membre
              </Button>
            </div>
          </div>
       
        <div className="container" style={{ paddingTop: 30 }}>
         <CustomTable />
        </div>
        

      </div>
    );
  }
}


