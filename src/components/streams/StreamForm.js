import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";



class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="ui pointing label">{error}</div>;
    }
  }

  // must be arrow function so that context of this is bound for this.renderError
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  // submission action is prop from parent component
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    // check for successful form submission
    // redirect to index if true
    if (this.props.submitSucceeded === true) {
      return <Redirect to="/" />;
    }

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

// form wrapper
export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);



