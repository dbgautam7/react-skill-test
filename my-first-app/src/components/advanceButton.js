import React from 'react'

const AdvanceButton = (props) => {
  return (
    <div>
        <button style={{backgroundColor:props.color}}>{props.color}</button>
    </div>
  )
}

export default AdvanceButton