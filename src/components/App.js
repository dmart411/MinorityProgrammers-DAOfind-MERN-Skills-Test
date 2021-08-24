import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Leaderboard from "./Leaderboard";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Leaderboard />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
