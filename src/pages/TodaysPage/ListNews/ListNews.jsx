import NewsArticle from "../../../components/NewsArticle/NewsArticle";
import todaysNews from "../../../data/todaysNews.json";
export default function ListNews() {
    return (
        <ul>

            {todaysNews.map(({newsTitle, newsText, newsImg, newsDate}) => {
                return (
                    <>
                        <li>
                            <NewsArticle title={newsTitle} text={newsText} img={newsImg} data={newsDate}/>
                        </li>
                    </>
                );
            })}
            {/* <li>
                <MonthNewsArticle />
            </li>
            <li>
                <MonthNewsArticle />
            </li> */}
        </ul>
    );
};