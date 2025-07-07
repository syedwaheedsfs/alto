import './App.css';
import Featurepage from "./components/featurePage"
import IframePage from './components/IframePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  // return <Featurepage />;
  return (
    <Router>
      <Switch>
        <Route
          path="/help/:section/:heading/:item"
          render={() => <Featurepage />}
        />

        <Route exact path="/" render={() => <Featurepage />} />
        <Route render={() => <div>404: Not found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
