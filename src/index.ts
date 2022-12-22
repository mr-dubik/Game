import Img from "./images/fox.jpg";
import { add } from "./js/add";
import "../style.scss";
import * as _ from "lodash";

function component() {
    const element = document.createElement("div");

    element.classList.add("foo");

    const myIcon = new Image();
    myIcon.src = Img;

    element.appendChild(myIcon);

    _.capitalize();

    add(1, 2);

    return element;
}

document.body.appendChild(component());
