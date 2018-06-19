import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import New from "./new.js";
import Comments from "./comments.js";
import Show from "./show.js";
import Ask from "./ask.js";
import Jobs from "./jobs.js";
import Submit from "./submit.js";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/new" component={New} />
          <Route path="/comments" component={Comments} />
          <Route path="/show" component={Show} />
          <Route path="/ask" component={Ask} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/submit" component={Submit} />
        </Switch>
      </main>
    );
  }
}

export default Main;
