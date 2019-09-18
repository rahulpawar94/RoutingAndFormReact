import React from 'react';
import './App.css';
import './Contact.css'
import Menu from './Menu';
import About from './About';
import Contact from './Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Menu />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const Home = () => {
    return (
        <div className="contactstyle">
            <h2>Welcome to Home Page.</h2>
        </div>
    )
}
export default App;
