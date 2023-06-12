import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Orders from './pages/Orders'

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/peditos" Component={Orders}/>
            </Routes>
        </Router>
    )
}
export default App;