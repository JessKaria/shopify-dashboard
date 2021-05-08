import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewLastThreeMonths = ({ newSubscribersinLastThreeMonths }) => {

  return <>
    <p className="title">{newSubscribersinLastThreeMonths.length}</p>
    <p className="subtitle">New Subs (Q)</p>
  </>
}
export default NewLastThreeMonths