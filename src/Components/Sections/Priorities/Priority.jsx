export default function Priority({title, desc, image}) {
    return (
        <div className="priority">
            <h3 className="title">{title}</h3>
            <p className="desc">{desc}</p>
            <img className="image" src={image} alt="" />
        </div>
    );
}
