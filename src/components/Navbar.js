import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default class Navbar extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }
constructor(props) {
  super(props);
  this.state = { input: '' };
}


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">DailySpark</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link active " to="/business">business</Link></li>
        <li className="nav-item"><Link className="nav-link active " to="/entertainment">entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link active " to="/general">general</Link></li>
        <li className="nav-item"><Link className="nav-link active " to="/health">health</Link></li>
        <li className="nav-item"><Link className="nav-link active " to="/science">science</Link></li>
        <li className="nav-item"><Link className="nav-link active " to="/sports">sports</Link></li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-flex" >
      <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>





    </div>
  </div>
</nav>
      </div>
    )
  }
}
 