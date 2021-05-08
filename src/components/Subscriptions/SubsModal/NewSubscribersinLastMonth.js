import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewLastThreeMonths = ({ newSubscribersinLastMonth }) => {

  return <>
    <p className="title">{newSubscribersinLastMonth.length}</p>
    <p className="subtitle">New Subs (M)</p>
  </>
}
export default NewLastThreeMonths