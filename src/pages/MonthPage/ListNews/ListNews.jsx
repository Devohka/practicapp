import NewsArticle from "../../../components/NewsArticle/NewsArticle";
import monthNews from "../../../data/monthNews.json";
export default function ListNews() {
    return (
        <ul>

            {monthNews.map(({newsTitle, newsText, newsImg, newsDate}) => {
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