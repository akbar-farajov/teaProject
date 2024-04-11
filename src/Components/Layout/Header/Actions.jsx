import { useState } from 'react';

//Images

import storeIcon from '/Header-images/icon1.png';
import personIcon from '/Header-images/icon2.png';
import searchIcon from '/Header-images/icon3.png';
import SearchBar from './SearchBar';

//style

export default function Actions() {

    const [open, setOpen] = useState(false)

function handleClickSearch(){
    setOpen(!open)
}

    return (
        <div className="relative flex items-center gap-[15px] md:gap-[60px]">
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

                    onClick={handleClickSearch}
                />
            </div>
            {open && <SearchBar />}
            
        </div>
    );
}
