import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import SearchPage from "./pages/Search";
import Sidebar from "./components/sidebar/Sidebar";
import RecommendedVideos from "./components/recommended/RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
        <Route path="/search/:searchTerm">
            <div className="app-page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app-page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
