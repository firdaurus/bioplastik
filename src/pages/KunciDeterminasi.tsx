// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Header from '../components/Header'
import KunciDeterminasiBack from '../components/KunciDeterminasiBack'
import KunciDeterminasiGenus from '../components/KunciDeterminasiGenus'
import KunciDeterminasiGroup from '../components/KunciDeterminasiGroup'
import kunciDeterminasi from '../data/kunciDeterminasi'

export default function KunciDeterminasi() {

    const [ currentNode, setCurrentNode ] = useState(1);
    const [ nodeItems, setNodeItems ] = useState(kunciDeterminasi.getNode(1));
    const [ backText, setBackText ] = useState('');


    //Handles back button click
    const handleBack = () => {
        if (currentNode > 1) {
            const backNodeId = kunciDeterminasi.getBackwardNodeIdFrom(currentNode);
            setCurrentNode(backNodeId);
            setNodeItems(kunciDeterminasi.getNode(backNodeId));
        }
    }

    //Handles the click of genus group click
    const handleGroupClick = (to: number) => {
        setBackText(nodeItems.find(node => node.to === to)!.text);
        setCurrentNode(to);
        setNodeItems(kunciDeterminasi.getNode(to));
    }

    //Handles the click of genus click
    const handleGenusClick = (genus: string) => {
        alert('You clicked ' + genus);
    }

    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex flex-col select-none bg-primary w-screen min-h-screen pb-8">
                <h1 className="text-center font-semibold text-2xl mt-6 text-white">Kunci Determinasi Bryophyta</h1>
                <span className="px-8 text-center text-md text-white mt-3">Pilihlah salah satu pernyataan yang sesuai dengan ciri yang teramati</span>
                {
                    //Backward button
                    kunciDeterminasi.getBackwardNodeIdFrom(currentNode) > 0 && <KunciDeterminasiBack text={backText} onClick={() => handleBack()} />
                }
                {
                    nodeItems.map((item, i) => (
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
