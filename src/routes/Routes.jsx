import { Switch, Route } from "react-router";

export default function Routes() {
  return (
    <Switch>
      <Route path="/archive">
        <div>Archive Page</div>
      </Route>
      <Route path="/about">
        <div>About Page</div>
      </Route>
      <Route path="/">
        <div>Main Page</div>
      </Route>
    </Switch>
  );
}
