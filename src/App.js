import { useState } from "react";
import {BsChevronCompactLeft ,BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from "react-icons/rx";
function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  const [currentIndex,setCurrentIndex] =  useState(0);

  const prevSlid  = () =>{
     const isFirstSlid = currentIndex === 0
     const newIndex = isFirstSlid ? slides.length -1 :currentIndex - 1;
     setCurrentIndex(newIndex)
  }
  const nextSlid  = () =>{
    const isLastSlid = currentIndex === slides.length - 1
    const newIndex = isLastSlid ? 0  :currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlid =(slideIndex)=>{
      setCurrentIndex(slideIndex)
  }
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center  bg-cover duration-500 " >
            {/* Left Arrow */}
            <div className=" hidden group-hover:block hover:transition-all transition-all absolute cursor-pointer top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 " style={{transition:'0.3s'}}>
             <BsChevronCompactLeft onClick={prevSlid}  color="#FFF" size={30}/> 
            </div>
            {/* right Arrow */}
            <div className=" hidden group-hover:block hover:transition-all transition-all absolute cursor-pointer top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 " style={{transition:'0.3s'}}>
              <BsChevronCompactRight onClick={nextSlid} color="#FFF" size={30} />
            </div>
            
        </div>
        <div className="flex top-4 justify-center py-2">
              {slides.map((slide,slideIndex)=>(
                <div key={slideIndex} onClick={()=>goToSlid(slideIndex)} className="text-2xl cursor-pointer hover:text-red-600 transition-all">
                  <RxDotFilled/>
                 </div> 
              ))}      
            </div>
    </div>
  );
}

export default App;
