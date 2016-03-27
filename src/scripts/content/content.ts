export abstract class Content {
    constructor(title: string, body: string) {
        document.getElementById("header").innerHTML = title;
        document.getElementById("content").innerHTML = body;
    }
}