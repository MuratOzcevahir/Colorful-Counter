import Logo from "./logo/Logo";
import Menu from "./menu/Menu";



function Header() {


    return (
        <div id="headerHolder"  className="container-fluid">
            <div className="container d-flex justify-content-between">
                <Logo />
                <Menu />
            </div>
        </div>

    );
}

export default Header;