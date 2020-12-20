import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import PlanYourTrip from "./Components/Pages/PlanYourTrip";
import AboutUs from "./Components/Pages/AboutUs";
import SafetyMeasures from "./Components/Pages/SafetyMeasures";
import Travel from "./Components/Pages/Travel";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Travel} />
          <Route path="/home" exact component={Home} />
          <Route path="/plan-your-trip" exact component={PlanYourTrip} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/safety-measures" exact component={SafetyMeasures} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
