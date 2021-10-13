import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import { GlobalContext } from '../GlobalContext';

const Header = ({title, active}) => {

const { logout } = useContext(GlobalContext);

const activeLink = (identifier) => {
  let classes = "btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5";

  if(identifier === active) classes += " active-link";

  return classes;
}

  return (
    <>
      <center><img src="/logo.jpg" style={{maxWidth:'100%',marginBottom:30}}/></center>
      <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
          <h1 className="mg-b-0 tx-spacing--1">{title}</h1>
        </div>
        <div className="d-none d-md-block">
          <Link to="/" className={activeLink("dashboard")}>Dashboard</Link>
          <Link to="/slots" className={activeLink("slots")}>Slots</Link>
          <Link to="/ads" className={activeLink("ads")}>Ads</Link>
          <button onClick={() => logout()} className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5" style={{backgroundColor:'#000', borderColor: '#000'}}><i data-feather="link" className="wd-10 mg-r-5"></i> Logout</button>
        </div>
      </div>
    </>

  );
};

// Header.defaultProps = {
//   title: "Dashboard"
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired
};

export default Header;