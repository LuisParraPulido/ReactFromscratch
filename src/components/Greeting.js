import { useState } from "react"
import Output from "./Output";

const Greeting = () => {
  const [changedText,setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(!changedText)
  }
 return (
  <div>
    <h2>Hello World!</h2>
    {!changedText &&<Output>It's good to see you</Output>}
    {changedText &&<Output>Changed!</Output>}
    <button onClick={changedTextHandler}>Change text!</button>
  </div>
 );
}

export default Greeting