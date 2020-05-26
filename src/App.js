import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage"
import ManagePizzaPage from "./Components/ManagePizzaPage"

const App = () => {
  return (
    <>
      <h1>HomeSlice</h1>
      <Route path="/" exact component={HomePage}/>
      <Route path="/pizza" component={ManagePizzaPage}/>  
    </>
  );
};
export default App;
