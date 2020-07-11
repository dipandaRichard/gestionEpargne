import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button'


import Navbar from "app-js/frontoffice/components/Snippets/Navbar"
import CustomTable from "app-js/frontoffice/components/Snippets/CustomTable/index"





// import './style.local.css';


export default 
@connect((state, props) => ({}))
class Member extends React.Component {
  componentWillMount() {
    document.title = 'Member'
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


