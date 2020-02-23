import React from 'react'

interface Props {
  findStation: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

const StationForm = ({ findStation }: Props) => {
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
