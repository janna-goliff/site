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
import PhotoAvgDataViz from "./pages/PhotoAvgDataViz/PhotoAvgDataViz";
import FunWork from "./pages/FunWork/FunWork";
import PennInTouchRedesign from "./pages/PennInTouchRedesign/PennInTouchRedesign";
import AppDesignClimbr from "./pages/AppDesignClimbr/AppDesignClimbr";
import VRRoom from "./pages/VRRoom/VRRoom";
import BeepboopUserFlow from "./pages/BeepboopUserFlow/BeepboopUserFlow";
import DataExploration1 from "./pages/DataExploration1/DataExploration1";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/site/about">
            <About />
          </Route>
          <Route exact path="/site/design/biennialredesign">
            <IdentityRedesign />
          </Route>
          <Route exact path="/site/design/webdesignexercise1">
            <WebDesignExercise1 />
          </Route>
          <Route exact path="/site/design/dataviz1">
            <DataViz1 />
          </Route>
          <Route exact path="/site/design/logodesign1">
            <LogoDesign1 />
          </Route>
          <Route exact path="/site/design/appdesign1">
            <AppDesign1 />
          </Route>
          <Route exact path="/site/design/photoavgdataviz">
            <PhotoAvgDataViz />
          </Route>
          <Route exact path="/site/design/pennintouchredesign">
            <PennInTouchRedesign />
          </Route>
          <Route exact path="/site/design/beepboopuserflow">
            <BeepboopUserFlow />
          </Route>
          <Route exact path="/site/design/appdesignclimbr">
            <AppDesignClimbr />
          </Route>
          <Route exact path="/site/design/vrroom">
            <VRRoom />
          </Route>
          <Route exact path="/site/webdev/beepboop">
            <BeepboopWork />
          </Route>
          <Route exact path="/site/webdev/treehouse">
            <WebAppDev1 />
          </Route>
          <Route exact path="/site/webdev/dataportraits">
            <DataPortraits />
          </Route>
          <Route exact path="/site/engineering/futurepiproject">
            <FuturePiProject />
          </Route>
          <Route exact path="/site/engineering/dataexploration1">
            <DataExploration1 />
          </Route>
          <Route exact path="/site/funstuff">
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
