import {Content} from "./content";

export class ThirdView extends Content {
    constructor() {
        super("View #3", `
            <div>
                <p>This is view #3</p>
            </div>
        `);
    }
}