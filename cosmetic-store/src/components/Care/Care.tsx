import React from 'react';
import CareItem from './CareItem/CareItem';

const Care = () => {
    return (
        <section className="section__care">
            <div className="container">
                <h1 className="care__title">Подобрать уход</h1>
                <div className="care__items__container">
                    <CareItem img='image1' />
                    <CareItem img='image2' />
                    <CareItem img='image3' />
                    <CareItem img='image4' />
                    <CareItem img='image5' />
                    <CareItem img='image6' />

                </div>
            </div>
        </section>
    );
};

export default Care;