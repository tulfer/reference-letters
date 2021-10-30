import './App.css';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login'
import Nav from './components/nav'
import CreateLetter from './pages/create-letter';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create-letter">
            <CreateLetter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
