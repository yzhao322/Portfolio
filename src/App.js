import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home";
import portfolio from "./pages/portfolio";
import contact from "./pages/contact";
import Navbars from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbars />
        <Wrapper>
          <Route exact path={["/", "/home"]} component={home} />
          <Route exact path="/portfolio" component={portfolio} />
          <Route exact path="/contact" component={contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
// "start": "node server.js",
// "react:start": "react-scripts start",
export default App;
