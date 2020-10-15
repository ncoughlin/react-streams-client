import React, { Component } from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm.js"
import { createStream } from "../../actions";
class StreamCreate extends Component {
  

  // send post request to api server on submit
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <>
        <h3>Create Stream:</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default connect(null, { createStream })(StreamCreate)
