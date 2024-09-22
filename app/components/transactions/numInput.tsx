'use client'

interface InputProps {
  text: string;
  setState: any;
}
export default function NumInput({text, setState}: InputProps) {

  const getInput = (event:any) =>{
    let key = text.toLowerCase();
    let value = event.target.value;
    let intVal = parseInt(value);
    setState((prev:any) => (
      {...prev, [key]:intVal }));
  }
  
  return (
    <section className="flex justify-between gap-5 items-center">
      <label htmlFor="incomeInput" className="">{text}</label>
      <input type="number" id="incomeInput" className=" border-2 rounded-md h-10" onChange={getInput}></input>
    </section>
    )
}