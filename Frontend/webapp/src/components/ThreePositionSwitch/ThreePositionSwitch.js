import React, { useId } from 'react'
import Form from 'react-bootstrap/Form';

import './ThreePositionSwitch.css'

function ThreePositionSwitch({ name, className }) {
  // const name = useId()
  return (
    <div className={'three-position-wrapper ' + className} >
      <div className={'three-position-container'}>
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