import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
