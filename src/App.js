import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/Grocery"
            element={
              <Suspense fallback={<h1>Loading....</h1>}>
                <Grocery />
              </Suspense>
            }
          ></Route>
           <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/restaurant/:rid" element={<RestaurantMenu />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
