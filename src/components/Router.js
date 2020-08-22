import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import EditForm from "../components/EditForm";
import Register from "./Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/edit/:id" component={EditForm} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
};

export default Router;
