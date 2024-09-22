import {remaining} from '@/app/utils/calc';

interface InputProps {
  outgoingData: any;
  incomeData: any;
}

export default function Remain({outgoingData, incomeData}:InputProps) {
  
  let remain = remaining(incomeData, outgoingData);

  return (<section className="flex justify-between w-full">
  <h1 className="font-bold text-2xl text-white ">Remaining</h1>
  <p className="font-bold text-2xl text-white" >{`£${remain.toFixed(2)}`}</p>
  </section>)
}