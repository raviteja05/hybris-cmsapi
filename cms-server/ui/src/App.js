import React from 'react';
import {Header} from './components'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import PageComponentsView from './components/PageComponents'

function App() {
  return (
    <div className="App">
      
      <Router>
      
      <Route exact path="/app/page-components"><Header/><PageComponentsView/></Route>
      </Router>
    </div>
  );
}

export default App;
