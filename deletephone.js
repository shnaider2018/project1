import { renderHTML } from "./renderHTML.js";
class runDelete {
    constructor() {
        this.render();
    }
    render() {
        let newRender = new renderHTML();
        let htmlBlock = newRender.printPhoneToDelete();
        document.getElementById('container').appendChild(htmlBlock);
    }
} 
let newRun = new runDelete();