import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddDao from "./AddDao";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AddDao />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
