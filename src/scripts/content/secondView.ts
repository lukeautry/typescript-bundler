import {Content} from "./content";

export class SecondView extends Content {
    constructor() {
        super("View #2", `
            <div>
                <p>This is view #2</p>
            </div>
        `);
    }
}