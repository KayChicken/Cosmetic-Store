import React from 'react';

const Test = () => {
    return (
        <section className="test">
            <div className="test__title">
                <h1>не знаешь свой тип кожи?</h1>
            </div>
            <div className="test__down">
                <div className="test__text">
                    <div className="test__number">1</div>
                    <div className="test__desc">Пройди тест</div>
                </div>
                <div className="test__text">
                    <div className="test__number">2</div>
                    <div className="test__desc">Узнай свой тип кожи</div>
                </div>
                <div className="test__text">
                    <div className="test__number">3</div>
                    <div className="test__desc">Получи персональную систему IRC, скидки и подарки</div>
                </div>
            </div>
            <div className="test__btn__wrapper">
                <a href="#">Пройти тест</a>
            </div>
        </section>
    );
};

export default Test;