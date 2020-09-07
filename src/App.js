import React from "react";
import "./App.css";
import Header from "./Header";
import Examples from "./Examples";
import Testimonials from "./Testimonials";
import Work from "./Work";
import Service from "./Service";
import Home from "./Home";
import { BrowserRouter, withRouter, Route } from "react-router-dom";
import { compose } from "redux";
import { Provider } from "react-redux";
import store from "./redux-store";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className={"wrapper"}>
        <header>
          <Header />
        </header>
        <main>
          <Route path="/home" render={() => <Home />} />
          <Route path="/services" render={() => <Service />} />
          <Route path="/work" render={() => <Work />} />
          <Route path="/testimonials" render={() => <Testimonials />} />
          <Route path="/examples" render={() => <Examples />} />
          <Route exact path="/" render={() => <Home />} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

let AppContainer = compose(withRouter(App));

let AppMAin = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default AppMAin;
