import React from 'react'
import Header from '../components/Header'

import { useNavigate } from 'react-router-dom'
import { useData } from '../providers/DataProvider'

export default function Nilai() {

    const navigate = useNavigate()
    const {data} = useData()

    const handleClick = function(){
        navigate('/', { replace: true })
    }


    return (
        <div className="h-screen bg-primary flex flex-col">
            <Header shadow />
            <div className="w-full h-full grid place-items-center p-16">
                <div className="montserrat flex flex-col items-center">
                    <p className="font-medium text-white text-2xl text-center montserrat">Nilai :</p>
                    <p className="font-medium text-white text-10xl text-center montserrat mt-6">{data.nilai}</p>
                    <p className="font-medium text-white text-xl text-center mt-10 montserrat">Semangat belajarnya... ^.^</p>
                    <button onClick={handleClick} className="py-2 px-5 bg-orange-600 roboto flex items-center gap-2 text-white rounded-full shadow-md mt-8">
                        <span className="montserrat">Back Home</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
