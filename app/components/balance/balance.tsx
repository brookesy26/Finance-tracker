'use client'
import Remain from "@/app/components/balance/remain";
import Saved from "@/app/components/balance/saved";

interface InputProps {
  outgoingData: any;
  incomeData: any;
}
export default function Balance({outgoingData, incomeData}:InputProps) {

  return (
  <section className='px-5 py-5 flex flex-col gap-5 bg-primary rounded-lg'> 
    <Remain outgoingData={outgoingData} incomeData={incomeData}/> 
    <Saved/>
  </section>)
}