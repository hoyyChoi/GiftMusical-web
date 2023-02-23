import React from 'react'

const Toast = ({ msg = "메세지 없음" }) => {
  return (
    <div className="toast" style={{width:"3500px"}}>{msg}</div>
  )
}

export default Toast