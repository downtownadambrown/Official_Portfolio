import React from 'react';
import './App.css';
import TabPanel from './TabPanel';
import Intro from './Intro';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

const AppRouter = () => {
    const location = useLocation();

    return (
        <div className="app">
            <Switch location={location}>
                <Route path="/" exact>
                    <Intro />
                </Route>
                <Route path="/home">
                    <TabPanel />
                </Route>
            </Switch>
        </div>
    );
};

const App = () => (
    <Router>
        <AppRouter />
    </Router>
);

export default App;
