import style from './Text.module.css';

export default function Text() {
    return (
        <div className="container">
            <p className={style.text}>
                &quot;Tea is not just a drink, it&apos;s a way of life and a{' '}
                <br />
                way to connect with our loved ones.&quot;
            </p>
        </div>
    );
}
