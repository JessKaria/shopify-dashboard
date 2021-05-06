import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FourHotBoxes = ({ fourLineItems }) => {

  return <>
    <p className="title">{fourLineItems.length}</p>
    <p className="subtitle">Annual Subscribers</p>
  </>
}
export default FourHotBoxes