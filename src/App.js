import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Properties from './components/Properties';
import PropertyDetails from './components/PropertyDetails';
import Geolocation from './components/Geolocation';
import Navbar from './components/Headers/NavBar';
import TopBar from './components/Headers/TopBar';


import { Provider } from 'react-redux';
import store from './store';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const basenameUrl = process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL;

class App extends Component 
{
  componentWillMount() {
    fetch('https://api.ipify.org?format=jsonp?callback=?', {
      method: 'GET',
      headers: {},
    })
    .then(res => {
      return res.text()
    }).then(ip => {
      console.log('ip', ip);
    });
  }
  
  render() {
   
    return (
      <Provider store={store}>
        <div className="App">
          <TopBar />
          {/* <Topbar /> */}
          <Navbar />
          
          <AppNavbar />
          <Router basename={basenameUrl}>
            <Switch>
              {/* Init Flow */}
              <Route exact path="/" component={Home} />
              {/* Property Details */}
              <Route exact path="/properties" component={Properties} />
              {/* Single Property Details */}
              <Route exact path="/properties-details/:id" component={PropertyDetails} />
              {/* Geolocation */}
              <Route exact path="/geolocation" component={Geolocation} />
            </Switch>
          </Router>
        </div>
      </Provider>
      
    );
  }
}

// class App extends Component 
// {
//     render() {
//       return (
        
//           <div className="App">
//             <AppNavbar />
//             <h1>Hello</h1>
//             <PropertyList />
//           </div>
        
        
//       );
//     }
// }

export default App;
