import logo from '../../../../public/Header-images/logo.png';
import fbLogo from '../../../../public/footer-images/fb.png';
import ytbLogo from '../../../../public/footer-images/ytb.png';
import instaLogo from '../../../../public/footer-images/insta.png';
import twtLogo from '../../../../public/footer-images/twt.png';
import mailLogo from '../../../../public/footer-images/mail.png';
import phoneLogo from '../../../../public/footer-images/phone.png';

export default function Contact() {
    return (
        <div className="contact">
            <h3>Stay in touch</h3>
            <div>
                <p>
                    Please feel free to contact us via the email of phone. We
                    would be happy to hear from you!
                </p>
                <div className="logo-contact">
                    <img src={logo} alt="" />
                    <div className="contact__items">
                        <div className="contact__item">
                            <img src={mailLogo} alt="" />
                            <span>+370 680 123457</span>
                        </div>
                        <div className="contact__item">
                            <img src={phoneLogo} alt="" />
                            <span>+370 680 123457</span>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <ul className="media__links">
                        <li className="media__link">
                            <a href="">
                                <img src={fbLogo} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={ytbLogo} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={instaLogo} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={twtLogo} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
