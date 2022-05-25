import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import KunciDeterminasiBack from '../components/KunciDeterminasiBack'
import KunciDeterminasiGenus from '../components/KunciDeterminasiGenus'
import KunciDeterminasiGroup from '../components/KunciDeterminasiGroup'
import kunciDeterminasi from '../data/kunciDeterminasi'
import { useAppSelector } from '../redux/hooks'

export default function KunciDeterminasi() {

    const navigate = useNavigate();

    const genusTrue = useAppSelector(state => state.genus)

    const [ currentNode, setCurrentNode ] = useState(kunciDeterminasi.getNode(1));
    const [ backText, setBackText ] = useState('');

    //Handles back button click
    const handleBack = () => {
        const backNode = kunciDeterminasi.getBackwardNodeFrom(currentNode.id);
        if (backNode) {
            setBackText(kunciDeterminasi.getBackwardNodeFrom(backNode.id)?.content.find(node => node.to === backNode.id)?.text || "");
            setCurrentNode(backNode);
        }
    }

    //Handles the click of genus group click
    const handleGroupClick = (to: number) => {
        setBackText(currentNode.content.find(node => node.to === to)!.text);
        setCurrentNode(kunciDeterminasi.getNode(to));
    }

    //Handles the click of genus click
    const handleGenusClick = (genus: string) => {
        if (genus === genusTrue) navigate('/materi');
        else navigate('/salah');
    }

    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex flex-col select-none bg-primary w-screen min-h-screen pb-8">
                <h1 className="text-center font-semibold text-2xl mt-6 text-white">Kunci Determinasi Bryophyta</h1>
                <span className="px-8 text-center text-md text-white mt-3">Pilihlah salah satu pernyataan yang sesuai dengan ciri yang teramati</span>
                {
                    //Backward button
                    kunciDeterminasi.getBackwardNodeFrom(currentNode.id) && <KunciDeterminasiBack text={backText} onClick={() => handleBack()} />
                }
                {
                    currentNode.content.map((item, i) => (
                        item.genus ? <KunciDeterminasiGenus genus={item.genus} text={item.text} key={i} onClick={() => handleGenusClick(item.genus!)} /> : <KunciDeterminasiGroup key={i} text={item.text} onClick={() => handleGroupClick(item.to)} />
                    ))
                }
                {/* <KunciDeterminasiBack />
                <KunciDeterminasiGenus />
                <KunciDeterminasiGroup /> */}
            </div>
        </div>
    ) 
}
