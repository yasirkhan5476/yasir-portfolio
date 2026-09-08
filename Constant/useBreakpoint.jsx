import React, { useEffect, useState } from 'react'

function useBreakpoint() {
 const [bp,setbp]=useState("desktop")
    useEffect(()=>{
        const check =()=>{
            const w=window.innerWidth;
            if(w<768){
                setbp("mobile");
            }else if(w<1024){
                setbp("tablet");
            }else{
                setbp("desktop");
            }
        }
         check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
    },[])

     return bp;
}

export default useBreakpoint