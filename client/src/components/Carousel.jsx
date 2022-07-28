import React ,{useState,useEffect} from 'react';
import { dark,blue,grape,pome,moji,pina } from '../assets';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const ImageSlider = () => {

  return (
    <div className='w-full h-96 md:h-full mb-3 md:mb-0 md:w-3/4 bg-blue-400 border relative'>
                  <Carousel infiniteLoop={true} autoPlay={true}>
                                  <div>
                                    <img src={blue} alt="" />
                                  </div>
                                  <div>
                                    <img src={dark} alt="" />
                                  </div>
                                  <div>
                                    <img src={pome} alt="" />
                                  </div>
                                  <div>
                                    <img src={grape} alt="" />
                                  </div>
                                  <div>
                                    <img src={moji} alt="" />
                                  </div>
                                  <div>
                                    <img src={pina} alt="" />
                                  </div>
                  </Carousel>
 </div>
  )
}

export default ImageSlider