import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* Home */}

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        {/* Header */}
        {/* Banner */}
        {/* Search */}
        {/* Cards */}
        {/* Footer */}

        {/* SearchPage */}
      </Router>
    </div>
  );
}

export default App;
