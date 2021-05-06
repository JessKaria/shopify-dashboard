import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TotalSubscribers = ({ totalActiveSubs }) => {

  return <>
    <p className="title">{totalActiveSubs}</p>
    <p className="subtitle">Club Members</p>
  </>
}
export default TotalSubscribers