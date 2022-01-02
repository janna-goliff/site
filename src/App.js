import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import IdentityRedesign from "./pages/IdentityRedesign/IdentityRedesign";
import WebDesignExercise1 from "./pages/WebDesignExercise1/WebDesignExercise1";
import DataViz1 from "./pages/DataViz1/DataViz1";
import LogoDesign1 from "./pages/LogoDesign1/LogoDesign1";
import AppDesign1 from "./pages/AppDesign1/AppDesign1";
import BeepboopWork from "./pages/BeepboopWork/BeepboopWork";
import DataPortraits from "./pages/DataPortraits/DataPortraits";
import WebAppDev1 from "./pages/WebAppDev1/WebAppDev1";
import FuturePiProject from "./pages/FuturePiProject/FuturePiProject";
import FunWork from "./pages/FunWork/FunWork";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/design/biennialredesign">
            <IdentityRedesign />
          </Route>
          <Route exact path="/design/webdesignexercise1">
            <WebDesignExercise1 />
          </Route>
          <Route exact path="/design/dataviz1">
            <DataViz1 />
          </Route>
          <Route exact path="/design/logodesign1">
            <LogoDesign1 />
          </Route>
          <Route exact path="/design/appdesign1">
            <AppDesign1 />
          </Route>
          <Route exact path="/webdev/beepboop">
            <BeepboopWork />
          </Route>
          <Route exact path="/webdev/treehouse">
            <WebAppDev1 />
          </Route>
          <Route exact path="/webdev/dataportraits">
            <DataPortraits />
          </Route>
          <Route exact path="/engineering/futurepiproject">
            <FuturePiProject />
          </Route>
          <Route exact path="/funstuff">
            <FunWork />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
