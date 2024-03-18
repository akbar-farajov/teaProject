import storeIcon from '../../../../../public/Header-images/icon1.png';
import personIcon from '../../../../../public/Header-images/icon2.png';
import searchIcon from '../../../../../public/Header-images/icon3.png';
import xIcon from '../../../../../public/x.png';

import './menu.css';

export default function Menu() {
    return (
        <div className="burger-menu display">
            <img className='remove-icon' src={xIcon} alt="" />
            <div className="burger-items">
                <nav className="burger__navbar">
                    <ul className="burger__nav__items">
                        <li className="burger__nav__item">
                            <a href="">Black</a>
                        </li>
                        <li className="burger__nav__item">
                            <a href="">White</a>
                        </li>
                        <li className="burger__nav__item">
                            <a href="">Green</a>
                        </li>
                        <li className="burger__nav__item">
                            <a href="">Oolong</a>
                        </li>
                        <li className="burger__nav__item">
                            <a href="">Pu-erh</a>
                        </li>
                    </ul>
                </nav>
                <div className="line"></div>
                <div className="burger__footer">
                    <ul className="burger__footer__items">
                        <li className="burger__footer__item">
                            <a href="#">Contact us</a>
                        </li>
                        <li className="burger__footer__item">
                            <a href="#">Contact us</a>
                        </li>
                        <li className="burger__footer__item">
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="actions">
                    <ul className="actions__items">
                        <li className="actions__item">
                            <img src={storeIcon} alt="" />
                        </li>
                        <li className="actions__item">
                            <img src={personIcon} alt="" />
                        </li>
                        <li className="actions__item">
                            <img src={searchIcon} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
