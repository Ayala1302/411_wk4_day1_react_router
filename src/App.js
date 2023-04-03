import React from 'react';
import Navigation from './components/Navigation'
import './App.css'

// Write imports for Router & BrowserRouter here //
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    // Wrap the Router component in the BrowserRouter component here //
    <BrowserRouter>
    <Navigation />
    <Router />
    </BrowserRouter>
  );
}

export default App;
