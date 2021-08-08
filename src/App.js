import './App.scss';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ShowArticle from './pages/showArticle'
import Write from './pages/Write'
import Settings from './pages/Settings';
import Login from './pages/Login'
import SignUp from './pages/SignUp'


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
            <Login />
          </Route>
          <Route path="/signup">
          <SignUp />
          </Route>
          <Route path="/settings">
          <Settings />
          </Route>
          <Route path="/article/:articleId">
            <ShowArticle />
          </Route>
   
        </Switch>
    </div>
    </Router>
  );
}

export default App;
