import { DB } from "./db.js";
 export class renderHTML {
    constructor() {}
    printPhones() {
        let db = new DB();
        let records = db.getRecords();
        let htmlBlock;
        htmlBlock = document.createElement("div");
        htmlBlock.setAttribute("class","records");
        records.forEach((record) => {
            let newRecord = document.createElement("div");
            newRecord.innerText = `
            מספר סידורי : ${record.id}
            תאריך : ${record.date}
            מותג : ${record.brand}
            תיואר : ${record.description}
            `;
            htmlBlock.appenChilde(newRecord);
        });
        return htmlBlock;
    }
    printPhoneToDelete() {
        let db = new DB();
        let records = db.getRecords();
        let htmlBlock;
        htmlBlock = document.createElement("div");
        htmlBlock.setAttribute("class","records");
        records.forEach((record) => {
            let newRecord = document.createElement("div");
            newRecord.innerText = `
            מספר סידורי : ${record.id}
            תאריך : ${record.date}
            מותג : ${record.brand}
            `;
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'מחיקה';
            deleteBtn.addEventListener("click",()=>{
                db.deleteRecord(record.id);
                newRecord.innerText += 'מכשיר נמחק בהצלחה.';
            });
            htmlBlock.appenChilde(newRecord);
            htmlBlock.appenChilde(deleteBtn);
        });
        return htmlBlock;
    }
}