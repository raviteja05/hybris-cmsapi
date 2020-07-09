import React from 'react';
import {Header} from './components'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import PageComponentsView from './components/PageComponents'
import ComponentDetailsView from './components/ComponentDetailsView'

function App() {
  return (
    <div className="App">
      
      <Router>
      
      <Route exact path="/app/page-components"><Header/><PageComponentsView/></Route>
      <Route exact path="/app/components/:siteId/:componentUuid"><Header/><ComponentDetailsView/></Route>
      </Router>
    </div>
  );
}

export default App;
