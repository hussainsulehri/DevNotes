import React from 'react'

const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div className="in-alert-wrapper">
      {props.alert && (
        <div className={`in-alert in-alert-${props.alert.type}`} role="alert">
          <i className={`fa-solid ${props.alert.type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
          <span><strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}</span>
        </div>
      )}
    </div>
  )
}

export default Alert