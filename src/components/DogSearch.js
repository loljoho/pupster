import React from 'react'

function DogSearch(props) {
  return (
    <form>
      <input value={props.search}
        onChange={props.handleChange}
      />
      <button type="submit"
        onClick={props.handleSubmit}>
        Search
      </button>
    </form>
  )
}

export default DogSearch;