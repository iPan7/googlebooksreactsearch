import React from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import { Navbar} from "./components";
import {
  saved,
  search
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/saved" component={saved} />
      <Route path="/search" component={search} />
    </Router>
  )
}

export default App;