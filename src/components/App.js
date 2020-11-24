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
        <Link to={`/StudentPage/${name}`}style={{ textDecoration: 'none' }} className="menu-item">{name}</Link>
      </li>
    )
  })
  const studentRouting = props.names.map(name => {
    return(
        <Route path={`/StudentPage/${name}`} key={name}>
          <StudentPage name={name} data={props.data}/>
        </Route>
    )
  })
return(
  <Router>
        <div>
          <nav className="nav-menu">
            <ul style={{ listStyle: "none" }}>
              <li key="home">
                <Link to="/" style={{ textDecoration: 'none' }} className="menu-item">Home</Link>
              </li>
              <li>Students</li>
                <ul style={{ listStyle: "none" }}>
                 {studentNames}
                </ul>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route exact path="/" key="home">
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
