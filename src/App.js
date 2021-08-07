import './App.scss';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Write from './pages/Write'


function App() {
  return (

    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/write">
           <Write />
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
