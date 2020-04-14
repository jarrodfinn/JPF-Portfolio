import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "./App.css";

/* Components */
import Navigation from "../components/Navigation";

/* Pages */
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function App() {
  return (
    <>
      {/* Tells React Router that we're using it in the browser */}
      <BrowserRouter>
        {/* Allow us to show the navigation for every page */}
        <Navigation />
        <Switch>
          <Container>
            <Route path="/about" name="About" component={About} />
            <Route path="/contact" name="Contact" component={Contact} />
          </Container>
        </Switch>
      </BrowserRouter>
    </>
  );
}
