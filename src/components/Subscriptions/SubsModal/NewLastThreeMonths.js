import React from 'react'

const NewLastThreeMonths = ({ newSubscribersinLastThreeMonths }) => {

  return <>
    <p className="title">{newSubscribersinLastThreeMonths.length}</p>
    <p className="subtitle">New Subs (Q)</p>
  </>
}
export default NewLastThreeMonths