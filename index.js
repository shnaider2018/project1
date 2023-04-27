import { renderHTML } from "./renderHTML.js";
class runIndex {
    constructor() {
        this.render();
    }
    render() {
        let newRender = new renderHTML();
        let htmlBlock = newRender.printPhones();
        document.getElementById('container').appendChild(htmlBlock);
    }
} 
let newRun = new runIndex();