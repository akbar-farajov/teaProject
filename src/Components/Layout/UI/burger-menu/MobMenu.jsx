import storeIcon from '/Header-images/icon1.png';
import personIcon from '/Header-images/icon2.png';
import searchIcon from '/Header-images/icon3.png';
import xIcon from '/x.png';

import './mobMenu.css';

export default function MobMenu({open}) {
    return (
        <div className="block fixed top-0 left-[15%] right-[15%] z-30 py-3 px-8 bg-slate-50    md:hidden ">
            <img
                className="absolute top-3 right-3 cursor-pointer"
                src={xIcon}
                alt=""
                onClick={() => open()}
            />
            <div className="flex flex-col justify-center items-center gap-3">
                <nav className="mt-10">
                    <ul className="burger__nav__items">
                        <li className="mt-5">
                            <a href="" className="text-sm">
                                Black
                            </a>
                        </li>
                        <li className="mt-5">
                            <a href="" className="text-sm">
                                White
                            </a>
                        </li>
                        <li className="mt-5">
                            <a href="" className="text-sm">
                                Green
                            </a>
                        </li>
                        <li className="mt-5">
                            <a href="" className="text-sm">
                                Oolong
                            </a>
                        </li>
                        <li className="mt-5">
                            <a href="" className="text-sm">
                                Pu-erh
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="line"></div>
                <div className="burger__footer">
                    <ul className="burger__footer__items text-center">
                        <li className="burger__footer__item">
                            <a href="#" className="md: text-sm text-gray-400">
                                Contact us
                            </a>
                        </li>
                        <li className="burger__footer__item">
                            <a href="#" className="md: text-sm text-gray-400">
                                Our Blog
                            </a>
                        </li>
                        <li className="burger__footer__item">
                            <a href="#" className="md: text-sm text-gray-400">
                                Shipping and Delivery
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="actions ">
                    <ul className="actions__items mt-10">
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
