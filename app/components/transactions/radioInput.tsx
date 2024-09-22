'use client'

interface InputProps {
  keyName: string;
  setState: any;
  label1: string;
  label2: string;
}
export default function RadioGroup({keyName, setState, label1, label2}: InputProps) {

  const getInput = (event:any) =>{
    let value = event.target.value;
    let vLower = value.toLowerCase();
    setState((prev:any) => (
      {...prev, [keyName]:vLower }));
  }
  
  return (
      <section className="flex gap-5">
        <label htmlFor="salaryRadio">{label1}</label>
        <input type="radio" id="salaryRadioSalary" value={label1} name="inputRadios" className="w-7 h-7 appearance-none border-2 checked:bg-primary rounded-full" onChange={getInput}></input>
        <label htmlFor="salaryRadio">{label2}</label>
        <input type="radio" id="salaryRadioOther" value={label2} name="inputRadios" className="w-7 h-7 appearance-none border-2 checked:bg-primary rounded-full" onChange={getInput}></input>
      </section>
    )
}