import React from 'react';
import AdvantagesCard from './AdvantagesCard/AdvantagesCard';

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages__container">
                <div className="advantages__row">
                    <div className="advantages__left">
                        <div className="advantages__img">
                            <img src="./img/advantages/girlP.png" alt="" />
                        </div>
                    </div>

                    <div className="advantages__right">
                        <div className="advantages__right__content">
                            <div className="advantages__title">
                                <span>преимущества</span>
                                <span>IRC 247</span>
                            </div>
                            <div className="advantages__desc">
                                <AdvantagesCard
                                    title='решение сложных задач за 30 дней'
                                    desc="акне, черные точки, жирность, сухость, старение, пигментация, постакне, купероз"
                                    img='girl'
                                />
                                <AdvantagesCard
                                    title='ингредиенты последнего поколения'
                                    desc="акне, черные точки, жирность, сухость, старение, пигментация, постакне, купероз"
                                    img='pipetka'
                                />
                                <AdvantagesCard
                                    title='подтвержденный мировыми научными исследованиями результат'
                                    img='loupe'
                                />
                                <AdvantagesCard
                                    title='skin friendly'
                                    desc="питающие и увлажняющие текстуры подстраиваются под особенности кожи без жирного блеска, тяжести и пленки  "
                                    img='friendly'
                                />
                                <AdvantagesCard
                                    title='отсутствие вредных для кожи компонентов'
                                    img='shield'
                                />
                                <AdvantagesCard
                                    title='не тестируется на животных и подходит беременным'
                                    img='check'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;