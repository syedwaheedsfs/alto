import './App.css';
import Featurepage from "./components/featurePage"
import IframePage from './components/IframePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  // return <Featurepage />;
  return (

  <Router>
  <Switch>
    {/* 1) Most specific: your help path */}
    <Route
      path="/help/:section/:heading/:item"
      render={() => (
        <Featurepage>
          <IframePage />
        </Featurepage>
      )}
    />

    {/* 2) Fallback “home” — exact so it only matches “/” */}
    <Route
      exact
      path="/"
      render={() => <Featurepage />}
    />

    {/* 3) (Optional) 404 catch-all */}
    <Route render={() => <div>404: Not found</div>} />
  </Switch>
</Router>
  );
}

export default App;
