'use client'

import TextInput from "@/app/components/transactions/textInput";
import NumInput from "@/app/components/transactions/numInput";

import {useState } from "react";
import {addOutgoingData} from '@/app/utils/indexedDB';
import RadioGroup from "@/app/components/transactions/radioInput";

export default function TransactionForm() {
  const [transaction, setTransaction] = useState({
    amount: undefined, 
    category: undefined, 
    location: undefined,
    type: undefined
  });

  const handleAddTransaction = (event: any) => {
    event.preventDefault(); // Prevent the form from submitting/reloading the page
    addOutgoingData(transaction); // Call your indexedDB function with the transaction data
    console.log('Transaction added:', transaction);
  };

  return (<form className="border-2 rounded-lg gap-5 px-5 py-5 flex flex-col font-bold">
    
    <h1 className="text-2xl">Transaction</h1>
    
    <NumInput key='amount' text='Amount' setState={setTransaction}/>
    <TextInput key='category' text='Category' setState={setTransaction}/>
    <TextInput key='location' text='Location' setState={setTransaction}/>
    <RadioGroup keyName='type' label1="Purchase" label2="Payment" setState={setTransaction}/>
    <button className='px-20 py-5 bg-primary rounded-lg w-fit text-white' onClick={handleAddTransaction}>Add</button>
    
  </form>)
}