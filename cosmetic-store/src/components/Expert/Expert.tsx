import React from 'react';

const Expert = () => {
    return (
        <section className="section__expert">
            <div className="expert__container">
                <div className="expert__row">
                    <div className="expert__left">
                        <div className="expert__left__img">
                            <img src="./img/expert/expert.png" alt="" />
                        </div>
                    </div>
                    <div className="expert__right">
                        <div className="expert__right__content">
                            <h1 className='expert__right__fi'>Ирина Николаева</h1>
                            <div className="expert__right__prof">эксперт-косметолог, основатель IRC 24|7</div>
                            <div className="expert__right__desc">
                                <p>5 лет моя работа связана с косметологией и косметикой. И вот уже более 10 лет мои знания подтверждаются главным - вашим доверием и результатом от средств IRC.</p>
                                <p>В далеком 2012 году мы сделали крупную ставку на качестве и максимальной доступности средств с профессиональным составом. </p>
                                <p>Результат сложных по формулам средств IRC подтверждается международными клиническими исследованиями эффективности. И это говорит о стандартах бренда лучше любых слов.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Expert;