import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={props.onDismiss}
    >
      <div
        className="ui standard modal visible active"
        // prevent event bubbling
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.description}</div>
        <div className="actions">{props.buttons}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
