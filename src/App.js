import './App.css';
import React from "react";
import { Link, Routes, Route } from "react-router-dom"
import MyRouter1 from './router/router1';
import MyRouter2 from './router/router2';
import MyRouter5 from './router/router5'


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
          <Link to="/MyRouter1/MyRouter4">/MyRouter1/MyRouter4</Link>
        </li>
        <li>
          <Link to="/MyRouter1/MyRouter3">/MyRouter1/MyRouter3</Link>
        </li>
      </ul>
      <Routes>
      <Route path="" Component={MyRouter1}></Route>
        <Route path="MyRouter1/*" Component={MyRouter1}></Route>
        <Route path="MyRouter2" Component={MyRouter2}></Route>
        <Route path="*" Component={MyRouter5}></Route>
      </Routes>
    </div>

  );
}

export default App;

//嵌套路由
