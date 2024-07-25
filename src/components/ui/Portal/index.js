"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, selector, show }) => {
  //portal cod
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      ref.current = window?.document.getElementById(selector);
    }
  }, [selector, ref.current]);
  console.log(show && ref.current);

  return show && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;
