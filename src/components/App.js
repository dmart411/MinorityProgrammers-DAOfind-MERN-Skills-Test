import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">DAO Find</Route>
      </Switch>
    </Router>
  );
}

export default App;
