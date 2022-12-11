import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { axiosTokenInstanceApiExpedientes } from '../../helpers/axiosInstances';

import './ThreePositionSwitch.css'

function ThreePositionSwitch({ documentoId, name, className, state }) {

  const [documentState, setDocumentState] = useState((state == null ? 2 : (state ? 1 : 0)))

  const changeDocumentState = (val) => {
    const data = {
      estado: val
    }
    axiosTokenInstanceApiExpedientes({
      method: 'patch',
      url: `/documentos/${documentoId}`,
      headers: {},
      data: data
    })
      .then(response => {
        setDocumentState(val == null ? 2 : (val ? 1 : 0))
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className={'three-position-wrapper '} >
      <div className={`${className} three-position-container ` + (documentState == 2 ? "" : (documentState ? "approved" : "rejected"))}>
        <Form.Check
          type={'radio'}
          id={`disabled-default-radio`}
          name={name}
          checked={documentState == 0}
          onChange={e => changeDocumentState(false)}
        />
        <Form.Check
          type={'radio'}
          id={`disabled-default-radio`}
          name={name}
          checked={documentState == 2}
          onChange={e => changeDocumentState(null)}
        />
        <Form.Check
          type={'radio'}
          id={`disabled-default-radio`}
          name={name}
          checked={documentState == 1}
          onChange={e => changeDocumentState(true)}
        />
      </div>
    </div>
  )
}

export default ThreePositionSwitch