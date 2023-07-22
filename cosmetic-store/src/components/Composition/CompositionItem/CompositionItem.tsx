import React from 'react';


interface CompositionItemProps {
    img? : string
    desc? : string
}


const CompositionItem = () => {
    return (
        <div className='composition__item'>
            <div className="composition__img">
                <img src="" alt="" />
            </div>
            <div className="composition__desc">
                
            </div>
        </div>
    );
};

export default CompositionItem;