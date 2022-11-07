
import './App.css';
import React,{useState} from "react";


function App() {

  const [password, setPassword]=useState("")
  const [passwordLength, setPasswordLength]=useState(26)
  const [includeUpperCase, setIncludeUpperCase]=useState(false)
  const [includeLowerCase, setIncludeLowerCase]=useState(false)
  const [includeNumber, setIncludeNumber]=useState(false)
  const [includeSpecialChar, setIncludeSpecialChar]=useState(false)

  const numbers="0123456789";
  const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase ="abcdefghijklmnopqrstuvwxyz";
  const specialCharacter="!@#$%^&*(){}[]/";

  function handleSubmit(){
    if(!includeLowerCase && !includeNumber && !includeSpecialChar && !includeUpperCase){
      alert("Select atleast one checkbox !!")
    }
    else{
      let charList ="";
      if(includeLowerCase){
        charList+=lowerCase;
      }
      if(includeUpperCase){
        charList+=upperCase;
      }
      if(includeNumber){
        charList+=numbers;
      }
      if(includeSpecialChar){
        charList+=specialCharacter;
      }
      setPassword(createPassword(charList))
    }
  }

  function createPassword(characterList){
    let password="";
    const characterListLength = characterList.length;

    for(let i=0; i<passwordLength;i++){
      const charIndex= Math.round(Math.random()*characterListLength)
    password+=characterList.charAt(charIndex);
    
    }

    return password;
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>

      <h2>{password}</h2>

      <div>
      <label htmlFor='password-length'>Password Length</label>
      <input type="number" id="password-length" name='password-length' max="26" min="8" value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)}></input>
      </div>
      <div>
      <label htmlFor='upper-case'>Upper Case Letters</label>
      <input type="checkbox" id="upper-case" name='upper-case'  checked={includeUpperCase} onChange={(e)=>setIncludeUpperCase(e.target.checked)}></input>
      </div>
      <div>
      <label htmlFor='lower-case'>Lower Case Letters</label>
      <input type="checkbox" id="lower-case" name='lower-case'  checked={includeLowerCase} onChange={(e)=>setIncludeLowerCase(e.target.checked)}></input>
      </div>
      <div>
      <label htmlFor='number'>Numbers</label>
      <input type="checkbox" id="number" name='number'  checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)}></input>
      </div>
      <div>
      <label htmlFor='character'>Special Character</label>
      <input type="checkbox" id="character" name='character'  checked={includeSpecialChar} onChange={(e)=>setIncludeSpecialChar(e.target.checked)}></input>
      </div>
     
     <button onClick={handleSubmit}>Generate Password</button>
    
    </div>
  );
}

export default App;
