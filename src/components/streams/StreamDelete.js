import React, { useEffect } from "react";

import Modal from "../Modal";

const StreamDelete = ({ history }) => {
  useEffect(() => {
    
  }, [])

  // navigate to index
  const onDismiss = () => history.replace('/')

  const buttons = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button" onClick={onDismiss}>Cancel</button>
    </>
  );

  return (
    <>
      <Modal
        title="Delete Stream"
        description="Are you sure you want to delete this stream?"
        buttons={buttons}
        onDismiss={onDismiss}
      />
    </>
  );
};

export default StreamDelete;
