import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AddDao from "./AddDao";
import Sidebar from "./Sidebar";
import OrganizationPage from "./OrganizationPage";
import UpdateDao from "./UpdateDao";
import Learn from "./Learn";
import Sponsor from "./Sponsor";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="ui grid">
        <div className="two wide column"></div>
        <div className="thirteen wide column">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-dao" component={AddDao} />
            <Route path="/edit-dao/:id" component={UpdateDao} />
            <Route path="/dao/:id" component={OrganizationPage} />
            <Route path="/learn" component={Learn} />
            <Route path="/sponsor" component={Sponsor} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
