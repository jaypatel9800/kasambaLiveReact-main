import React from 'react'
import MainPageNew from "./components/MainPageNew"
import HostFrame from './components/HostLive'
import FinalPage from './components/FinalPage'
import AudianceFrame from './components/AudienceLive'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route component={MainPageNew} path="/" exact/>
                <Route component={HostFrame} path="/HostLive"/>
                <Route component={AudianceFrame} path="/AudienceLive" />
                <Route component={FinalPage} path="/Final"/>
            </Switch>
        </div>
        </Router>
    )
}

export default App
