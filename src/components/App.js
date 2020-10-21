import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:id/delete" exact component={StreamDelete} />
            <Route path="/streams/:id/edit" exact component={StreamEdit} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
