
import { Link } from "react-router-dom";

export default function Header() {
    return (

        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/todays-news">today's news</Link>
                </li>
                <li>
                    <Link to="/month-news">news of the month</Link>
                </li>
            </ul>
        </nav>

    );
}

