import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Questions from "./features/Questions/Questions";
import QuestionDetail from "./features/QuestionDetail/QuestionDetail";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Questions />
        </Route>
        <Route path="/question/:id">
          <QuestionDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
