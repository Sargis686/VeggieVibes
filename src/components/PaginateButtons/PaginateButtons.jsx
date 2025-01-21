import { useState,useEffect } from 'react';
import { veggiePages } from '../../data/veggieData';


  export default function PaginateButtons({ currPage, setCurrPage }) {

    const [animationTranslate, setAnimationTranslate] = useState("translateY(0px)");

    useEffect(() => {
      const translateValue = String(currPage * (1.25 + 1));
      setAnimationTranslate(`translateY(${translateValue}rem)`);
    }, [currPage]);
  
    return (
      <div className="relative">
        
        <div style={{transform: animationTranslate}} className={`absolute top-0 rounded-tl-lg rounded-br-lg border-2 border-green-900 transition-all duration-500 h-5 w-5 rounded-full bg-green-900`}></div>
        <div className="flex flex-col gap-4">
        
           {veggiePages.map((_, index) => {
            return (
              <button 
                key={index} 
                onClick={() => { setCurrPage(index)}}
              >
                <div className={`rounded-tl-lg rounded-br-lg border-2 border-green-900 transition-all duration-500 h-5 w-5 rounded-full ${currPage === index ? "bg-green-900 scale-125" : ""}`}>
                </div>
              </button>
            )
          })}  
        </div>
      </div>
    ) 
  }