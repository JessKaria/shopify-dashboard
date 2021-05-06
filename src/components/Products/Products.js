import React, { useEffect, useState } from 'react'
import moment, { months } from 'moment'
import axios from 'axios'

const FilterProducts = ({ orders }) => {
  const [filtered, updatefiltered] = useState('All')

  const oneMonthsAgo = moment().subtract(1, 'months')
  const startFirstQ = moment().startOf('year')
  const endFirstQ = moment().startOf('year').add(3, 'months')


  const lastYear = moment('2020-01-01T00:00:00.000')
  console.log(lastYear)



  function filterOrders() {
    if (filtered === 'All') {
      return orders
    } else if (filtered === 'Last Month') {
      return orders.filter(item => item.created_at >= oneMonthsAgo)
    } else if (filtered === 'First Quarter (This year)') {
      return orders.filter(item => item.created_at >= startFirstQ && item.created_at <= endFirstQ)
    }
  }


  return <>

    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          Orders Overview</p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">

          <div className="filterdrop">
            <select className="dropdown" onChange={(event) => updatefiltered(event.target.value)}>
              <option>All</option>
              <option>Last Month</option>
              <option>First Quarter (This year)</option>
            </select>
          </div>



          <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
              <div className="tile is-parent">
                <article className="tile is-child box">

                  {filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'One Off Gift Box').length}

                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">

                  {filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Four Hot Boxes - A Years Supply').length}

                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  Gift Box
                          </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  Five Tears
                          </article>
              </div>


            </div>
          </section>
          <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  Hot Box Club
                          </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  Hot Box Annual
                          </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  Gift Box
                          </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  Five Tears
                          </article>
              </div>


            </div>
          </section>



        </div>
      </div>
    </div>
    <div className="card">
    </div>



  </>
}
export default FilterProducts