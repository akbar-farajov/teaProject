import BlogItem from './BlogItem';
import {blogList} from './blogData';
import {getImageUrl} from './blogImages';

// css
import './blogs.css';
import Button from '../../Layout/UI/Buttons/Button';

export default function Blogs() {
    return (
        <div className="blogs">
            <div className="container">
                <div className="blogs__items">
                    <h2 className="section-name">Our Tea Blog</h2>
                    <div className="blog__items">
                        {blogList.map(({id, image, title, author}) => (
                            <BlogItem
                                key={id}
                                image={getImageUrl(image)}
                                title={title}
                                author={author}
                            />
                        ))}
                    </div>
                    <div className="button"><Button name="View all" /></div>
                    
                </div>
            </div>
        </div>
    );
}
