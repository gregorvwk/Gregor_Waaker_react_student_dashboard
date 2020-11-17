import React from "react"
import './App.css';
import Home from "./Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StudentPage from "./StudentPage"


function App(props) {
  const studentNames = props.names.map(name => {
    return(
      <li key={name}>
        <Link to="/StudentPage">{name}</Link>
      </li>
    )
  })
  const studentRouting = props.names.map(name => {
    return(
      <Route path="/StudentPage" key={name}>
        <StudentPage name={name} data={props.data}/>
      </Route>
    )
  })

return(
  <Router>
        <div>
          <nav>
            <ul>
              <li key="home">
                <Link to="/">Home</Link>
              </li>
              {studentNames}
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/" key="home">
                <Home data={props.data}/>
              </Route>
                {studentRouting}
            </Switch>
          </main>
        </div>
      </Router>
  );
}

export default App;
