import React from 'react'

const StationForm = ({ findStation }) => {
  return (
    <>
      <p>This is a station Form</p>
      <form>
        <input 
          onChange={findStation}
          type="text" 
        />
      </form>
    </>
  )
}

export default StationForm;
