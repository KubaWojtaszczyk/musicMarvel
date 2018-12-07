import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';




import Home from "./components/Home";
import Marvel from "./components/About";
import More from "./components/More";
import Error from "./components/Error";
import Info from "./components/Info"
import Navigation from "./components/Navigation"



import './scass/main.scss';



class App extends Component {
  render() {
    return (
        <BrowserRouter >
          <div>
            <Navigation/>
              <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/marvel" component={Marvel}/>
                  <Route path="/more" component={More}/>
                  <Route path="/info" component={Info}/>
                  <Route component={Error}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
