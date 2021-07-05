import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";
import ContactsPage from "../components/ContactsPage";
import PageNotFound from "../components/PageNotFound";
import PortfolioProject1 from "../components/PortfolioProject1";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioProject1} />
        <Route path="/contacts" component={ContactsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
