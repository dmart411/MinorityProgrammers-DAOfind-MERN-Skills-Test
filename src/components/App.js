import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
