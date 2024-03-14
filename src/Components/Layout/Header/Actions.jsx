//Images
import storeIcon from '../../../../public/Header-images/icon1.png';
import personIcon from '../../../../public/Header-images/icon2.png';
import searchIcon from '../../../../public/Header-images/icon3.png';

//style

export default function Actions() {
    return (
        <div className="icons">
            <div className="left">
                <img src={storeIcon} alt="store-icon" />
                <img src={personIcon} alt="person-icon" />
            </div>
            <div className="right">
                <img src={searchIcon} alt="search-icon" />
            </div>
        </div>
    );
}
