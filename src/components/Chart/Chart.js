import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = ({ orders }) => {

  const destructureMap = orders.map(x => {
    return {
      created_at: x.created_at, line_items: x.line_items
    }
  })



  return <>
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Overview</p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
        </div>
      </div>
    </div>
  </>
}
export default Chart


