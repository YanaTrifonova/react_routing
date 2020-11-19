import './App.css';
import React from "react";
import { Switch, Route } from 'react-router';

import DiscoverCocktails from "./pages/DiscoverCocktails";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <Switch>
                <Route path="/discover" component={DiscoverCocktails} />
                <Route path="/about" component={AboutUs} />
                <Route path="/" component={HomePage} />
            </Switch>
        </div>
    );
}

export default App;
