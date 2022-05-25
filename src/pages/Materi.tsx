import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import fissidens from '../assets/images/fissidens.jpg';
import DetailMateri from '../components/DetailMateri';
import Header from '../components/Header';
import { getMateri } from '../data/linkQR';
import MateriClass from '../data/materi/Materi';
import { useAppSelector } from '../redux/hooks';

export default function Materi() {

    const navigate = useNavigate()
    const genus = useAppSelector(state => state.data.genus)

    const [materi, setMateri] = useState<MateriClass | null>(null)

    // Update data materi on load
    useEffect(() => {
        if (!genus) {
            navigate('/', { replace: true })
            return;
        }

        //Apply materi data into state
        setMateri(getMateri(genus))
    }, [genus, navigate])
    // const {data} = useData()
    // const [materiGenus, setMateriGenus] = React.useState(null)

    // React.useEffect(() => {
    //     let materi = materis.find(function(materi){
    //         return materi.genus === data.genus
    //     })
    //     setMateriGenus(materi)
    // }, [])

    function handleClickKuis(){
        navigate('/kuis', { replace: true })
    }

    function handleClickRuangEkspresi(){
        navigate('/ruang-ekspresi', { replace: true })
    }

    // function capitalize(teks){
    //     return teks.charAt(0).toUpperCase() + teks.slice(1)
    // }

    // return materiGenus ? (
    return(
        <div>
            <Header />
            <div className="px-4">
                <h1 className="text-center font-bold text-3xl mt-6 italic">{ materi?.name }</h1>
                <div className="mt-8 flex justify-center">
                    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-xl p-4">

                        {/* Cover image */}
                        <div className="flex flex-col items-center justify-center">
                            <img src={fissidens} alt="Gambar Bryophyta"  className="md:max-w-screen-sm"/>
                            <span className="italic font-semibold text-lg mt-2">Fissidens</span>
                            <span>ini sumber gambarnya</span>
                        </div>
                    </div>
                </div>
                <DetailMateri />
                {/* <div className="flex flex-col gap-4 mt-8">
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
                </div> */}
                <div className="flex justify-around gap-3">
                    <button className="text-white w-full mt-8 mb-8 bg-green-500 px-6 py-1 rounded-lg shadow-md" onClick={handleClickRuangEkspresi}>Ruang Ekspresi</button>
                    <button className="text-white w-full mt-8 mb-8 bg-orange-500 px-6 py-1 rounded-lg shadow-md" onClick={handleClickKuis}>Kuis</button>
                </div>
            </div>
        </div>
    )
    // ) : <Loading />
}
