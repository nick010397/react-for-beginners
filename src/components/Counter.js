import { useEffect, useState } from "react"


export default function Counter(){
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('always render')
  
  
  useEffect(() => {
    console.log('only one')
  },[]);
  useEffect(() => {
    console.log("I run when 'keyword' changs")
    // if(keyword !== "" && keyword.length > 5) {
    //   console.log('SEARCH FOR', keyword);
    // }
  },[keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changs")
   
  },[counter]);
  useEffect(() => {
    console.log("I run when key & counter changs")
   
  },[keyword,counter]);
  return(
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>

    </div>
  )
}