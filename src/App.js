
import './App.css';
import { Route, Switch } from "react-router-dom"
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Userlist from './components/Userlist';
import UserDetail from './components/UserDetail';
import Login from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <h3>Contact Me Page</h3>
        </Route>
        {/* =================================== */}
        <Route exact path="/users">
          <Userlist />
        </Route>
        <PrivateRoute exact path="/user/:id">
          <UserDetail />
        </PrivateRoute>
        {/* ==================================== */}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>404 Page not found</Route>
      </Switch>
    </div>
  );
}

export default App;