import './App.css'
import { useState,useCallback ,useEffect,useRef} from 'react'

function App() {
  //UseState hook-- change state at multiple places using single var.

  const [length,setLength]=useState(8);
  const[numbersAllowed,setNumbersAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)

  const [password,setPassword]=useState("");

  //UseRef hook-- used to store reference of variable
  const passwordRef = useRef(null)


  //UseCallback hook-- require a fn and dependencies.
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbersAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    
    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length + 1)
      pass+= str.charAt(char)
    }

    setPassword(pass)
  },[length,numbersAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //UseEffect-- used for fn call , given dependencies
  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-green-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex  text-black font-bold shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-black text-white px-3 py-0.5 shrink-0'
        >Copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbersAllowed}
          id="numberInput"
          onChange={() => {
              setNumbersAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
}

export default App
