import React from 'react';


interface CompositionItemProps {
    img? : string
    desc? : string
}


const CompositionItem  : React.FC<CompositionItemProps> =  ({img, desc}) => {
    return (
        <div className='composition__item'>
            <div className="composition__img">
                <img src={`./img/compositions/${img}.png`} alt="" />
            </div>
            <div className="composition__desc">
                {desc}
            </div>
        </div>
    );
};

export default CompositionItem;