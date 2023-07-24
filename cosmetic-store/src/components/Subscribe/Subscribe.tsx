import React from 'react';

const Subscribe = () => {
    return (
        <section className="section__subscribe">
            <div className="subscribe__row">
                <div className="subscribe__left">
                    <img src="./img/subscribe/girl.jpg" alt="" />
                </div>
                <div className="subscribe__right">
                    <div className="subscribe__right__content">
                        <div className="subscribe__text">
                            <div>Подпишись</div>
                            <div>и получи персональные скидки, подарки и спецпредложения</div>
                        </div>
                        <div className="subscribe__input">
                            <input type="text" placeholder='EMAIL'/>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.25" clip-path="url(#clip0_175_2463)">
                                    <path d="M15.8333 1.33398H4.16667C3.062 1.33531 2.00296 1.77472 1.22185 2.55583C0.440735 3.33695 0.00132321 4.39599 0 5.50065L0 15.5007C0.00132321 16.6053 0.440735 17.6644 1.22185 18.4455C2.00296 19.2266 3.062 19.666 4.16667 19.6673H15.8333C16.938 19.666 17.997 19.2266 18.7782 18.4455C19.5593 17.6644 19.9987 16.6053 20 15.5007V5.50065C19.9987 4.39599 19.5593 3.33695 18.7782 2.55583C17.997 1.77472 16.938 1.33531 15.8333 1.33398ZM4.16667 3.00065H15.8333C16.3323 3.00163 16.8196 3.15191 17.2325 3.43215C17.6453 3.7124 17.9649 4.10977 18.15 4.57315L11.7683 10.9557C11.2987 11.4234 10.6628 11.686 10 11.686C9.33715 11.686 8.70131 11.4234 8.23167 10.9557L1.85 4.57315C2.03512 4.10977 2.35468 3.7124 2.76754 3.43215C3.1804 3.15191 3.66768 3.00163 4.16667 3.00065ZM15.8333 18.0007H4.16667C3.50363 18.0007 2.86774 17.7373 2.3989 17.2684C1.93006 16.7996 1.66667 16.1637 1.66667 15.5007V6.75065L7.05333 12.134C7.83552 12.9142 8.89521 13.3524 10 13.3524C11.1048 13.3524 12.1645 12.9142 12.9467 12.134L18.3333 6.75065V15.5007C18.3333 16.1637 18.0699 16.7996 17.6011 17.2684C17.1323 17.7373 16.4964 18.0007 15.8333 18.0007Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_175_2463">
                                        <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="subscribe__btn__wrapper">
                                <a className="subscribe__btn" href='#'>Подписаться</a>
                            </div>
                        </div>
                        <div className="checkbox__wrapper">
                            <input type="checkbox" name="agree" />
                            <label >я ознакомлен и согласен с политикой обработки персональных данных</label>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;