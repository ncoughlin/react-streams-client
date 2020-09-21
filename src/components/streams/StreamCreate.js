import React, { Component } from "react";
import { clearSubmitErrors, Field, reduxForm } from "redux-form";
class StreamCreate extends Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
      <div className="ui pointing label">
        {error}
      </div>
      );
    }
  }

  // must be arrow function so that context of this is bound for this.renderError
  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title: "
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description: "
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "Create Stream",
  validate: validate,
})(StreamCreate);
