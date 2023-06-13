import './App.css';
import React from "react";
import { Link, Routes, Route } from "react-router-dom"
import MyRouter1 from './router/router1';
import MyRouter2 from './router/router2';
import MyRouter3 from './router/router3';
import MyRouter4 from './router/router4';
import MyComponent from './component/MyComponent';
import MyRef from "./component/MyRef"


function App() {
  return (

    <div className="App">
      <ul>
        <li>
          <Link to="/MyRouter1">MyRouter1</Link>
        </li>
        <li>
          <Link to="/MyRouter2">MyRouter2</Link>
        </li>
        <li>
          <Link to="/MyRouter3">MyRouter3</Link>
        </li>
        <li>
          <Link to="/MyRouter4">MyRouter4</Link>
        </li>
      </ul>
      <Routes>
        <Route path="MyRouter1" Component={MyRouter1}></Route>
        <Route path="MyRouter2" Component={MyRouter2}></Route>
        <Route path="MyRouter3" Component={MyRouter3}></Route>
        <Route path="MyRouter4" Component={MyRouter4}></Route>
      </Routes>
    </div>

  );
}

export default App;
