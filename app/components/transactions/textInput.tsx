'use client'

interface InputProps {
  text: string;
  setState: any;
}
export default function TextInput({text, setState}: InputProps) {

  const getInput = (event:any) =>{
    let key = text.toLowerCase();
    let value = event.target.value;
    setState((prev:any) => (
      {...prev, [key]:value }));
  }
  
  return (
    <section className="flex justify-between gap-5 items-center">
      <label htmlFor="incomeInput" className="">{text}</label>
      <input type="text" id="incomeInput" className=" border-2 rounded-md h-10" onChange={getInput}></input>
    </section>
    )
}