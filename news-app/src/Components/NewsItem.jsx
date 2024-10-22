

import image from '../assets/news_image.jpeg';

function NewsItem({title, description, src, url}) {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px", height: "450px"}}>
            <img src={src ? src : image} style={{height: "200px", width: "100%"}} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column" style={{flexGrow: 1}}>
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text" style={{flexGrow: 1, overflow: "hidden"}}>
                    {description ? description.slice(0, 90) : "Information about something that has just happened"}
                </p>
            </div>
            <a href={url} className="btn btn-primary" style={{position: 'absolute', bottom: '29px', left: '10px', right: '10px'}}>Read More</a>
        </div>
    );
}

export default NewsItem;






