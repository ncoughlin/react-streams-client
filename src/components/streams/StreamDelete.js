import React, { useEffect } from "react";
import { connect } from "react-redux";

import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = ({ history, match, stream, fetchStream, deleteStream }) => {
  // we fetch stream for component isolation
  // cannot rely on stream data to already be in state
  useEffect(() => {
    const fetch = async () => {
      fetchStream(match.params.id);
    };
    fetch();
  }, []);

  // navigate to index
  const onDismiss = () => history.replace("/");
  // delete stream and route home
  const onDelete = () => {
    deleteStream(stream.id);
    history.replace("/");
  }

  const buttons = (
    <>
      <button className="ui button negative" onClick={onDelete}>
        Delete
      </button>
      <button className="ui button" onClick={onDismiss}>
        Cancel
      </button>
    </>
  );

  // if we have not retrieved stream yet use loading animation
  if (!stream) {
    return <div>Loading...</div>;
  } else {
    console.log(stream);
  }

  return (
    <>
      <Modal
        title="Delete Stream"
        description={`Are you sure you want to delete stream: `}
        buttons={buttons}
        onDismiss={onDismiss}
      />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
