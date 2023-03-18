import React, { useEffect, useState } from 'react'
import useRamApi from '../../services/ram'
const Search = ({setCharacters, status,  gender}) => {
  const [value, setValue] = useState('')
  const {getFilterCharacters} = useRamApi()

 
  useEffect(() => {
    getFilterCharacters(value, status, gender).then(res => setCharacters(res))
  }, [value, status, gender])

  return (
    <div className="search">
      <input 
        type="text"
        value={value}
        placeholder="search"
        onChange={e => setValue(e.target.value)}
       />
    </div>
  )
}

export default Search