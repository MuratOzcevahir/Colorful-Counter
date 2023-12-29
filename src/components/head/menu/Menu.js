
import AboutMe from "../../page/page-about-me/AboutMe";
import Contact from "../../page/page-contact/Contact";
import Home from "../../page/page-home/Home";
import Portfoil from "../../page/page-portfoil/Portfoil";
import MenuItem from "./MenuItem";

function Menu() {

    return (
        <div id="headerMenu">
            <ul>
                <MenuItem title="Anasayfa" page={<Home />} link="#anasayfa" primaryKey="1" />
                <MenuItem title="Hakkımda" page={<AboutMe />} link="#hakkımda" primaryKey="2" />
                <MenuItem title="Portfolyo" page={<Portfoil />} link="#portfolyo" primaryKey="3" />
                <MenuItem title="İletişim" page={<Contact />} link="#iletişim" primaryKey="4" />
            </ul>
        </div>
    );


}
export default Menu;