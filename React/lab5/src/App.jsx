import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { MoviesProvider } from "./Context/MoviesContext";
import Details from "./Pages/Details";

import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./Pages/Home"));
const AddMovie = lazy(() => import("./Pages/Add"));
const Contact = lazy(() => import("./Pages/Contact"));

const App = () => {
  return (
    <MoviesProvider>
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
            <Route path="/contact-us" element={<Contact />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </Suspense>
    </MoviesProvider>
  );
};

export default App;
