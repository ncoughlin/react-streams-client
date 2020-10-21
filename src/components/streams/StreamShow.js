import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    // de-structure stream id variable
    const { id } = this.props.match.params;

    // get stream data
    this.props.fetchStream(id);

    // attempt to build player
    this.buildPlayer();
  }

  componentDidUpdate() {
    // attempt to build player if not successful
    // on initial load
    this.buildPlayer();
  }

  // clean up player if user leaves viewing page
  componentWillUnmount() {
    this.player.destroy();
  }

  // do not build player if player already exists
  // or stream has not been fetched
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    // de-structure stream id variable
    const { id } = this.props.match.params;

    // create flv player
    this.player = flv.createPlayer({
      type: "flv",
      // url specified in RTMP setup
      url: `http://localhost:2000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
