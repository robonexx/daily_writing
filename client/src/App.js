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

  const user = true; /* set true to be able to write article and if false you will be directed to sign up or login */

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
            {user ? <Write /> : <SignUp/>}
          </Route>
          <Route path="/login">
          {user ? <Home /> : <Login />}
          </Route>
          <Route path="/signup">
            {user ? <Home /> : <SignUp />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <SignUp/>}
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

// decided to do an fake json db and store the articles there


// to run db.json
// npx json-server --watch data/db.json --port 8000
