import React from 'react'

const NewLastThreeMonths = ({ newSubscribersinLastMonth }) => {

  return <>
    <p className="title">{newSubscribersinLastMonth.length}</p>
    <p className="subtitle">New Subs (M)</p>
  </>
}
export default NewLastThreeMonths