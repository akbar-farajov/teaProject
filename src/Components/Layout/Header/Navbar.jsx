export default function Navbar() {
    return (
        <nav className="hidden  md:block">
            <ul className="flex items-center">
                <li className="px-5">
                    <a
                        href="#"
                        className="text-black text-lg hover:opacity-[.5] font-normal">
                        Black
                    </a>
                </li>
                <li className="px-5">
                    <a
                        href="#"
                        className="text-black text-lg hover:opacity-[.5] font-normal">
                        Green
                    </a>
                </li>
                <li className="px-5">
                    <a
                        href="#"
                        className="text-black text-lg hover:opacity-[.5] font-normal">
                        White
                    </a>
                </li>
                <li className="px-5">
                    <a
                        href="#"
                        className="text-black text-lg hover:opacity-[.5] font-normal">
                        Oolong
                    </a>
                </li>
                <li className="px-5">
                    <a
                        href="#"
                        className="text-black text-lg hover:opacity-[.5] font-normal">
                        Pu-erh
                    </a>
                </li>
            </ul>
        </nav>
    );
}
