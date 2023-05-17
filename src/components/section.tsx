import React from 'react';
import LineBrakeText from './LineBreakText/LineBrakeText';


// Title
const Title = () => {
    return (
        <div className="about__title-wrapper">
            <h1 className="about__title">Sfoglia</h1>
            <h1 className="about__title">Taste the Flavors of Italy at Sfoglia</h1>
        </div>
    );
};

// Introduction
const Introduction: React.FC = () => {
    return (
        <div className="about__introduction">
            <LineBrakeText text={`Sfoglia는 전통적인 이탈리아 요리와 현대적인 감각을 결합한 독특한 메뉴를 선보입니다.
          신선한 재료와 정성을 다한 손맛으로 직접 만든 파스타와 다양한 이탈리아 요리를 즐길 수 있습니다.
          맛있는 음식과 함께 아늑한 분위기에서 특별한 경험을 선사합니다.`}
            />
        </div>
    );
};

// About Section
const About: React.FC = () => {
    return (
        <section className="about__section">
            <Title />
            <Introduction />
            <div className="about__img-wrapper">
                {/* img tag */}
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

            </div>
            <div className="reservation__kakao">
                <button className="reservation__btn">KaKao</button>
            </div>
            <div className="reservation__phone">
                <button className="reservation__btn">Phone</button>
            </div>
        </section>
    )
}

export {About, Menu, Reservation};