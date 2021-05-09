import React from 'react'
import moment from 'moment'
import TotalSubscribers from './SubsModal/TotalSubscribers'
import NewLastThreeMonths from './SubsModal/NewLastThreeMonths'
import NewSubscribersinLastMonth from './SubsModal/NewSubscribersinLastMonth'
import FourHotBoxes from './SubsModal/FourHotBoxes'
import ThreeHotBoxes from './SubsModal/ThreeHotBoxes'
import TwoHotBoxes from './SubsModal/TwoHotBoxes'

const Subscriptions = ({ customers, orders }) => {

  //?? Transform date/time string, under the property 'created_at' to a moment object

  const dateConverter = a => moment(a)
  const ordersClean = orders.map(item => Object.assign(item, { created_at: dateConverter(item.created_at) }))

  //?? create moment durations that equate to pre-paid product subscription lengths
  const twelveMonths = moment().subtract(12, 'months')
  const nineMonths = moment().subtract(9, 'months')
  const sixMonths = moment().subtract(6, 'months')
  const threeMonths = moment().subtract(3, 'months')
  const oneMonthsAgo = moment().subtract(1, 'months')

  //!! New subscribers in last 30 days
  const newSubscribersinLastMonth = ordersClean.filter(
    item => item.created_at >= oneMonthsAgo &&
    item.tags === 'First, recurring_order' || 
    item.line_items[0].name === 'Two Hot Boxes - 6 Month Sub' ||
    item.line_items[0].name === 'Three Hot Boxes - 9 Month Sub' ||
    item.line_items[0].name === 'Four Hot Boxes - A Years Supply')

  //!! New subscribers in the last 3 months

  const newSubscribersinLastThreeMonths = ordersClean.filter(
    item => item.created_at >= threeMonths &&
    item.tags === 'First, recurring_order' || 
    item.line_items[0].name === 'Two Hot Boxes - 6 Month Sub' ||
    item.line_items[0].name === 'Three Hot Boxes - 9 Month Sub' ||
    item.line_items[0].name === 'Four Hot Boxes - A Years Supply')

  //!! Active subs accross yearly pre-paid subscription

  const orderInLastYear = ordersClean.filter(item => item.created_at >= twelveMonths)
  const fourLineItems = orderInLastYear.map(item => item.line_items[0]).filter(item => item.name === 'Four Hot Boxes - A Years Supply')

  //!! Active subs across 9 month pre-paid subscription

  const orderInLastNine = ordersClean.filter(item => item.created_at >= nineMonths)
  const threeLineItems = orderInLastNine.map(item => item.line_items[0]).filter(item => item.name === 'Three Hot Boxes - 9 Month Sub')

  //!! Active subs across 6 month pre-paid subscription

  const orderInLastSix = ordersClean.filter(item => item.created_at >= sixMonths)
  const twoLineItems = orderInLastSix.map(item => item.line_items[0]).filter(item => item.name === 'Two Hot Boxes - 6 Month Sub')

  //!! total active subscribers 

  const totalSubs = customers.filter(
    subs => subs.tags === 'active_subscriber')

  // active subscribers by recurring subscription

  const totalActiveSubs = fourLineItems.length + threeLineItems.length + twoLineItems.length + totalSubs.length

  return <>
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          Subscribers</p>
        <a href="#" className="card-header-icon" aria-label="more options">
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <TotalSubscribers totalActiveSubs={totalActiveSubs} />
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <NewLastThreeMonths newSubscribersinLastThreeMonths={newSubscribersinLastThreeMonths} />
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <NewSubscribersinLastMonth newSubscribersinLastMonth={newSubscribersinLastMonth} />
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <FourHotBoxes fourLineItems={fourLineItems} />

                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                <ThreeHotBoxes threeLineItems={threeLineItems} />
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <TwoHotBoxes twoLineItems={twoLineItems} />

                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </>
}

export default Subscriptions