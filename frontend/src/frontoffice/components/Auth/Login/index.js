import React from "react";
import { connect } from "react-redux";

import Navbar from "app-js/frontoffice/components/Snippets/Navbar/index"
import LoginForm from "./LoginForm/index"


// import './style.local.css';


export default 
@connect((state, props) => ({}))
class LoginPage extends React.Component {
  componentWillMount() {
    document.title = 'Login'
  }


  render() {

    return (
      //<!-- Document Wrapper -->
      <div className="login_page">
        <Navbar />
        
        <h1>Login page !</h1>
        <LoginForm />

      </div>
    );
  }
}


