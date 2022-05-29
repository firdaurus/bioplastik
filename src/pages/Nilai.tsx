import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import { useAppSelector } from '../redux/hooks'


export default function Nilai() {

    const navigate = useNavigate()
    const scores = useAppSelector(state => state.scores)
    
    useEffect(() => {
        if (!scores.length){
            navigate('/', { replace: true }) //If the user is not logged in, redirect to home page
        }
    }, [navigate, scores])

    const handleShowAnswerKey = () => {
        navigate('/kunci-jawaban')
    }


    return (
        <div className="h-screen bg-primary flex flex-col">
            <Header shadow />
            <div className="w-full h-full grid place-items-center p-16 montserrat">
                <div className="flex flex-col items-center">
                    <p className="font-medium text-white text-2xl text-center">Nilai :</p>
                    <p className="font-medium text-white text-10xl text-center  mt-6">{ [...scores].pop() }</p>
                    <p className="font-medium text-white text-xl text-center mt-10">Semangat belajarnya... ^.^</p>
                    
                    <button onClick={handleShowAnswerKey} className="py-2 px-5 bg-orange-600 flex items-center gap-2 text-white rounded-full shadow-md mt-8">
                        <span>Kunci Jawaban</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
