import React from 'react';
import Footer from './Footer';
import Header from './Header';

const AuthPage = (props) => {
  return (
    <div className="content content-fixed content-auth">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default AuthPage;