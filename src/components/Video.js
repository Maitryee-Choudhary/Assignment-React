import React from 'react';
import {source} from "./videoAPI";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const Video = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
    return(
        
        <ScrollContainer>
        <ScrollPage>
            <Animator >
            <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
            </Animator>
        </ScrollPage>
        <ScrollPage>
       <Animator animation={batch(StickyIn(), FadeOut())}>
            <div className='video1'>
                <video autoPlay={true} muted loop width="100%">
                <source src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4" type="video/mp4" />
                </video>
            </div>
       </Animator>
       </ScrollPage>
       <ScrollPage>
       <Animator animation={batch(StickyIn(), FadeOut())}>
       <div className='video1'>
        <video autoPlay={true} muted loop width="100%">
           <source src={source[1].src} type="video/mp4" />
        </video>
        </div>
       </Animator>
       </ScrollPage>
       <ScrollPage>
       <Animator animation={batch(StickyIn(), FadeOut())}>
       <div className='video1'>
        <video autoPlay={true} muted loop width="100%">
           <source src={source[2].src} type="video/mp4" />
        </video>
       </div>
       </Animator>
       </ScrollPage>
        
      
       </ScrollContainer>

     
    )
}

export  default Video;