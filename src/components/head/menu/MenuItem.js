
import { useContext } from "react";
import AppContext from "../../context/AppContext";
function MenuItem(prop) {

    var menuPageChange = useContext(AppContext);
    function SetPage() {
        menuPageChange.pageChanger(prop.page);
        menuPageChange.pageClick(prop.primaryKey);


        console.log(prop.primaryKey);
    }
    var itemStyle =( menuPageChange.pageClicked == prop.primaryKey ? "active" : "");

    return (
        <>
            <li><a className={itemStyle}   href={prop.link} onClick={SetPage}>{prop.title}</a> </li>
        </>


    );

}

export default MenuItem;