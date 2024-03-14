import './Explore.css';

// images
import blackTea from '../../../../public/Explore-images/black-tea.png';
import greenTea from '../../../../public/Explore-images/green-tea.png';
import whiteTea from '../../../../public/Explore-images/white-tea.png';
import oolong from '../../../../public/Explore-images/oolong.png';
import puErh from '../../../../public/Explore-images/pu-erh.png';

export default function Explore() {
    return (
        <div className="explore">
            <div className="container">
                <h2 className='section-name'>Explore our Collections</h2>
                <div className="explore__items">
                    <div className="explore__item">
                        <img src={blackTea} alt="" />
                        <p>Black</p>
                    </div>
                    <div className="explore__item">
                        <img src={greenTea} alt="" />
                        <p>Green</p>
                    </div>
                    <div className="explore__item">
                        <img src={whiteTea} alt="" />
                        <p>White</p>
                    </div>
                    <div className="explore__item">
                        <img src={oolong} alt="" />
                        <p>Oolong</p>
                    </div>
                    <div className="explore__item">
                        <img src={puErh} alt="" />
                        <p>Pu-erh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
