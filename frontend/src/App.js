import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./views/pages/Homepage/";
import SearchResults from "./views/pages/SearchResults/SearchResults";
import "./App.css";
import OrderBy from "./views/components/OrderBy/OrderBy";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/searchresults">
            <SearchResults />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
