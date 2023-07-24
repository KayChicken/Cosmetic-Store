import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__col">
                    <div className="footer__logo">
                        <img src="./img/footer/logo.png" alt="" />
                        <ul className="footer__under__logo">
                            <li><a href='#'>Соглашение с политикой конфиденциальности</a></li>
                            <li><a href='#'>Пользовательское соглашения</a></li>
                            <li><a href='#'>Карта сайта</a></li>
                            <li><a href='#'>Правила акций при техническом сбое</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__col">
                    <h2>информация</h2>
                    <ul className="info__bottom">
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">О бренде </a></li>
                        <li><a href="#">Программа лояльности</a></li>
                        <li><a href="#">Акции</a></li>
                        <li><a href="#">Доставка и оплата</a></li>
                        <li><a href="#">Приемка и возврат</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h2>Каталог</h2>
                    <ul className="info__bottom">
                        <li><a href='#'>Уход за кожей</a></li>
                        <li><a href='#'>Уход за волосами</a></li>
                        <li><a href='#'>Подобрать уход</a></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__num">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0568 14.617L18.7893 17.0243C18.686 17.954 17.9468 18.6701 17.0193 18.5491C15.0114 18.2871 11.345 17.2395 7.41676 13.3113C3.48856 9.38305 2.44041 5.71621 2.17812 3.70798C2.05695 2.78026 2.77305 2.04083 3.70292 1.93751L6.10984 1.67008C6.9025 1.582 7.67171 1.97328 8.06731 2.66578L9.01499 4.32468C9.46232 5.10773 9.33028 6.09329 8.6926 6.73097L8.46768 6.95589C7.99484 7.42873 7.795 8.11114 8.09779 8.70737C8.39535 9.2933 8.90773 10.0882 9.77321 10.9537C10.6387 11.8191 11.4336 12.3315 12.0195 12.6291C12.6157 12.9319 13.2981 12.732 13.771 12.2592L13.9959 12.0343C14.6336 11.3966 15.6191 11.2645 16.4022 11.7119L18.0611 12.6596C18.7536 13.0552 19.1449 13.8244 19.0568 14.617Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>+7 (495) 646 66 26</span>
                    </div>
                    <div className="footer__whatsUp">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9643 2.94643C15.1339 1.07143 12.6339 0 9.95536 0C4.50893 0 0.0446429 4.46429 0.0446429 9.91072C0.0446429 11.6964 0.535714 13.3929 1.38393 14.8661L0 20L5.22321 18.6607C6.69643 19.4196 8.30357 19.8661 9.95536 19.8661C15.4464 19.8661 20 15.4018 20 9.95536C20 7.27679 18.8393 4.82143 16.9643 2.94643ZM9.95536 18.1696C8.48214 18.1696 7.05357 17.7679 5.75893 17.0089L5.49107 16.8304L2.36607 17.6786L3.21429 14.6429L2.99107 14.3304C2.1875 12.9911 1.74107 11.4732 1.74107 9.91072C1.74107 5.40179 5.44643 1.69643 10 1.69643C12.1875 1.69643 14.2411 2.54464 15.8036 4.10714C17.3661 5.66964 18.3036 7.72321 18.3036 9.95536C18.3036 14.4643 14.5089 18.1696 9.95536 18.1696ZM14.5089 12.0089C14.2411 11.875 13.0357 11.2946 12.8125 11.2054C12.5893 11.1161 12.4107 11.0714 12.2321 11.3393C12.0982 11.5625 11.6071 12.1429 11.4732 12.3214C11.2946 12.4554 11.1607 12.5 10.9375 12.3661C9.46429 11.6518 8.52679 11.0714 7.54464 9.41964C7.27679 8.97322 7.8125 9.01786 8.25893 8.08036C8.34821 7.90179 8.30357 7.76786 8.25893 7.63393C8.21429 7.5 7.67857 6.29464 7.5 5.80357C7.27679 5.3125 7.09821 5.35714 6.91964 5.35714C6.78571 5.35714 6.60714 5.35714 6.47321 5.35714C6.29464 5.35714 6.02679 5.40179 5.80357 5.66964C5.58036 5.9375 4.95536 6.51786 4.95536 7.72321C4.95536 8.97322 5.80357 10.1339 5.9375 10.3125C6.07143 10.4464 7.67857 12.9464 10.1786 14.0179C11.7411 14.7321 12.3661 14.7768 13.1696 14.6429C13.6161 14.5982 14.5982 14.0625 14.8214 13.4821C15.0446 12.9018 15.0446 12.4107 14.9554 12.3214C14.9107 12.1875 14.7321 12.1429 14.5089 12.0089Z" fill="black" />
                        </svg>
                        <span>+7 (926) 513 55 91</span>
                    </div>
                    <div className="footer__email">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_175_1830)">
                                <path d="M15.8333 0.833984H4.16667C3.062 0.835308 2.00296 1.27472 1.22185 2.05583C0.440735 2.83695 0.00132321 3.89599 0 5.00065L0 15.0006C0.00132321 16.1053 0.440735 17.1644 1.22185 17.9455C2.00296 18.7266 3.062 19.166 4.16667 19.1673H15.8333C16.938 19.166 17.997 18.7266 18.7782 17.9455C19.5593 17.1644 19.9987 16.1053 20 15.0006V5.00065C19.9987 3.89599 19.5593 2.83695 18.7782 2.05583C17.997 1.27472 16.938 0.835308 15.8333 0.833984ZM4.16667 2.50065H15.8333C16.3323 2.50163 16.8196 2.65191 17.2325 2.93215C17.6453 3.21239 17.9649 3.60977 18.15 4.07315L11.7683 10.4556C11.2987 10.9234 10.6628 11.186 10 11.186C9.33715 11.186 8.70131 10.9234 8.23167 10.4556L1.85 4.07315C2.03512 3.60977 2.35468 3.21239 2.76754 2.93215C3.1804 2.65191 3.66768 2.50163 4.16667 2.50065ZM15.8333 17.5006H4.16667C3.50363 17.5006 2.86774 17.2373 2.3989 16.7684C1.93006 16.2996 1.66667 15.6637 1.66667 15.0006V6.25065L7.05333 11.634C7.83552 12.4142 8.89521 12.8523 10 12.8523C11.1048 12.8523 12.1645 12.4142 12.9467 11.634L18.3333 6.25065V15.0006C18.3333 15.6637 18.0699 16.2996 17.6011 16.7684C17.1323 17.2373 16.4964 17.5006 15.8333 17.5006Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_175_1830">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>info@irc247.ru</span>
                    </div>
                    <div className="footer__time">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_175_1834)">
                                <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0V0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99076 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27289 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7118 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z" fill="black" />
                                <path d="M10 5C9.77902 5 9.56706 5.0878 9.41078 5.24408C9.2545 5.40036 9.1667 5.61232 9.1667 5.83333V9.43749L6.35754 11.1975C6.16968 11.3148 6.03613 11.502 5.98627 11.7179C5.93642 11.9337 5.97435 12.1605 6.0917 12.3483C6.20906 12.5362 6.39624 12.6697 6.61206 12.7196C6.82789 12.7694 7.05467 12.7315 7.24254 12.6142L10.4425 10.6142C10.5634 10.5384 10.6629 10.4329 10.7313 10.3077C10.7997 10.1825 10.8349 10.0418 10.8334 9.89916V5.83333C10.8334 5.61232 10.7456 5.40036 10.5893 5.24408C10.433 5.0878 10.2211 5 10 5Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_175_1834">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>с 10:00 до 19:00</span>
                    </div>
                    <div className="footer__logos">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="black" />
                            <path d="M28.8939 24.6002C28.8697 24.548 28.8471 24.5047 28.8262 24.47C28.4792 23.8451 27.8161 23.078 26.8372 22.1685L26.8166 22.1477L26.8062 22.1375L26.7957 22.127H26.7852C26.341 21.7036 26.0597 21.4188 25.9419 21.273C25.7263 20.9953 25.678 20.7142 25.7959 20.4294C25.8791 20.2142 26.1917 19.7598 26.733 19.0655C27.0178 18.6975 27.2433 18.4026 27.4098 18.1804C28.6109 16.5836 29.1316 15.5633 28.9719 15.1189L28.9098 15.0151C28.8681 14.9526 28.7606 14.8954 28.5872 14.8432C28.4134 14.7912 28.1914 14.7826 27.9206 14.8173L24.9216 14.838C24.8731 14.8208 24.8037 14.8224 24.7133 14.8432C24.623 14.8641 24.5779 14.8746 24.5779 14.8746L24.5257 14.9006L24.4843 14.932C24.4495 14.9527 24.4114 14.9891 24.3697 15.0412C24.3282 15.0931 24.2935 15.154 24.2658 15.2234C23.9393 16.0634 23.5681 16.8444 23.1515 17.5663C22.8946 17.9968 22.6587 18.3699 22.4432 18.6858C22.2281 19.0016 22.0476 19.2342 21.9019 19.3834C21.756 19.5326 21.6244 19.6522 21.5061 19.7426C21.388 19.833 21.2979 19.8711 21.2355 19.8572C21.173 19.8432 21.1141 19.8293 21.0583 19.8155C20.9612 19.753 20.883 19.668 20.8241 19.5604C20.765 19.4528 20.7252 19.3173 20.7043 19.1542C20.6836 18.991 20.6714 18.8505 20.6679 18.7325C20.6646 18.6146 20.6661 18.4478 20.6732 18.2326C20.6804 18.0173 20.6836 17.8716 20.6836 17.7952C20.6836 17.5314 20.6888 17.2451 20.6991 16.9361C20.7096 16.6272 20.7181 16.3824 20.7252 16.2021C20.7323 16.0216 20.7356 15.8307 20.7356 15.6293C20.7356 15.428 20.7233 15.2701 20.6991 15.1555C20.6752 15.0411 20.6384 14.93 20.59 14.8223C20.5413 14.7147 20.4701 14.6314 20.3766 14.5724C20.2829 14.5133 20.1664 14.4665 20.0277 14.4317C19.6598 14.3484 19.1912 14.3034 18.6218 14.2964C17.3307 14.2825 16.501 14.3659 16.1331 14.5464C15.9873 14.6227 15.8554 14.7269 15.7374 14.8587C15.6125 15.0115 15.595 15.0949 15.6853 15.1086C16.1018 15.171 16.3968 15.3203 16.5703 15.5563L16.6329 15.6813C16.6815 15.7716 16.7301 15.9313 16.7787 16.1604C16.8273 16.3894 16.8586 16.6428 16.8724 16.9203C16.907 17.4272 16.907 17.8611 16.8724 18.222C16.8376 18.5831 16.8048 18.8642 16.7735 19.0655C16.7422 19.2668 16.6953 19.43 16.6329 19.5549C16.5703 19.6798 16.5287 19.7562 16.5079 19.7839C16.487 19.8117 16.4697 19.8291 16.4559 19.836C16.3656 19.8706 16.2718 19.8882 16.1747 19.8882C16.0774 19.8882 15.9595 19.8395 15.8206 19.7423C15.6819 19.6451 15.5378 19.5115 15.3885 19.3414C15.2393 19.1712 15.0709 18.9335 14.8834 18.6281C14.696 18.3226 14.5016 17.9617 14.3003 17.5452L14.1338 17.2431C14.0296 17.0488 13.8874 16.7658 13.7069 16.3945C13.5263 16.023 13.3666 15.6637 13.2278 15.3166C13.1724 15.1708 13.089 15.0598 12.978 14.9834L12.9259 14.9521C12.8912 14.9244 12.8356 14.895 12.7593 14.8636C12.6829 14.8323 12.6031 14.8098 12.5198 14.796L9.66657 14.8167C9.37501 14.8167 9.17718 14.8827 9.07302 15.0147L9.03133 15.0771C9.0105 15.1118 9 15.1673 9 15.2437C9 15.3201 9.02083 15.4138 9.06251 15.5248C9.47903 16.5038 9.93198 17.4478 10.4214 18.3572C10.9108 19.2666 11.336 19.9992 11.6969 20.5542C12.0579 21.1097 12.4258 21.6339 12.8007 22.1266C13.1756 22.6196 13.4238 22.9354 13.5452 23.0742C13.6668 23.2133 13.7622 23.3172 13.8317 23.3866L14.092 23.6365C14.2586 23.8031 14.5033 24.0027 14.8261 24.2352C15.149 24.4679 15.5065 24.6969 15.8987 24.9227C16.291 25.1482 16.7474 25.3321 17.2681 25.4744C17.7887 25.6168 18.2955 25.674 18.7884 25.6464H19.9859C20.2288 25.6254 20.4128 25.5491 20.5379 25.4173L20.5793 25.3651C20.6072 25.3236 20.6333 25.2593 20.6573 25.1726C20.6817 25.0859 20.6938 24.9903 20.6938 24.8863C20.6867 24.5878 20.7094 24.3188 20.7613 24.0794C20.8132 23.84 20.8724 23.6595 20.9386 23.5379C21.0047 23.4164 21.0793 23.314 21.1624 23.2309C21.2456 23.1476 21.3049 23.0972 21.3397 23.0798C21.3743 23.0623 21.4019 23.0505 21.4227 23.0434C21.5893 22.9879 21.7854 23.0416 22.0112 23.2049C22.2369 23.368 22.4485 23.5695 22.6465 23.8089C22.8444 24.0485 23.0821 24.3174 23.3597 24.6158C23.6375 24.9144 23.8804 25.1363 24.0886 25.2823L24.2968 25.4073C24.4358 25.4906 24.6163 25.567 24.8385 25.6364C25.0603 25.7058 25.2546 25.7231 25.4215 25.6885L28.0872 25.6469C28.3508 25.6469 28.556 25.6032 28.7015 25.5166C28.8473 25.4298 28.9339 25.3342 28.9619 25.2303C28.9897 25.1262 28.9912 25.0081 28.9672 24.876C28.9425 24.7443 28.9181 24.6522 28.8939 24.6002Z" fill="white" />
                        </svg>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM20.0009 11.5C17.8282 11.5 17.5555 11.5095 16.7022 11.5483C15.8505 11.5873 15.2692 11.7222 14.7605 11.92C14.2343 12.1243 13.788 12.3977 13.3433 12.8425C12.8983 13.2872 12.625 13.7335 12.42 14.2595C12.2216 14.7684 12.0866 15.3499 12.0483 16.2012C12.0101 17.0546 12.0001 17.3274 12.0001 19.5001C12.0001 21.6728 12.0098 21.9446 12.0485 22.798C12.0876 23.6496 12.2225 24.231 12.4201 24.7396C12.6246 25.2658 12.898 25.7121 13.3428 26.1568C13.7873 26.6018 14.2336 26.8758 14.7595 27.0802C15.2685 27.278 15.85 27.4128 16.7015 27.4518C17.5548 27.4907 17.8274 27.5002 19.9999 27.5002C22.1727 27.5002 22.4446 27.4907 23.2979 27.4518C24.1496 27.4128 24.7316 27.278 25.2406 27.0802C25.7666 26.8758 26.2123 26.6018 26.6568 26.1568C27.1018 25.7121 27.3751 25.2658 27.5801 24.7398C27.7768 24.231 27.9118 23.6495 27.9518 22.7981C27.9901 21.9448 28.0001 21.6728 28.0001 19.5001C28.0001 17.3274 27.9901 17.0547 27.9518 16.2014C27.9118 15.3497 27.7768 14.7684 27.5801 14.2597C27.3751 13.7335 27.1018 13.2872 26.6568 12.8425C26.2118 12.3975 25.7668 12.1242 25.2401 11.92C24.7301 11.7222 24.1484 11.5873 23.2967 11.5483C22.4434 11.5095 22.1717 11.5 19.9984 11.5H20.0009ZM24.2714 14.2689C23.7414 14.2689 23.3114 14.6984 23.3114 15.2286C23.3114 15.7586 23.7414 16.1886 24.2714 16.1886C24.8014 16.1886 25.2314 15.7586 25.2314 15.2286C25.2314 14.6986 24.8014 14.2686 24.2714 14.2686V14.2689ZM20.0009 15.3906C17.7321 15.3907 15.8927 17.2302 15.8927 19.499C15.8927 21.7679 17.7322 23.6065 20.0011 23.6065C22.2699 23.6065 24.1088 21.7679 24.1088 19.499C24.1088 17.2301 22.2698 15.3906 20.0009 15.3906ZM20.0012 16.8325C21.4739 16.8325 22.6679 18.0264 22.6679 19.4992C22.6679 20.9719 21.4739 22.1659 20.0012 22.1659C18.5283 22.1659 17.3345 20.9719 17.3345 19.4992C17.3345 18.0264 18.5283 16.8325 20.0012 16.8325Z" fill="black" />
                        </svg>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM26.2511 14.0933C26.9396 14.2822 27.4818 14.8389 27.6658 15.5458C28.0001 16.8269 28.0001 19.5 28.0001 19.5C28.0001 19.5 28.0001 22.173 27.6658 23.4542C27.4818 24.1611 26.9396 24.7178 26.2511 24.9068C25.0035 25.25 20.0001 25.25 20.0001 25.25C20.0001 25.25 14.9968 25.25 13.749 24.9068C13.0606 24.7178 12.5184 24.1611 12.3344 23.4542C12.0001 22.173 12.0001 19.5 12.0001 19.5C12.0001 19.5 12.0001 16.8269 12.3344 15.5458C12.5184 14.8389 13.0606 14.2822 13.749 14.0933C14.9968 13.75 20.0001 13.75 20.0001 13.75C20.0001 13.75 25.0035 13.75 26.2511 14.0933Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 22V17L22.5 19.5001L18.5 22Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;