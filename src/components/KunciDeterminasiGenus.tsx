import React from 'react'

interface Props {
    genus: string,
    onClick: () => void,
    text: string,
}

export default function KunciDeterminasiGenus(props: Props) {
  return (
    <div className="relative mx-14 mt-8" onClick={props.onClick}>
        <div className="absolute w-40 -top-5 left-3 bg-orange-500 text-white border-4 border-white p-1 rounded-full text-center">{props.genus}</div>
        <p className="bg-gray-100 text-gray-800 p-3 pt-7 rounded-xl min-h-[4rem]">{props.text}</p>
    </div>
  )
}
