import React from 'react'

const TotalSubscribers = ({ totalActiveSubs }) => {

  return <>
    <p className="title">{totalActiveSubs}</p>
    <p className="subtitle">Club Members</p>
  </>
}
export default TotalSubscribers