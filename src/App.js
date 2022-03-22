import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import './styles/App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
   
    <div className="App">
    <Router>
    <Header />
    <div className="app__body">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path='/projectdetails/:projectId' component={ProjectDetail } />
        <Route exact path="/contact" component={Contact} />
        </Switch>
      
      </div>
      <Footer />
      </Router>
     
    </div>
   
  );
}

export default App;
