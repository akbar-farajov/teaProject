import blogIcon from '../../../../public/blog-images/blog-icon.png';

export default function BlogItem({image, title, author}) {
    return (
        <div className="blog__item">
            <div className="image">
                <img src={image} className="max-w-[270px]" />
            </div>
            <div className="info">
                <h5 className="info-title">{title}</h5>
                <p className="author">{author}</p>
                <p className="read">
                    Read <img src={blogIcon} alt="" className="inline-block" />
                </p>
            </div>
        </div>
    );
}
