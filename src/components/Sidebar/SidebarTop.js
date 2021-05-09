import React from 'react'
import moment from 'moment'

const Sidebar = ({ orders }) => {

  const dateConverter = a => moment(a)
  const ordersClean = orders.map(item => Object.assign(item, { created_at: dateConverter(item.created_at) }))

  const sevenDays = moment().subtract(7, 'days')
  const oneMonths = moment().subtract(1, 'months')
  const threeMonthsAgo = moment().subtract(3, 'months')

  const clean = ordersClean.map(item => item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)
  const lastSeven = ordersClean.map(item =>item.created_at >= sevenDays && item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)
  const lastThirdy = ordersClean.map(item => item.created_at >= oneMonths && item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)
  const lastThreeMonths = ordersClean.map(item => item.created_at >= threeMonthsAgo && item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)

  return <>
    <div id="sidebar" className="card">
      <header className="card-header">
        <div id="input-align" className="card-header-title">
          <div className="date-picker">
           Sales 
          </div>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div id="main-box" className="contai">
            <section className="column">
              <div className="tile is-ancestor has-text-centered">
                <article className="tile is-child box">
                  <p className="title">£{clean.toFixed(2)}</p>
                  <p className="subtitle">Total Sales</p>
                </article>
              </div>
              <div className="tile is-ancestor has-text-centered mt-3">
                <article className="tile is-child box">
                  <p className="title">£{lastSeven.toFixed(2)}</p>
                  <p className="subtitle">Last 7 Days</p>
                </article>
              </div>
              <div className="tile is-ancestor has-text-centered mt-3">
                <article className="tile is-child box">
                  <p className="title">£{lastThirdy.toFixed(2)}</p>
                  <p className="subtitle">Last 30 Days</p>
                </article>
              </div>
              <div className="tile is-ancestor has-text-centered mt-3">
                <article className="tile is-child box">
                  <p className="title">£{lastThreeMonths.toFixed(2)}</p>
                  <p className="subtitle">Last 90 Days</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Sidebar