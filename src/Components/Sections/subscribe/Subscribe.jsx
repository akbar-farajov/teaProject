import './subscribe.css';

export default function Subscribe() {
    return (
        <div className="subscribes">
            <div className="container">
                
                <div className="subscribe">
                    <div className="left">
                    <h2 className="section-name">Want to know more?</h2>
                        <p className="subscribe-text">
                            Join our mailing list and stay up-to-date with the
                            latest news, promotions, and exclusive offers from
                            our tea store. Be the first to know about new tea
                            arrivals, seasonal blends, and special discounts.
                            Dont miss out on the tea-rrific perks - sign up
                            today!
                        </p>
                    </div>
                    <div className="right">
                        <form action="" className="form">
                            <div className="input-submit">
                                <input
                                    className="input"
                                    type="email"
                                    placeholder="name@email.com"
                                />
                                <button className="btn">join</button>
                            </div>
                            <div className="privacy-message">
                                <input type="checkbox" />
                                <p className="privacy-text">
                                    We take your privacy seriously and are
                                    committed to protecting your personal
                                    information. By subscribing to our mailing
                                    list, you are consenting to receive periodic
                                    emails from us about our products,
                                    promotions, and other tea-related
                                    information.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
