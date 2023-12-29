import { createContext } from "react";
import Home from "../page/page-home/Home";

var contextObject = {
    activePage: <Home />,
    pageChanger: () => { },
    pageClick: () => { },
    pageClicked: 1

}

var AppContext = createContext(contextObject);

export default AppContext;