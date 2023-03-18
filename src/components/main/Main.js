import React from 'react'
import useRamApi from '../../services/ram'
import {numberInString} from '../../utils/index.js'

const Main = ({characters, getStatus, getGender, setCharacters}) => {
  const statuses = ['alive', 'dead', 'unknown']
  const genders = ['male', 'Female', 'Genderless', 'unknown']

  const {getPageCharacters} = useRamApi()
  console.log(characters)

  const clearAllFilters = () => {
    getStatus('')
    getGender('')
  }

  const changePage = (page) => {
    if(page !== null){
      getPageCharacters(page).then(res => setCharacters(res))
    }
  }

  const page = () => {
    if(characters){
      if(characters.info.next !== null){
        return parseInt(numberInString(characters.info.next)) - 1
      }
      else if(characters.info.next === null){
        return characters.info.pages
      }
    }
  }
  
  return (
    <main>
      <button onClick={() => clearAllFilters()}>Claer</button>
      {statuses.map(e => (
        <button key={e} onClick={() => getStatus(e)}>{e}</button>
      ))}
      {genders.map(e => (
        <button key={e} onClick={() => getGender(e)}>{e}</button>
      ))}
      <ul>
        {characters ? characters.results.map(e => {
          return (
            <li key={e.id}>{e.name}</li>
          )
        }) : null}
      </ul>
      <button onClick={() => changePage(characters.info.prev)}>Back</button>
      <span>{page()} / {characters ? characters.info.pages : null}</span>
      <button onClick={() => changePage(characters.info.next)}>Next</button>
    </main>
  )
}

export default Main