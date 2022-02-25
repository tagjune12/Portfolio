const Navbar = ({ items }) => {

    const menus = items.map((item, index) => <a href="" key={index}>{item}</a>);
    return (
        <nav>
            {menus}
        </nav>
    );
}

export default Navbar;