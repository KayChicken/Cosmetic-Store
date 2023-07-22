import React from 'react';


interface SliderItemProps {
    img? : string
    title? : string
}


const SliderItem : React.FC<SliderItemProps> = ({img,title}) => {
    return (
        <div className='slider__item'>
            <div className="slider__img">
                <img src={`./img/items/${img}.png`} alt="" />
            </div>
            <div className="slider__title">{title}</div>
        </div>
    );
};

export default SliderItem;