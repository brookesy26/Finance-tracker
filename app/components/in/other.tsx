import { other } from "@/app/utils/calc"

export default function Other({incomeData}:any) {

  let otherIn = other(incomeData);

  return (<section className="flex justify-between w-full">
  <h2 className="font-bold">other</h2>
  <p className="font-bold" >{`£${otherIn.toFixed(2)}`}</p>
  </section>)
}