import { useRef, useEffect } from 'react'

const InputFocus = ()=> {

    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus();
    }, []);

  return (
    <div>
        <center>
          <h3>Focus on an Input when the page loads</h3>
        </center>
        <center><input type="text" ref={inputRef}/> </center>
    </div>
    
  )
}

export default InputFocus


const li = 1
const ob = {
  1:"Marlena",
  nazwisko:"Karda"
}

//ob[li] = "Gosia"
ob["1"] ="Zosia"


console.log(ob)