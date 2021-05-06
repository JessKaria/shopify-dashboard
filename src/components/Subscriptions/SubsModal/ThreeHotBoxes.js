import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ThreeHotBoxes = ({ threeLineItems }) => {

  return <>
    <p className="title">{threeLineItems .length}</p>
    <p className="subtitle">Prepaid 9 Months</p>
  </>
}
export default ThreeHotBoxes