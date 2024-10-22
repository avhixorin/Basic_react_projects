import { useCallback, useEffect, useState, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [btnTxt,setBtnTxt] = useState('Copy');
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passRef = useRef(null);
  const copyBtnRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPRRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '@#$%^&*()_-+=:;?/,.|';

    for (let i = 1; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator]);

  const copyToClip = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setBtnTxt('Copied');
      setTimeout(() => {
        setBtnTxt('Copy');
      }, 2000);
    }
  };

  return (
    <div className='bg-black w-100vw h-screen flex justify-center'>
      <div className='w-80 h-40 bg-orange-300 mt-4 rounded-md flex flex-col'>
        <div className='w-full h-1/2 flex justify-evenly items-center'>
          <input 
            value={password} 
            className='w-90 h-10 rounded-md p-5' 
            type='text' 
            readOnly
            ref={passRef}
          />
          <button 
            className='bg-sky-600 w-6 h-10 flex justify-center items-center rounded-xl'
            onClick={copyToClip}
            id='copyBtn'
            ref={copyBtnRef}
            disabled={!password}
          >
            {btnTxt}
          </button>
        </div>
        <div className='w-full h-1/2 flex justify-center items-center'>
          <div className='w-full flex justify-center items-center gap-2'>
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className='w-full flex justify-center items-center gap-2'>
            <input 
              type='checkbox' 
              checked={numAllowed}
              onChange={() => setNumAllowed((prevValue) => !prevValue)} 
              id='num' 
            />
            <label htmlFor='num'>Numbers</label>
          </div>
          <div className='w-full flex justify-center items-center gap-2'>
            <input 
              type='checkbox' 
              checked={charAllowed}
              onChange={() => setCharAllowed((prevValue) => !prevValue)} 
              id='char' 
            />
            <label htmlFor='char'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
