import React from 'react'

const Alert = ({ alert }) => {
  if (!alert) {
    return null; // Return null if alert is null
  }
  const { msg, type } = alert;
  return (
    <div>
        <div className={`alert alert-${type}`} role="alert">
            {msg}
        </div>
    </div>
  )
}

export default Alert
