import React from 'react'

function TextError(props) {
  return (
    <div className="tx-danger">
      {props.children}
    </div>
  )
}

export default TextError;