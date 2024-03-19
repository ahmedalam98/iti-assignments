import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./store";

const Home = lazy(() => import("./Pages/Home"));
const AddMovie = lazy(() => import("./Pages/Add"));
const Details = lazy(() => import("./Pages/Details"));
const Favourites = lazy(() => import("./Pages/Favourites"));

const App = () => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        }
      >
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Details />} />
            <Route path="/add-movie" element={<AddMovie />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
