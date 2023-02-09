import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <NewsComponent
                  key="general"
                  pageSize={12}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <NewsComponent
                  key="business"
                  pageSize={12}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <NewsComponent
                  key="entertainment"
                  pageSize={12}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <NewsComponent
                  key="health"
                  pageSize={12}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <NewsComponent
                  key="science"
                  pageSize={12}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <NewsComponent
                  key="sports"
                  pageSize={12}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <NewsComponent
                  key="technology"
                  pageSize={12}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
