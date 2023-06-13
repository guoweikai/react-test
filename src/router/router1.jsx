import React, { PureComponent } from "react";
import MyRouter3 from "./router3";
import MyRouter4 from "./router4";
import { Routes, Route } from "react-router-dom";

export default class MyRouter1 extends PureComponent {
  render() {
    return (
      <div>
        <div> myRouter1</div>
        <Routes>
          <Route path="MyRouter3" Component={MyRouter3}></Route>
          <Route path="MyRouter4" Component={MyRouter4}></Route>
        </Routes>
      </div>
    );
  }
}
