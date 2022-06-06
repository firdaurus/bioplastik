import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, Outlet } from 'react-router-dom';

import Header from '../components/Header';
import { getMateri } from '../data/linkQR';
import MateriClass from '../data/materi/Materi';
import { useAppSelector } from '../redux/hooks';

type ContextType = { materi: MateriClass }

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
                        {
                            materi?.coverImage && (<div className="flex flex-col items-center justify-center">
                                <img src={materi?.coverImage.img} alt={`Gambar ${ materi?.name }`}  className="md:max-w-screen-sm"/>
                                <span className="italic font-semibold text-lg mt-2">{ materi?.name }</span>
                                <span className="text-center">
                                { materi?.coverImage.caption }
                                </span>
                            </div>)
                        }
                    </div>
                </div>
                { materi && <Outlet context={{ materi }} /> }
            </div>
        </div>
    )
    // ) : <Loading />
}

export function useMateri(){
    return useOutletContext<ContextType>()
}
