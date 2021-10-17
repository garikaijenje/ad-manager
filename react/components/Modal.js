import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({ title, children, submitText, cancelText, submitClass, submitDisabled, onSubmit, onCancel, id, isSubmitting }) => {

  const submitRef = useRef(null);

  useEffect(() => {
    submitRef.current.classList.add(submitClass);
  }, []);

  return (
    <div className="demo-modal-static">
      <div className="modal" tabIndex="-1" id={id} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{title}</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCancel}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onCancel} data-dismiss="modal">{cancelText}</button>
              <button type="button" ref={submitRef} disabled={submitDisabled} className="btn" onClick={onSubmit}>
                {isSubmitting ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading... </> : submitText }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  buttonText: "Submit",
  cancelText: "Cancel",
  submitClass: "btn-primary",
  submitDisabled: false,
  isSubmitting: false,
  onCancel: null
};

Modal.propTypes = {
  buttonText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  submitClass: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default Modal;