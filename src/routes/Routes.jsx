import { Switch, Route } from "react-router";
import AboutPage from "../components/page/AboutPage";
import ArchivePage from "../components/page/ArchivePage";
import MainPage from "../components/page/MainPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/archive">
        <ArchivePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  );
}