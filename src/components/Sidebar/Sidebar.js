import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Sidebar = ({ orders }) => {


  

  const clean = orders.map(item => item.line_items[0].total_price)
  console.log(clean)

  const cleanReduce = clean.reduce((acc, count) => acc + count, 0)
  console.log(cleanReduce)

  return <>
    <div id="sidebar" className="card">
      <header className="card-header">
        <div id="input-align" className="card-header-title">
          <div className="date-picker">
            Today's Sales
          </div>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div id="main-box" className="contai">
            <section className="column">
              <div className="tile is-ancestor has-text-centered">
                  <article className="tile is-child box">
                    {cleanReduce}
                  </article>
              </div>
              <div className="tile is-ancestor has-text-centered">
                  <article className="tile is-child box">
                    Conversion Rate
                  </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
    </div>
  </>
}
export default Sidebar