import React, { useId, useState } from 'react'
import Form from 'react-bootstrap/Form';

import './ThreePositionSwitch.css'

function ThreePositionSwitch({ name, className, state }) {
  // const name = useId()
  const [documentState, setDocumentState] = useState(state)

  return (
    <div className={'three-position-wrapper '} >
      <div className={`${className} three-position-container ` + (documentState == null ? "" : (documentState ? "approved" : "rejected"))}>
        <Form.Check
          type={'radio'}
          id={`disabled-default-radio`}
          name={name}
        />
        <Form.Check
          type={'radio'}
          id={`disabled-default-radio`}
          name={name}
        />
        <Form.Check
          type={'radio'}
          id={`disabled-default-radio`}
          name={name}
        />
      </div>
    </div>
  )
}

export default ThreePositionSwitch