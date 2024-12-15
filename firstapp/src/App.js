import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Contacts1 from "./Pages/Contacts1";
import About from "./Pages/About";
import Services from "./Pages/Services";

import "./App.css";
import Rooms from "./Pages/Rooms";
import DefaultPage from "./Pages/DefaultPage";
import Gallery from "./Pages/Gallery";
import Blogs from "./Pages/Blogs";

const App = () => {
  // Every function is basically a component

  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
  return (
    <>
      <Navbar1 />

      <Routes>
        <Route index element={<DefaultPage />} />

        <Route path="/contacts1" element={<Contacts1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default App;
