import { DB } from "./db.js";
import { Record } from "./record.js";
class runAddPhone {
    constructor() {
        this.render();
    }
    render() {
        let addPhoneButton = document.getElementById('sendPhone');
        addPhoneButton.addEventListener("click",this.addRecordFromHTML);
    }
    addRecordFromHTML() {
         let newDb = new DB();
         let date = document.getElementById('date').value;
         let brand = document.getElementById('brand').value;
         let description = document.getElementById('description').value;
         let newRecord = new Record(date, brand, description);
         let check = newDb.addRecord(newRecord);
         if (check == true) {
            document.getElementById('msg').innerText = 'אוספת מכשיר היצליח.'
         } else {
            document.getElementById('msg').innerText = 'אוספת מכשיר לא היצליח.'
         }
    }
} 
let newRun = new runAddPhone();