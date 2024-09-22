'use client'

import NumInput from "@/app/components/transactions/numInput";
import {useState } from "react";
import {addIncomeData} from '@/app/utils/indexedDB'
import RadioGroup from '@/app/components/transactions/radioInput';

export default function IncomeForm() {
  const [income, setIncome] = useState({
    amount: undefined, 
    source: undefined
  });

  const handleAddIncome = (event: any) => {
    event.preventDefault(); // Prevent the form from submitting/reloading the page
    addIncomeData(income); // Call your indexedDB function with the transaction data
    console.log('Income added:', income);
  };

  return (<form className="border-2 rounded-lg gap-5 px-5 py-5 flex flex-col font-bold">
    
    <h1 className="text-2xl">Income</h1>

    <NumInput key='amount' text='Amount' setState={setIncome}/>
    <RadioGroup keyName='source' setState={setIncome} label1="Salary" label2="Other"/>

    <button className='px-20 py-5 bg-primary rounded-lg w-fit text-white' onClick={handleAddIncome}>Add</button>
  </form>)
}