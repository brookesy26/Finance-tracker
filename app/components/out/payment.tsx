import { payment } from "@/app/utils/calc"

export default function Payment({outgoingData}:any) {

  let payments = payment(outgoingData);
  
  return (<section className="flex justify-between w-full">
  <h2 className="font-bold">payment</h2>
  <p className="font-bold" >{`£${payments.toFixed(2)}`}</p>
  </section>)
}