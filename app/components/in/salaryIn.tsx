import { salary } from "@/app/utils/calc"

export default function SalaryIn({incomeData}:any) {

  let salaryIn = salary(incomeData);
  
  return (<section className="flex justify-between w-full">
  <h2 className="font-bold">salary</h2>
  <p className="font-bold" >{`£${salaryIn.toFixed(2)}`}</p>
  </section>)
}