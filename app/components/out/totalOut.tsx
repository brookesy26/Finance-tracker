import Payment from "@/app/components/out/payment";
import Purchase from "@/app/components/out/purchase";
import {calc} from '@/app/utils/calc';

export default function TotalOut({outgoingData}:any) {

  let totalOut = calc(outgoingData);

  return (
  <section className='px-5 py-5 flex flex-col gap-5 bg-white border-2 rounded-lg'> 
    <section className="flex justify-between w-full">
      <h2 className="font-bold text-2xl">Total Out</h2>
      <p className="font-bold text-2xl" >{`£${totalOut.toFixed(2)}`}</p>
    </section>
    <Payment outgoingData={outgoingData}/> 
    <Purchase outgoingData={outgoingData}/>
  </section>)
}