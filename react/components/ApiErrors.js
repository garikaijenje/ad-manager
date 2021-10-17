import React from 'react';

const ApiErrors = ({ errors }) => {
  return (
    <>
      {errors.length > 0 && errors.map((error, index) => (
        <div key={index} className="alert alert-danger mt-4" role="alert">
          {error.error}
        </div>
      ))}
    </>
  );
};

export default ApiErrors;