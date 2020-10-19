import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";

class Modal extends React.Component {
  state = {
    toDashboard: false,
  }

  handleClick = () => {
    this.setState(() => ({
      toDashboard: true
    }))
  }


  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }

    return ReactDOM.createPortal(
      
      <div
        className="ui dimmer modals visible active"
        onClick={ this.handleClick }
      >
        <div className="ui standard modal visible active">
          <div className="header">Delete Stream</div>
          <div className="content">
            Are you sure you want to delete this stream?
          </div>
          <div className="actions">
            <button className="ui primary button">Delete</button>
            <button className="ui button">Cancel</button>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
  
};

export default Modal;
