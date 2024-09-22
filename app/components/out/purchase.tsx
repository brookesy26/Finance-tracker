import { purchase } from "@/app/utils/calc"

export default function Purchase({outgoingData}:any) {

  let purchases = purchase(outgoingData);
  
  return (<section className="flex justify-between w-full">
  <h2 className="font-bold">purchases</h2>
  <p className="font-bold" >{`£${purchases.toFixed(2)}`}</p>
  </section>)
}