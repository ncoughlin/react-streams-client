import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    // if we have not retrieved stream yet use loading animation
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <> 
        <h1>{this.props.stream.title}</h1>
        <p>{this.props.stream.description}</p>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // the stream that matches the ID in the URL
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
