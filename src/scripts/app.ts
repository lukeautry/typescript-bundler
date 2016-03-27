import {Header} from "./header/header";
import {FirstView} from "./content/firstView";
import {SecondView} from "./content/secondView";
import {ThirdView} from "./content/thirdView";

export namespace App {
    document.getElementById("link-1").onclick = () => new FirstView();
    document.getElementById("link-2").onclick = () => new SecondView();
    document.getElementById("link-3").onclick = () => new ThirdView();
}