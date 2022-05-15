import React from 'react';

interface Props {
    abjad : string,
    judul : string,
    teks : string,
    onClick : () => void
}

export default function Genus(props: Props) {

    // function handleClick(){
    //     //bukak ke salah
    //     history.push('/salah')
    // }

    return (
        <div className="relative bg-gray-200 rounded-xl flex flex-col gap-2 px-4 pt-6 pb-2" onClick={props.onClick}>
            <span className="absolute bg-primary border-4 border-white text-white -top-4 left-4 py-0.5 px-2 w-36">{props.abjad}. <i>{props.judul}</i></span>
            <p>{props.teks}</p>
        </div>
    )
}
