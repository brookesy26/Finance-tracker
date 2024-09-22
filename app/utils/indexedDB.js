export const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const dbOpenRequest = window.indexedDB.open("myTestDatabase", 2);

    dbOpenRequest.onsuccess = (event) => {
      const db = event.target.result;
      resolve(db); // Resolve the promise with the opened db instance
    };

    dbOpenRequest.onerror = () => {
      reject(dbOpenRequest.error); // Reject the promise if an error occurs
    };

    dbOpenRequest.onupgradeneeded = (event) => {
      const db = event.target.result;

      const incomeStore = db.createObjectStore("income", { keyPath: 'id', autoIncrement: true });
      const outgoingStore = db.createObjectStore("outgoing", { keyPath: 'id', autoIncrement: true });

      incomeStore.createIndex('date', 'date', { unique: false });
      incomeStore.createIndex('amount', 'amount', { unique: false });
      incomeStore.createIndex('source', 'source', { unique: false });

      outgoingStore.createIndex('date', 'date', { unique: false });
      outgoingStore.createIndex('amount', 'amount', { unique: false });
      outgoingStore.createIndex('category', 'category', { unique: false });
      outgoingStore.createIndex('location', 'location', { unique: false });
      outgoingStore.createIndex('type', 'type', { unique: false });
    };
  });
};

export const addIncomeData = (data) => {
  openDatabase()
    .then((returnedDB) => {
      const transaction = returnedDB.transaction(['income'], 'readwrite');
      const objectStore = transaction.objectStore('income');
      const request = objectStore.add(data);

      request.onsuccess = () => console.log("Income data added to the database.");
      request.onerror = (event) => console.error("Error adding income data:", event.target.errorCode);
    })
    .catch((error) => {
      console.error("Error opening database:", error);
    });
};

export const addOutgoingData = (data) => {
  openDatabase()
    .then((returnedDB) => {
      const outTransaction = returnedDB.transaction(['outgoing'], 'readwrite');
      const outObjectStore = outTransaction.objectStore('outgoing');
      let outObjectRequest = outObjectStore.add(data);//this needs changing to work the data into the indexes 

      outObjectRequest.onsuccess = () => console.log("Income data added to the database.");
      outObjectRequest.onerror = (event) => console.error("Error adding income data:", event.target.errorCode);
    })
    .catch((error) => {
      console.log('Error opening databaseL', error);
    });
};


export const retrieveData = () => {
  let arr = []
  openDatabase()
    .then((returnedDB) => {
      const getOutGoingData = returnedDB.transaction('outgoing').objectStore('outgoing');
      getOutGoingData.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          arr.push(cursor.value);
          cursor.continue();
        } else {
          // console.log(arr)
          return arr;
        }
      }
    })
    .catch((error) => {
      console.log('Error opening databaseL', error);
    });
};

