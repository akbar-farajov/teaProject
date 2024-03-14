import {getPriorityImages} from './getPriorityImage';
import {priorityList} from './priorityData';
import Priority from './Priority';

//style
import './priorities.css';

export default function Priorities() {
    return (
        <div className="priorities">
            <h2 className="section-name">We Prioritise</h2>
            <div className="container">
                <div className="priority__items">
                    {priorityList.map(({id, title, desc, image}) => (
                        <Priority
                            key={id}
                            title={title}
                            desc={desc}
                            image={getPriorityImages(image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
