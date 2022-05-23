import { IoMdArrowRoundBack } from 'react-icons/io'

interface Props {
    onClick: () => void,
    text: string,
}

export default function KunciDeterminasiBack(props: Props) {
  return (
    <div className="flex relative mx-14 items-center mt-8" onClick={props.onClick}>
        <div className="bg-white w-full p-3 pl-9 flex gap-2 items-center rounded-2xl md:h-20">
            <span>{props.text}</span>
        </div>
        <div className="absolute w-14 h-14 -left-7 grid place-items-center text-gray-600 text-3xl rounded-full bg-gray-300 border-4 border-gray-100">
            <IoMdArrowRoundBack />
        </div>
    </div>
  )
}
