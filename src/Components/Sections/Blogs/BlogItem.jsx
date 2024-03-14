import blogIcon from '../../../../public/blog-images/blog-icon.png' 

export default function BlogItem({image, title, author}) {
    return (
        <div className="blog__item">
            <div className="image">
                <img src={image} />
            </div>
            <div className="info">
                <h3 className="title">{title}</h3>
                <p className="author">{author}</p>
                <p className="read">Read  <img src={blogIcon} alt="" /></p>
            </div>
        </div>
    );
}
