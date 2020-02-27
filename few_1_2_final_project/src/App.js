import data from './data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import PageContent from './PageContent';
import Project from './Project';
import SelectedProject from './SelectedProject.js';


function App() {
 
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <PageFooter />
        <Route exact path='/' component={PageContent} />
        <Route path='/:index' component={SelectedProject} />
        </div>
    </Router>
  );
    }

export default App;
