import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm.js"

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // the actions that we want to use when form is submitted
  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render() {
    // if we have not retrieved stream yet use loading animation
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <> 
        <h3>Edit Stream:</h3>
        <StreamForm 
          onSubmit={this.onSubmit} 
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description            
          }} 
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // the stream that matches the ID in the URL
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
