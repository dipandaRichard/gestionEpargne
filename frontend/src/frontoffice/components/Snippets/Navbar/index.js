import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import './style.local.css';
import urls from "../../../routes/urls";


export default
@connect((state, props) => ({}))
class Navbar extends React.Component {


  render() {
    var appName = "My App"

    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "grey" }}>
          <div className="container">
            <a className="navbar-brand" href="#">
              { appName }
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                    {/* <a className="nav-link" href="#">
                      Mes cours
                    </a> */}
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={urls.OPERATIONS}>Operations</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={urls.DASHBOARD}>Tableau de bord</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={urls.ALLACCOUNTS}>Tous Les Comptes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={urls.MEMBER}>Tous les membres</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={urls.SINGLE_MEMBER}>Membre</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user text-white"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to={urls.LOGIN}>Login</Link>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-bell text-white"  style={{ paddingRight: "5px" }}></i>
                    < span className="badge badge-light" style={{ padding: "5px" }}>5</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fas fa-sign-out-alt text-white"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
