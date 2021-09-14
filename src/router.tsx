import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import City from "./pages/citydetails";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:cityName" component={City} />
    </Switch>
  </Router>
);

export default Routes;
