import React, { useState, useEffect } from 'react'
import moment from 'moment'

const SidebarBottom = ({ customers }) => {

  const customerData = customers.map(function(item) {
    if (item.total_orders >= 1) {
      const totalOrders = item.total_orders
      return totalOrders
    } else if (item.total_spend >= 1) {
      return item.total_spend
    }
  })


  const averageOrders = customers.map(item => item.total_orders).reduce((acc, val) => acc + val, 0) / customers.length

  const averageValue = customers.map(item => item.total_spend).reduce((acc, val) => acc + val, 0) / customers.length

  const marketing = customers.filter(item => item.tags === 'newsletter')

  return <>
    <div id="sidebar" className="card">
      <header className="card-header">
        <div id="input-align" className="card-header-title">
          <div className="date-picker">
           Customer
          </div>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div id="main-box" className="contai">
            <section className="column">
              <div className="tile is-ancestor has-text-centered">
                <article className="tile is-child box">
                  <p className="title">{averageOrders.toFixed(0)}</p>
                  <p className="subtitle">Customer AON</p>
                </article>
              </div>
              <div className="tile is-ancestor has-text-centered mt-3">
                <article className="tile is-child box">
                  <p className="title">£{averageValue.toFixed(2)}</p>
                  <p className="subtitle">Customer AOV</p>
                </article>
              </div>
              <div className="tile is-ancestor has-text-centered mt-3">
                <article className="tile is-child box">
                  <p className="title">{marketing.length}</p>
                  <p className="subtitle">Accepts Marketing</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default SidebarBottom