import React from 'react'
import Search from '../search/Search'

const Header = ({setCharacters, status, gender}) => {
  

  return (
    <header>
      <div className="logo">
        Rick and Morty Wiki
      </div>
      <Search setCharacters={setCharacters} status={status} gender={gender}/>
      <div className="theme">
        <button className="theme_button">theme</button>
      </div>
    </header>
  )
}

export default Header