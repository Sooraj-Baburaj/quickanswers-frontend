
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


const Portal = ({ children, selector, show }) => {

    //portal cod
    const ref = useRef(null);
    useEffect(() => {
        ref.current = document.getElementById(selector);
    }, [selector, ref.current]);
    console.log(show && ref.current);

    return (show && ref.current) ? createPortal(children, ref.current) : null;
};

export default Portal;
