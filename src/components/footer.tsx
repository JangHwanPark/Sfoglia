import React from 'react';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__contents">
                <div className="footer__column">
                    <h3 className="footer__title">매장안내</h3>
                    <ul className="footer__list">
                        <li><a href="#">부천 중동점</a></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__title">메뉴소개</h3>
                    <ul className="footer__list">
                        <li><a href="#">Pasta</a></li>
                        <li><a href="#">Secondi Piatti</a></li>
                        <li><a href="#">Side dish</a></li>
                        <li><a href="#">Dessert</a></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__title">예약안내</h3>
                    <ul className="footer__list">
                        <li><a href="#">예약하기</a></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3 className="footer__title">SNS</h3>
                    <ul className="footer__list">
                        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                </div>
                <div className="footer__text">
                    <p>
                        Copyright © sfoglia.
                        All Rights Reserved. <br />
                        대표 : ㅇㅇㅇ<br />
                        사업자등록번호 :123-45-67890 <br />
                        주소 : 경기도 부천시 원미구 신흥로 170-1 KR 위브더스테이트상가 6동 122호 <br />
                        TEL : 010-2270-7505<br />
                        E-mail : www0000@sfoglia.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;