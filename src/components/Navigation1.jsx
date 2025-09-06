
const Navigation1 = () => {
    return (
        <nav className="flex flex-row justify-between sticky top-0 bg-white z-10">
            <div className="flex flex-row justify-start">
                <img src="" alt="this is the logo" />
                <ul className="flex flex-row justify-between">
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li className="hidden">item1</li>
                    <li className="hidden">item1</li>
                    <li className="hidden">item1</li>
                </ul>
            </div>

            <div className="hidden md:inline">
                some fancy shit
            </div>
        </nav>
    );
}

export default Navigation1