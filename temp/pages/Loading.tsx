import React from 'react'
import plant from '../assets/plant.gif'
import Header from '../components/Header'

export default function Loading() {
    return (
        <div className="flex flex-col h-screen items-center justify-center relative w-screen">
            <Header />
            <div className="flex flex-col h-full w-full items-center justify-center relative">
                <div className="flex flex-col items-center justify-center relative bottom-24">
                    <img src={plant} alt="Animasi Loading" /> 
                    <span className="text-xl relative bottom-8">Loading...</span>
                </div>
                <div className="font-light text-gray-500 absolute bottom-4 right-4">
                    <span>Animation by&nbsp;</span>
                    <a className="font-normal text-blue-500" href="https://dribbble.com/shots/3556675-Plant" >Sahil Sadigov</a>
                </div>
            </div>
        </div>
    )
}