import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import kuis from '../data/kuis';
import { useData } from '../providers/DataProvider';

export default function Kuis() {

    const {data, setData} = useData()
    const navigate = useNavigate()
    
    // const abjad = ['A', 'B', 'C', 'D']
    // const [count, setCount] = React.useState(0)
    // const [warna, setWarna] = React.useState('red')
    // const [isVisible, setVisible] = React.useState(true)
    const [kuises, setKuises] = React.useState([])
    const [jawabans, setJawabans] = React.useState([null, null, null, null, null])
    

    
    React.useEffect(function(){
        //ambil kuis, masukkan ke state kuises. 
        let kuisUmum = kuis.umum.sort(() => 0.5 - Math.random()).slice(0,2)
        let kuisGenus = kuis[data.genus.toLowerCase()].sort(() => 0.5 - Math.random()).slice(0,3)
        let kuiss = kuisGenus.concat(kuisUmum).sort(() => 0.5 - Math.random())
        setKuises(kuiss)
    }, [])

    const handlePilihJawaban = function(soalKe, jawaban){
        setJawabans(function(prev){
            prev[soalKe] = jawaban
            return prev
        })
    }

    const handleSubmit = function(){
        let nilai = 0
        jawabans.forEach(function(jawaban, soalKe){
            if (kuises[soalKe].jawaban === jawaban){
                nilai += 20
            }
        })
        setData({
            genus: data.genus,
            nilai: nilai
        })

        navigate('/nilai', { replace: true })
    }

    const handleBack = function(){
        navigate('/materi', { replace: true })
    }
    
    // function handleClick(){
    //     setCount(count+1)
    // }

    // function handleWarna(){
    //     if (warna ==='red'){
    //         setWarna('green')
    //     }
    //     else {
    //         setWarna('red')
    //     }
    // }

    // function handleVisibility(){
    //     setVisible(!isVisible)
    // }    
    return (
        <div className="flex flex-col gap-2">
            <Header />
            <span className="font-bold text-2xl underline text-center mt-4">KUIS</span>
            <div className="flex flex-col px-6 select-none">
            {
                 kuises.map((kuis, i) => (
                        <div key={i} className="w-full py-10 px-4 border-b border-gray-300 flex flex-col items-start">
                            
                            <img src={kuis.soal.gambar} className="object-scale-down object-left pl-6" />
                            <div className="flex gap-1">
                                <span>{i+1}.&nbsp;</span>
                                <div className="flex  flex-col gap-1">
                                    <p className="text-justify" dangerouslySetInnerHTML={{__html: kuis.soal.teks}}></p>
                                    {
                                        kuis.pilihans.map(function(pilihan, j){
                                            return <div key={j} className="flex">
                                                {/* <p>{abjad[j]}.&nbsp;{pilihan}</p> */}
                                                <input onChange={() => handlePilihJawaban(i,j)} type="radio" id={`${i}_${j}`} name={`soal_${i}`} value={j} className="mt-1 mr-2" />
                                                <label htmlFor={`${i}_${j}`} dangerouslySetInnerHTML={{__html: pilihan}}></label>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                ))
            }
            </div>
            <div className="flex justify-between px-6 pb-4">
                <button className="text-orange-600 mt-8 mb-8 border border-orange-600 px-6 py-1 rounded-lg shadow-md" onClick={handleBack}>Kembali</button>
                <button className="text-white mt-8 mb-8 bg-primary px-6 py-1 rounded-lg shadow-md" onClick={handleSubmit}>Submit</button>
            </div>
            {/* <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleWarna}>Ubah Warna</button>
            <button onClick={handleVisibility}>{isVisible ? 'Sembunyikan' : 'Tampilkan'}</button>
            <span className={`text-2xl text-${warna}-700 ${isVisible ? '' : 'hidden'}`}>{count}</span> */}
        </div>
    )
}
