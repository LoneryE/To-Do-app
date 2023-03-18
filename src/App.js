import React, {useState} from 'react'
import { Main, Header } from './components/index.js'


const App = () => {
  const [characters, setCharacters] = useState(null)
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')

  const getStatus = (status) => {
    setStatus(status)
  }
  const getGender = (gender) => {
    setGender(gender)
  }

  return (
    <div className="App">
      <Header setCharacters={setCharacters} status={status} gender={gender}/>
      <Main characters={characters} setCharacters={setCharacters} getStatus={getStatus} getGender={getGender}/>
    </div>
  );
}

export default App;
