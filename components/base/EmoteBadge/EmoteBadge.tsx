import React from 'react'
import style from './EmoteBadge.module.scss';


export interface EmoteBadgeProps {
    img: string;
    id: string;
    handle: (id: string) => void;
}

const EmoteBadge: React.FC<EmoteBadgeProps> = ({
    img,
    id,
    handle
}) => {
    return (
        <div className={style.EmoteBadge}>
            <img src={img} alt={id} width={40} key={id}/>
            <div className={style.Cross} onClick={() => {
                handle(id)
            }}>X</div>
        </div>
    )
}

export default EmoteBadge
