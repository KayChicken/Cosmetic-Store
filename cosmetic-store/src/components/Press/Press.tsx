import React, { useState, useRef, useEffect } from 'react';


interface PressLogoProps {
    img?: string
}



const PressLogo: React.FC<PressLogoProps> = ({ img }) => {
    return (
        <div className="press__logo">
            <img src={`./img/press/${img}.png`} alt="" />
        </div>
    );
};




const Press = () => {


    const carousel = useRef<HTMLDivElement>(null)
    const [width , setWidth] = useState(0)



    const scrollCarousel = (direction : string) => {
        if (carousel.current) {
            carousel.current.scrollLeft += direction === 'right' ? width : -width
        }
    }



    useEffect(() => {

        const images = document.querySelectorAll<HTMLDivElement>('.press__logo')
        setWidth(images[0].clientWidth)


        const handleResize = () => {
            setWidth(images[0].clientWidth)
        }

        window.addEventListener('resize' , handleResize)


        return () => {
            window.removeEventListener('resize' , handleResize)
        }

    }, [])



    return (
        <section className="section__press">
            <h1 className="press__title">Пресса о нас</h1>
            <div className="press__slider">

                <div className="press__carousel" ref={carousel}>
                    <PressLogo img='flacon' />
                    <PressLogo img='buro' />
                    <PressLogo img='rbk' />
                    <PressLogo img='tatler' />
                    <PressLogo img='hack' />
                    <PressLogo img='rambler' />
                    <PressLogo img='health' />
                </div>

                <div className="sldier__arrows">
                    <svg className='press__slider__left' width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {scrollCarousel('left')}}>
                        <path d="M0.879313 9.09088L4.74931 13.0009C4.84228 13.0946 4.95288 13.169 5.07474 13.2198C5.1966 13.2705 5.3273 13.2967 5.45931 13.2967C5.59133 13.2967 5.72203 13.2705 5.84389 13.2198C5.96575 13.169 6.07635 13.0946 6.16931 13.0009C6.26304 12.9079 6.33744 12.7973 6.3882 12.6755C6.43897 12.5536 6.46511 12.4229 6.46511 12.2909C6.46511 12.1589 6.43897 12.0282 6.3882 11.9063C6.33744 11.7844 6.26304 11.6738 6.16931 11.5809L2.60931 8.00088H22.9993C23.2645 8.00088 23.5189 7.89552 23.7064 7.70798C23.894 7.52045 23.9993 7.26609 23.9993 7.00088C23.9993 6.73566 23.894 6.48131 23.7064 6.29377C23.5189 6.10623 23.2645 6.00088 22.9993 6.00088H2.54931L6.16931 2.38088C6.3466 2.1949 6.4455 1.94782 6.4455 1.69088C6.4455 1.43394 6.3466 1.18685 6.16931 1.00088C6.07635 0.907148 5.96575 0.832753 5.84389 0.781985C5.72203 0.731216 5.59133 0.705078 5.45931 0.705078C5.3273 0.705078 5.1966 0.731216 5.07474 0.781985C4.95288 0.832753 4.84228 0.907148 4.74931 1.00088L0.879313 4.85088C0.317511 5.41338 0.00195313 6.17587 0.00195312 6.97088C0.00195312 7.76588 0.317511 8.52838 0.879313 9.09088Z" fill="black" />
                    </svg>
                    <svg className='press__slider__right' width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {scrollCarousel('right')}}>
                        <path d="M23.12 4.91088L19.25 1.00088C19.157 0.907148 19.0464 0.832753 18.9246 0.781985C18.8027 0.731216 18.672 0.705078 18.54 0.705078C18.408 0.705078 18.2773 0.731216 18.1554 0.781985C18.0336 0.832753 17.923 0.907148 17.83 1.00088C17.6437 1.18824 17.5392 1.44169 17.5392 1.70588C17.5392 1.97006 17.6437 2.22351 17.83 2.41088L21.39 6.00088H1C0.734784 6.00088 0.48043 6.10623 0.292893 6.29377C0.105357 6.48131 0 6.73566 0 7.00088H0C0 7.26609 0.105357 7.52045 0.292893 7.70798C0.48043 7.89552 0.734784 8.00088 1 8.00088H21.45L17.83 11.6109C17.7363 11.7038 17.6619 11.8144 17.6111 11.9363C17.5603 12.0582 17.5342 12.1889 17.5342 12.3209C17.5342 12.4529 17.5603 12.5836 17.6111 12.7055C17.6619 12.8273 17.7363 12.9379 17.83 13.0309C17.923 13.1246 18.0336 13.199 18.1554 13.2498C18.2773 13.3005 18.408 13.3267 18.54 13.3267C18.672 13.3267 18.8027 13.3005 18.9246 13.2498C19.0464 13.199 19.157 13.1246 19.25 13.0309L23.12 9.15088C23.6818 8.58837 23.9974 7.82588 23.9974 7.03088C23.9974 6.23587 23.6818 5.47338 23.12 4.91088Z" fill="black" />
                    </svg>
                </div>


            </div>
        </section>
    );
};

export default Press;