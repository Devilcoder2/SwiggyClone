import { Outlet } from "react-router";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
