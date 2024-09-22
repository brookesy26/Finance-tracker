'use client'

import Balance from "@/app/components/balance/balance";
import TotalIn from "@/app/components/in/totalIn";
import TotalOut from "@/app/components/out/totalOut";
import NewMonth from "@/app/components/month/newMonth";
import { openDatabase } from "@/app/utils/indexedDB";
import { useEffect, useState} from "react";

export default function Home() {
  const [outgoingData, setOutgoingData] = useState([{amount:undefined}]);
  const [incomeData, setIncomeData] = useState([{amount:undefined}]);
  const [readyState, setReadyState] = useState(false);

  function getData(db:any, storeName:any ,array:any, setState:any){
    const storage = db.transaction(storeName).objectStore(storeName);
    storage.openCursor().onsuccess = (event:any) => {
      const cursor = event.target.result;
      if (cursor) {
        array.push(cursor.value);
        cursor.continue();
      } else {
        setState(array);
      }
    }
  }

function handleGet(){
  let outArray:any = []
  let inArray:any = []
  openDatabase()
    .then((returnedDB) => {
      getData(returnedDB, 'outgoing', outArray, setOutgoingData);
      getData(returnedDB, 'income', inArray, setIncomeData);
    })
    .catch((error) => {
      console.log('Error opening databaseL', error);
    });
      setReadyState(true);
};

  useEffect(() => {
      handleGet();
  }, []); // Empty dependency array means this runs once on component mount


  return (<>
  {readyState ? (
    <>
      <Balance outgoingData={outgoingData} incomeData={incomeData}/>
      <TotalIn incomeData={incomeData}/>
      <TotalOut outgoingData={outgoingData}/>
      <NewMonth/>
    </>
  ):( 
  <h1>Loading..</h1>
  )}
  </>
)
}
