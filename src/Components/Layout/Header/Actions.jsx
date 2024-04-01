//Images
import storeIcon from '../../../../public/Header-images/icon1.png';
import personIcon from '../../../../public/Header-images/icon2.png';
import searchIcon from '../../../../public/Header-images/icon3.png';

//style

export default function Actions() {
    return (
        <div className="flex items-center gap-[15px] md:gap-[60px]">
            <div className="flex gap-[15px]">
                <img
                    src={storeIcon}
                    alt="store-icon"
                    className="w-5 h-[22px] cursor-pointer hover:opacity-[.5]"
                />
                <img
                    src={personIcon}
                    alt="person-icon"
                    className="w-5 h-[22px] cursor-pointer hover:opacity-[.5]"
                />
            </div>
            <div className="right">
                <img
                    src={searchIcon}
                    alt="search-icon"
                    className="w-5 h-[22px] cursor-pointer hover:opacity-[.5]"
                />
            </div>
        </div>
    );
}
