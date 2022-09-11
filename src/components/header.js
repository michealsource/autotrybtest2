import React, { useState, useEffect } from "react";
import './header.css'
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    console.log("top", document.body.getBoundingClientRect().top);
    console.log();
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
    className="headerT"
    
    >
      <h1>Header</h1>
      <h3>helloooooooo</h3>
    </div>
  );
};

export default Header;
