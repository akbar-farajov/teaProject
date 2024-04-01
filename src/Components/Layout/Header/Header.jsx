import {useState} from 'react';

import Navbar from './Navbar';
import Actions from './Actions';
import HeaderBottom from './HeaderBottom';

import './Header.css';
import logo from '../../../../public/Header-images/logo.png';
import menu from '../../../../public/Header-images/burger-menu.png';
import MobMenu from '../UI/burger-menu/MobMenu';

function Header() {
    const [open, setOpen] = useState(false);
    function handleClick() {
        setOpen(!open);
    }

    return (
        <header className="w-[100%]">
            <div className="header__top">
                <div className="container">
                    <div className="py-[15px] flex justify-between items-center md:py-[30px] flex-wrap">
                        <div className="  block cursor-pointer md:hidden">
                            <img
                                src={menu}
                                alt=""
                                onClick={handleClick}
                                className="w-[30px]"
                            />
                        </div>
                        <a className="cursor-pointer hover:opacity-[.5]">
                            <img
                                src={logo}
                                alt=""
                                className="w-[50px] md:w-[100%]"
                            />
                        </a>
                        <Navbar />
                        <Actions />
                    </div>
                </div>
            </div>

            {open && <MobMenu open={setOpen} />}

            <HeaderBottom />
        </header>
    );
}

export default Header;
