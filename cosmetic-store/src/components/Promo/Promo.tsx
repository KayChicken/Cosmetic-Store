import React, { useEffect, useState } from 'react';

const Promo = () => {

    const [chooseRadio, setChooseRadio] = useState(0)
    const [img, setImg] = useState('girl0.png')

    const images = [
        'girl0.png',
        'girl1.png',
        'girl2.png'
    ]





    const handleRadio = (id: number) => {
        setChooseRadio(id)
        setImg(`girl${id}.png`)
    }





    useEffect(() => {
        const interval = setInterval(() => handleRadio(chooseRadio < images.length - 1 ? chooseRadio + 1 : 0), 6000); // Переключение каждые 6 секунд
        return () => clearInterval(interval);
    }, [chooseRadio]);




    return (
        <section className='promo'>
            <div className="container">
                <div className="promo__row">
                    <div className="promo__left">
                        <div className="promo__title">Эстетика кожи — твое лицо.</div>
                        <div className="promo__desc">
                            <div>биосовместимая косметика, которая решает, а не маскирует проблемы.</div>
                            <div>эффективность подтверждена исследованиями</div>
                        </div>
                        <div className="promo__btn__wrapper">
                            <a href="#">Подобрать уход</a>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_175_1648)">
                                    <path d="M19.2667 8.75874L16.0417 5.5004C15.9642 5.4223 15.872 5.3603 15.7705 5.318C15.6689 5.27569 15.56 5.25391 15.45 5.25391C15.34 5.25391 15.2311 5.27569 15.1295 5.318C15.028 5.3603 14.9358 5.4223 14.8583 5.5004C14.7031 5.65654 14.616 5.86775 14.616 6.0879C14.616 6.30806 14.7031 6.51927 14.8583 6.6754L17.825 9.66707H0.833333C0.61232 9.66707 0.400358 9.75487 0.244078 9.91115C0.0877974 10.0674 0 10.2794 0 10.5004H0C0 10.7214 0.0877974 10.9334 0.244078 11.0897C0.400358 11.2459 0.61232 11.3337 0.833333 11.3337H17.875L14.8583 14.3421C14.7802 14.4195 14.7182 14.5117 14.6759 14.6133C14.6336 14.7148 14.6118 14.8237 14.6118 14.9337C14.6118 15.0437 14.6336 15.1527 14.6759 15.2542C14.7182 15.3558 14.7802 15.4479 14.8583 15.5254C14.9358 15.6035 15.028 15.6655 15.1295 15.7078C15.2311 15.7501 15.34 15.7719 15.45 15.7719C15.56 15.7719 15.6689 15.7501 15.7705 15.7078C15.872 15.6655 15.9642 15.6035 16.0417 15.5254L19.2667 12.2921C19.7348 11.8233 19.9978 11.1879 19.9978 10.5254C19.9978 9.8629 19.7348 9.22749 19.2667 8.75874Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_175_1648">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>


                    <div className="promo__right">
                        <div className="promo__img">
                            {images.map((item) => {
                                if (item === img) {
                                    return <img src={`./img/${img}`} />
                                }
                            })}
                        </div>
                        <div className="promo__slider">
                            <input type="radio" name="promo__radio" id="radio1" checked={chooseRadio === 0} onChange={() => { handleRadio(0) }} />
                            <input type="radio" name="promo__radio" id="radio2" checked={chooseRadio === 1} onChange={() => { handleRadio(1) }} />
                            <input type="radio" name="promo__radio" id="radio3" checked={chooseRadio === 2} onChange={() => { handleRadio(2) }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promo;