import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { BsArrowRepeat, BsXLg } from 'react-icons/bs'


export default function Salah() {

    const navigate = useNavigate()

    function handleClick() {
        navigate(-1)
    }

    return (
        <div className="h-screen bg-primary flex flex-col">
            <Header shadow />
            <div className="w-full h-full grid place-items-center p-16 montserrat">
                <div className="flex flex-col items-center">
                    <BsXLg className="text-orange-600 text-9xl" />
                    <p className="font-medium text-white text-xl text-center ">Upss... masih kurang tepat nih</p>
                    <p className="font-medium text-white text-xl text-center mt-16 ">Yuk coba lagi &gt;.&lt;</p>
                    <button onClick={handleClick} className="py-2 px-5 bg-orange-600 flex items-center gap-2 text-white rounded-full shadow-md mt-3">
                        <BsArrowRepeat className="text-xl" />
                        <span className="mt-1">Coba Lagi</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
