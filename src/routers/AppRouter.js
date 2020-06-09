import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header/"; // Reformatted
import SiteMap from "../components/SiteMap";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage/"; // Reformatted
import ViewCart from "../components/Products/ShoppingCart/ViewCart"; // Reformatted
import BrowseProducts from "../components/Products/BrowseProducts"; // Reformatted
import ProductDetailsPage from "../components/Products/ProductDetails"; // Reformatted
import TopNav from "../components/Navs/TopNav/"; // Reformatted
import ToursPage from "../components/Tours";
import ShippingPage from "../components/Shipping"; // Reformatted
import ContactPage from "../components/ContactPage"; // Reformatted
import MailingList from "../components/MailingList";
import TermsAndConditionsPage from "../components/TermsAndConditions";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route exact path="/products" component={BrowseProducts} />
          <Route
            path="/products/:sku"
            component={ProductDetailsPage}
          >
          </Route>
          <Route path="/view-cart" component={ViewCart} />
          <Route path="/tours" component={ToursPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/mailing-list" component={MailingList} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/terms-and-conditions" component={TermsAndConditionsPage} />
        </Switch>
        <SiteMap />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
