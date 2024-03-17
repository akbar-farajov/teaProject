import Company from './Company';
import Contact from './Contact';
import './footer.css';
import Products from './Products';
import TextArea from './TextArea';

export default function Footer() {
    return (
        <div className="footer__section">
            <div className="container">
                <div className="footer__items">
                    <Products />
                    <Company />
                    <TextArea />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
