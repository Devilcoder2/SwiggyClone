import { Outlet } from "react-router";

import Header from "./Components/Header";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
