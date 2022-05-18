import React from 'react';

import { useNavigate } from 'react-router-dom'
import { useData } from '../providers/DataProvider'

import Header from '../components/Header';
import materis from '../data/materi'
import Loading from '../pages/Loading'

export default function Materi() {

    const navigate = useNavigate()
    const {data} = useData()
    const [materiGenus, setMateriGenus] = React.useState(null)

    React.useEffect(() => {
        let materi = materis.find(function(materi){
            return materi.genus === data.genus
        })
        setMateriGenus(materi)
    }, [])

    function handleClick(){
        navigate('/kuis', { replace: true })
    }

    function capitalize(teks){
        return teks.charAt(0).toUpperCase() + teks.slice(1)
    }

    return materiGenus ? (
        <div>
            <Header />
            <div className="px-4">
                <h1 className="text-center font-bold text-3xl mt-6 italic">{materiGenus.genus}</h1>
                <div className="mt-8 flex justify-center">
                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-xl p-4">
                        <img src={materiGenus.gambar.img} alt="Gambar Bryophyta"  className="md:max-w-screen-sm"/>
                        <span className="italic font-semibold text-lg mt-2">{materiGenus.genus}</span>
                        <span className="">({materiGenus.gambar.sumber})</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <p className="border-b border-gray-400 font-semibold text-xl">Taksonomi</p>
                    <div className="mt-1 grid grid-cols-10">
                        {
                            ['kingdom','divisio','classis','ordo','familia','genus'].map(function(tingkatan){
                                return <>
                                    <span className="col-span-2">{capitalize(tingkatan)}</span>
                                    <span className="col-start-3 col-end-4 text-center">:</span>
                                    <span className="col-start-4 col-end-11">{materiGenus.taksonomi[tingkatan]}</span>
                                </>  
                            })
                        }
                    </div>
                    <p className="mt-1 select-none tracking-wide flex flex-col gap-4">
                        {materiGenus.materi.morfologi}
                    </p>
                    <p className="border-b border-gray-400 font-semibold text-xl">Siklus Hidup</p>
                    <div className="mt-1 select-none tracking-wide flex flex-col gap-4">
                        {materiGenus.materi.siklusHidup}
                    </div>
                    <p className="border-b border-gray-400 font-semibold text-xl">Habitat</p>
                    <div className="mt-1 select-none tracking-wide flex flex-col gap-4">
                        {materiGenus.materi.habitat}
                    </div>
                    <p className="border-b border-gray-400 font-semibold text-xl">Daftar Pustaka</p>
                    <div className="mt-1 select-auto tracking-wide flex flex-col gap-4">
                        {materiGenus.materi.daftarPustaka}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="text-white mt-8 mb-8 bg-primary px-6 py-1 rounded-lg shadow-md" onClick={handleClick}>Lanjut...</button>
                </div>
            </div>
        </div>
    ) : <Loading />
}
