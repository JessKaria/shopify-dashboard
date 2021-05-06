import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TwoHotBoxes = ({ twoLineItems }) => {

  return <>
    <p className="title">{twoLineItems.length}</p>
    <p className="subtitle">Prepaid 6 Months</p>
  </>
}
export default TwoHotBoxes