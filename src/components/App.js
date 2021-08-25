import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="ui grid">
        <div className="two wide column"></div>
        <div className="thirteen wide column">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
