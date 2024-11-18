import './App.css';
import { useRef } from 'react';

function App() {

  const Email = useRef()
  const Password = useRef()

  // const EmailValue = Email.current.value || ''
  // const PasswordValue = Password.current.value || ''
  

  //   console.log('Outer: ',EmailValue, PasswordValue)



  function Submit(){
  
    Password.current.classList.add("bgcolor")
    console.log(Email.current.value, Password.current.value)
  }


  return (
    <div>
      <h1>Login here</h1>
      <form>
        <input ref={Email} type='email' placeholder='Enter Email'></input>
        <input ref={Password} type='password' placeholder='Enter Password'/>

        <button onClick={Submit} type='button'>Submit</button>
      </form>
    </div>
  );
}

export default App;
