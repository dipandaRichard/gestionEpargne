import React from "react";
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"


import './style.local.css';


export default 
@connect((state, props) => ({}))
class Accounts extends React.Component {
  componentWillMount() {
    document.title = 'Home'
  }


  render() {
    console.log("PROPPPPPPPPPPPPPPPPPP", this.props)

    return (
      //<!-- Document Wrapper -->
      <div className="accounts">
        <Navbar />
        
        <p>porte d'entrée du projet gestionEpargne !</p>

      </div>
    );
  }
}


