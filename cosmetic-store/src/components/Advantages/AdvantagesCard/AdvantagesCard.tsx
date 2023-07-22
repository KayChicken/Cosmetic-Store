import React from 'react';

interface AdvantagesCardProps {
    img? : string
    title? : string
    desc? : string
}


const AdvantagesCard  : React.FC<AdvantagesCardProps> = ({img, title , desc}) => {
    return (
        <div className='advantages__card'>
            <img src={`./img/advantages/${img}.png`} alt="" />
            <div className="advantages__card__title">{title}</div>
            <div className="advantages__card__desc">{desc}</div>
        </div>
    );
};

export default AdvantagesCard;