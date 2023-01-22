import React, { useRef, useEffect, useState} from "react";

import {source} from "./videoAPI";
import { useInView } from "react-intersection-observer";

export const  Display = ({data}) => { 
   

  const imageRef = useRef(null);
  // const dataref = useRef(null);

  const { ref: firstContainer, inView: firstInView } = useInView({
  //   unobserveOnEnter: true,
  //  rootMargin: '-600px 0px 0px 0px',
  root:null,
  rootMargin:'0px',
  threshold:0.3
  });

  const { ref: secondContainer, inView: secondInView } = useInView({
    // unobserveOnEnter: true,
    //  rootMargin: '-700px 0px 0px 0px',
    root:null,
    rootMargin:'0px',
    threshold:0.3
  });

  const { ref: thirdContainer, inView: thirdInView } = useInView({
    // unobserveOnEnter: true,
    //  rootMargin: '-700px 0px 0px 0px',
    root:null,
    rootMargin:'0px',
    threshold:0.3
  });
   

  
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log('entry', entry);
  //     console.log('entry.isIntersecting', entry.isIntersecting);
  //   });
  //   //observer.observe(dataref.current);
  //   observer.observe(imageRef.current);
  //   // console.log(dataref.current);
  // },  []);


  const getImage = () => {
    if (firstInView)
      return source[0].src;
    if (secondInView)
    return source[1].src;
    //if (thirdInView)
    return source[2].src;
  };


  return (
    <div className="App">
       <div className="wrapper">
         
          <div className="image-wrapper" >
           <video  src={getImage()} ref={imageRef} className="image" autoPlay={true}  muted loop >
           </video>
         </div>

        <div className="first" ref={firstContainer}>
              <div className="info" >
              <span className="heading">{data.texts[0].heading}</span>
                <h2 className="subHeading">{data.texts[0].subHeading}</h2>
                <p className="desc">{data.texts[0].description}</p>
              </div>      
        </div>

        <div className="second" ref={secondContainer}>
              <div className="info" >
              <span className="heading">{data.texts[1].heading}</span >
                <h2 className="subHeading">{data.texts[1].subHeading}</h2>
                <p className="desc">{data.texts[1].description}</p>
              </div>
        </div>

        <div className="third" ref={thirdContainer}>
               <div className="info" >
               <span className="heading" >{data.texts[2].heading}</span >
                <h2 className="subHeading">{data.texts[2].subHeading}</h2>
                <p className="desc">{data.texts[2].description}</p>
              </div>
        </div>
        </div>
     

      
    </div>
  );
}

export default Display;