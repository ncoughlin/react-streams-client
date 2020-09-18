import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  renderInput({ input, label }) {
    console.log(input)
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="Title" component={this.renderInput} label="Enter Title: " />
        <Field name="Description" component={this.renderInput} label="Enter Description: " />
      </form>
    );
  }
}

export default reduxForm({
  form: "Create Stream",
})(StreamCreate);
