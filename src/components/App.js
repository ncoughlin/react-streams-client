import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <h1>Index</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/pagetwo">Page Two</Link>
      </p>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <h1>Page Two</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/pagetwo">Page Two</Link>
      </p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
