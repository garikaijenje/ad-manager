import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Page = (props) => {
  return (
    <>
    <div className="content content-fixed">
      <div className="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
          {props.children}
      </div>
    </div>
    </>
  );
};

export default Page;