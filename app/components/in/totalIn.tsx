import SalaryIn from "@/app/components/in/salaryIn";
import Other from "@/app/components/in/other";
import {calc} from '@/app/utils/calc';

export default function TotalIn({incomeData}:any) {

  let totalIncome = calc(incomeData);

  return (
  <section className='px-5 py-5 flex flex-col gap-5 bg-white border-2 rounded-lg'> 
    <section className="flex justify-between w-full">
      <h2 className="font-bold text-2xl">Total In</h2>
      <p className="font-bold text-2xl" >{`£${totalIncome.toFixed(2)}`}</p>
    </section>
    <SalaryIn incomeData={incomeData}/> 
    <Other incomeData={incomeData}/>
  </section>)
}