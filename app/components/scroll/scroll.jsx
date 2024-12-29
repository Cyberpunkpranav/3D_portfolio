'use client'
import React, { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar';

var options={
    damping:0.06,
    alwaysShowTracks:false,
    thumbMinSize:0
}
const Scroll = ({id}) => {
    useEffect(()=>{
        Scrollbar.init(document.getElementById(id),options)
    },[])
}

export default Scroll