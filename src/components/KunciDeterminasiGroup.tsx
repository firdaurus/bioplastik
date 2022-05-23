import { FaCanadianMapleLeaf } from 'react-icons/fa'

interface Props {
    onClick: () => void,
    text: string,
}

export default function KunciDeterminasiGroup(props: Props) {
  return (
    <div className="flex relative mx-14 items-center mt-6" onClick={props.onClick}>
        <div className="bg-white w-full p-3 pr-9 flex gap-2 items-center rounded-2xl md:h-20">
            <span>{ props.text }</span>
        </div>
        <div className="absolute w-14 h-14 -right-7 grid place-items-center text-white text-3xl rounded-full bg-green-500 border-4 border-emerald-600">
            <FaCanadianMapleLeaf />
        </div>
    </div>
  )
}
