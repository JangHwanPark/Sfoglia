import React from 'react';
import LineBrakeText from './LineBreakText/LineBrakeText';
import SpImg from '../assets/img/sp1.jpg';
import SpImg2 from '../assets/img/sp2.jpg';
import SpImg3 from '../assets/img/sp3.jpg';
import SpImg4 from '../assets/img/sp4.jpg';


// Title
const Title = () => {
    return (
        <h1 className="about__title">Taste the Flavors of Italy at Sfoglia</h1>
    );
};

// Introduction
const Introduction: React.FC = () => {
    return (
        <LineBrakeText text={`Sfoglia는 전통적인 이탈리아 요리의 정수를 담고 있으면서도
        현대적인 감각을 더해 독특한 메뉴를 선보입니다.
        우리의 장인정신은 신선한 재료를 선택하는 것에서 시작되어,
        직접 만든 파스타와 다양한 이탈리아 요리로 이어집니다.
        이 모든 것은 아늑한 분위기 속에서 특별한 경험으로 조화롭게 뒤섞여,
        맛있는 음식과 함께 보다 풍성한 이탈리아 식사를 즐기실 수 있습니다.`}/>
    );
};

// About Section
const About: React.FC = () => {
    return (
        <section className="about__section">
            <div className="about__intro-wrapper">
                <div className="about__flex-wrapper">
                    <div className="about__intro">
                        <Title />
                        <Introduction />
                    </div>
                </div>
            </div>
            <div className="about__img-container">
                <div className="about__img-wrapper">
                    <div className="about__img">
                        <img src={SpImg} alt="sp1"/>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ChefIntroduction: React.FC = () => {
    return (
        <section className="introduction__section">
            <div className="introduction__chef">
                <div className="introduction__title-wrapper">
                    <h2 className="introduction__chef-title">Chef Title</h2>
                    <span>OOO</span>
                </div>
                <div className="introduction__chef-info">
                    <p>Hello World</p>
                </div>
            </div>
            <div className="introduction__img-wrapper">
                <img src={SpImg2} alt="sp2"/>
            </div>
        </section>
    );
};

//Menu Section
const Menu: React.FC = () =>  {
    return (
        <section className="menu__section">
            <div className="menu__item-wrapper">
                <h3 className="menu__item-title">Pasta</h3>
            </div>
            <div className="menu__item-wrapper">
                <h3 className="menu__item-title">Secondi Piatti</h3>
            </div>
            <div className="menu__item-wrapper">
                <h3 className="menu__item-title">Side dish</h3>
            </div>
            <div className="menu__item-wrapper">
                <h3 className="menu__item-title">Dessert</h3>
            </div>
        </section>
    );
};

const Reservation: React.FC = () => {
    return (
        <section className="reservation__section">
            <div className="reservation__intro">
                <h2 className="reservation__title">Reservation</h2>
            </div>
            <div className="reservation__btn-wrapper">
                <button className="reservation__btn">KaKao</button>
                <button className="reservation__btn">Phone</button>
            </div>
            <div className="reservation__img-wrapper">
                <img src={SpImg3} alt="sp3"/>
            </div>
        </section>
    )
}

export {About, ChefIntroduction, Menu, Reservation};