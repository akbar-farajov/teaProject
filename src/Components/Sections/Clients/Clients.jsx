import './clients.css';

export default function Clients() {
    return (
        <div className="clients__items">
            <div className="container">
                <h2 className="section-name">What our Clients say</h2>
                <div className="clients">
                    <div className="client">
                        <p className='client-words'>
                            "As a tea enthusiast, I have tried teas from all over
                            the world, but this tea store truly stands out.
                            Their teas are of the highest quality and the
                            variety is impressive. I love how they offer rare
                            and unique teas that are hard to find elsewhere.
                            This is definitely a tea store that every tea lover
                            should visit."
                        </p>
                        <h2 className='client-name'>Alice</h2>
                    </div>
                    <div className="client">
                        <p className='client-words'>
                        "This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional."
                        </p>
                        <h2 className='client-name'>Mad-Hatter</h2>
                    </div>
                    <div className="client">
                        <p className='client-words' >
                        "If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed."
                        </p>
                        <h2 className='client-name'>Dormouse</h2>
                    </div>
                    <div className="client">
                        <p className='client-words'>
                        "I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience."
                        </p>
                        <h2 className='client-name'>March Hare  </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
