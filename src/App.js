import React from "react";
import { render } from "react-dom";

import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
