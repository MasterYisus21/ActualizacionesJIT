import React from 'react'

function ErrorPage({code, codeMessage, message}) {
  return (
    <>
        <div>{code} - {codeMessage}</div>
        <div>{message}</div>
    </>
  )
}

export default ErrorPage