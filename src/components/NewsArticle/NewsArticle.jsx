import { Link } from "react-router-dom";

export default function NewsArticle({ title, text, img, data }) {
    return (
        <>
        <img src={img}/>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
            <p>{data}</p>

            <Link to="/month-news/article" title={title} text={text}>Читати детальніше!</Link>
        </>
    );
};