// Import Dependencies
  import React from 'react';
    // Import Router
    import { Route } from 'react-router-dom';

// Import Components
  import { 
    Home, 
    About, 
    Contact, 
    Navigation 
  } from './components';

// Styles
import './App.css';




const App = () => (
  <div>
    <Navigation />
    <Route path="/"         exact   component={Home}    />
    <Route path="/about"    exact   component={About}   />
    <Route path="/Contact"  exact   component={Contact} />
    
    
  </div>
);

export default App;
