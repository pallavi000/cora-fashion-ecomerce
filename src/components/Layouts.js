import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layouts({ children }) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </div>
  );
}

export default Layouts;
