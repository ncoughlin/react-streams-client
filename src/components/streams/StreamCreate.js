import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  renderInput(formProps) {
    console.log({ input });
    return (
      <input {...input} />
    );
  }

  render() {
    return (
      <form>
        <Field name="Title" component={this.renderInput} />
        <Field name="Description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "Create Stream",
})(StreamCreate);
