import React from 'react'

function Search( { searchTerm, onSearchChange } ) {


  return (

    <div style={{marginBottom: 3+"vh"}}>
      <label style={{rightMargin: 10+"vw"}}>Search For a Member(s): </label>

      <input
        type="text"
        id="search"
        placeholder = "Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default Search