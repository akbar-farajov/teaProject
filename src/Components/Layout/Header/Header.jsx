import Navbar from './Navbar';
import Actions from './Actions';
import HeaderBottom from './HeaderBottom';

import './Header.css';
import logo from '../../../../public/Header-images/logo.png';
import menu from '../../../../public/Header-images/burger-menu.png';
import Menu from '../UI/burger-menu/Menu';

function Header() {
    function handleClick(){
        
    }
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="top__items">
                        <div className="menu">
                     
                                <img src={menu} alt=""  onClick={handleClick}/>
                            
                        </div>
                        <a className="logo">
                            <img src={logo} alt="" />
                        </a>
                        <Navbar />
                        <Actions />
                    </div>
                </div>
            </div>
            <Menu />

            <HeaderBottom />
        </header>
    );
}

export default Header;
