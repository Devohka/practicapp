import Header from "../../components/Header/Header";

import ListNews from "./ListNews/ListNews";
import TopTodaysNews from "./TopTodayNews/TopTodayNews";
export default function TodaysPage() {
    return (
        <>
            <Header />
            <TopTodaysNews/>
            <ListNews />
        </>
    );
};


