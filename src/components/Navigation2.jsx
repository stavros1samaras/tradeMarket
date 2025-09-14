import { Link } from "react-router";

const Navigation2 = () => {
    return (
        <nav className="block">
            <ul className="flex flex-row justify-between">
                <li><Link to="/">overview</Link></li>
                <li><Link to="/Item12">Signals</Link></li>
                <li><Link to="/Item13">item3</Link></li>
                <li>item1</li>
                <li className="hidden">item1</li>
                <li className="hidden">item1</li>
                <li className="hidden">item1</li>
            </ul>
        </nav>
    );
}

export default Navigation2