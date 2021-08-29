// Scroll to Top Arrow Using React Hooks and React Font Awesome


import React, {useState, useEffect} from 'react';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
        <FontAwesomeIcon 
        icon={faArrowCircleUp} 
        size="3x" 
        className="scrollTop" 
        onClick={scrollTop} 
        style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollTopArrow;
