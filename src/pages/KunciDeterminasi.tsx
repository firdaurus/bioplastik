import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Genus from '../components/Genus'

import { useData } from '../providers/DataProvider'

import kunciDeterminasi from '../data/kunciDeterminasi'

export default function KunciDeterminasi() {

    // const [genusYangDipilih, setGenusYangDipilih] = useState('kosong')
    const { data } = useData()
    const navigate = useNavigate()

    const handleGenusClick = function(genusYangDipilih: string){

        if (genusYangDipilih === data.genus){
            navigate('/materi', { replace: true })
        } else {
            navigate('/salah')
        }
    }

    return (
        <div className="flex flex-col pb-4 select-none">
            <Header />
            <h1 className="text-center font-semibold text-2xl mt-6">Kunci Determinasi Bryophyta</h1>
            {/* <span>{genusYangDipilih}</span> */}
            <span className="px-8 text-center text-md text-gray-500 mt-6">Pilihlah salah satu pernyataan yang sesuai dengan ciri yang teramati</span>
            <div className="w-full relative pt-12 pb-6 px-14 bg-primary flex flex-col gap-4 mt-6" style={{boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.25)'}}>
                <div className="font-medium text-lg bg-orange-500 rounded-r-full absolute top-2 left-0 py-1 pl-4 pr-3 text-white">1.</div>
                {
                    kunciDeterminasi[0].map((objek, i) => (
                        <div key={i} className="bg-white rounded-xl flex relative min-h-16">
                            <div className="w-full pr-10 pl-4 py-2 flex md:items-center">
                                <span>{objek.abjad}.&nbsp;</span>
                                <span>{objek.teks}</span>    
                            </div>
                            <div className="absolute -right-7 h-full grid place-items-center font-semibold text-lg text-primary">
                                <div className="w-14 h-14 bg-white border-6 border-primary rounded-full grid place-items-center">{objek.bunderan}</div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                kunciDeterminasi.map((objek, i) => i > 0 && (
                    <div key={i} className="mt-8 border-t border-gray-300 pt-16 pb-0 px-14 relative flex flex-col gap-8">
                        <p className="font-medium text-lg bg-orange-500 rounded-b-full absolute top-0 left-2 px-3 pt-2 pb-1 text-white">{i+1}.</p>
                        {
                            objek.map((genus, j) => (
                                <Genus key={j} abjad={genus.abjad} judul={genus.judul} teks={genus.teks} onClick={() => handleGenusClick(genus.judul)} />
                                // <button className="w-full py-2 border" onClick={function(){
                                //     setGenusYangDipilih(genus.judul)
                                // }}>{genus.judul}</button>
                            ))
                        }
                    </div>
                ))
            }
            
        </div>
    ) 
}
