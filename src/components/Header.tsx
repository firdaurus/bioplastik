import React from 'react';
import logoUM from '../assets/um.png';
import logoPudak from '../assets/pudak.png';

interface Props {
    shadow?: boolean,
}

export default function Header(props: Props) {
    return (
        <header className="flex p-3 w-full items-center justify-between bg-white" style={props.shadow ? {boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'} : undefined}>
            <div className="flex gap-2 items-center">
                <img src={logoUM} className="w-8" alt="Logo UM"/>
                <div className="flex flex-col items-start justify-center border-l-2 border-black pl-2 text-sm font-medium">
                    <p>Fakultas Matematika dan Ilmu Pengetahuan Alam</p>
                    <p>Universitas Negeri Malang</p>
                </div>
            </div>
            <img src={logoPudak} className="h-6" alt="Logo Pudak" />
        </header>
    )
}
