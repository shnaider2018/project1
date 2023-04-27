export class DB {
    dbname;
    constructor() {
       this.dbname = "phoneRecord";
       this.initDB();
    }
    addRecord(record) {
       let existingRecords = this.getRecords();
       let newId = existingRecords.length;
       record.id = newId;
       existingRecords.push(record);
       localStorage.setItem(this.dbname, JSON.stringify(existingRecords));
       return true;
    }
    deleteRecord(deletedId) {
        let existingRecords = this.getRecords();
        existingRecords.forEach((record, index) => {
            if(record.id == deletedId) {
                existingRecords.splice(index, 1);
            }
        });
        localStorage.setItem(this.dbname, JSON.stringify(existingRecords));
    }
    getRecords() {
        let records;
        records = localStorage.getItem(this.dbname);
        records = JSON.parse(records);
        return records;
    }
    initDB() {
        if (localStorage.getItem(this.dbname) == null) {
            localStorage.getItem(this.dbname, "[]");
        }
    }
}