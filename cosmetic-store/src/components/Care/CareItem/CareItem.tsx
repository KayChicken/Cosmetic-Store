import React from 'react';

interface CareItemProps {
    img? : string,
   
}


const CareItem : React.FC<CareItemProps> = ({img}) => {
    return (
        <div className='care__item'>
            <img src={`./img/care/${img}.png`} alt="" />
           
        </div>
    );
};

export default CareItem;