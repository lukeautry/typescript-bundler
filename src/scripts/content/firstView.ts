import {Content} from "./content";

export class FirstView extends Content {
    constructor() {
        super("View #1", `
            <div>
                <p>This is view #1</p>
            </div>
        `);
    }
}