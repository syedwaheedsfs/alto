import './App.css';
import Featurepage from "./components/featurePage"
import { dynamicimports } from "./imports";
const { Router, Switch, Route } = dynamicimports;

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/help/:section/:heading/:item"
          render={() => <Featurepage />}
        />
        <Route path="/help/:section/:heading" render={() => <Featurepage />} />
        <Route path="/help/:section" render={() => <Featurepage />} />

        <Route exact path="/" render={() => <Featurepage />} />
        <Route render={() => <div>this is page for search suggestions</div>} />
      </Switch>
    </Router>
  );
}

export default App;
