import React, { useState } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'

const FilterProducts = ({ orders }) => {
  const [startDate, setStartDate] = useState(new Date('2021/01/01'))
  const [endDate, setEndDate] = useState(new Date('2021/05/01'))
  const cleanDate = moment(startDate)
  const cleanEnd = moment(endDate)

  function filterOrders() {
    return orders.filter(item => item.created_at >= cleanDate && item.created_at <= cleanEnd)
  }

  return <>

    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          Orders Overview
          <div className="container">
            <DatePicker
              className="datepicker"
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Enter Start Date"
            />
          </div>
          <div className="container">
            <DatePicker
              className="datepicker"
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Enter End Date"
            />
          </div>
        </p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">{filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Bottle in a Bag').length}</p>
                  <p className="subtitle">Bottle in a Bag</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">{filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Hot Box Club! (Most Popular!)').length}</p>
                  <p className="subtitle">Hot Box Club</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">{filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Hot Box Annual Subscription').length}</p>
                  <p className="subtitle">Hot Box Annual</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">{filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'One Off Gift Box').length}</p>
                  <p className="subtitle">One Off Gift Box</p>
                </article>
              </div>
            </div>
          </section>
          <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">{filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Five Tear System!').length}</p>
                  <p className="subtitle">Five Tears System!</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">{filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Two Hot Boxes - 6 Month Sub').length}</p>
                  <p className="subtitle">Two Hot Boxes</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title"> {filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Three Hot Boxes - 9 Month Sub').length}</p>
                  <p className="subtitle">Three Hot Boxes</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title"> {filterOrders().map(item => item.line_items[0]).filter(item => item.name === 'Four Hot Boxes - A Years Supply').length}</p>
                  <p className="subtitle">Four Hot Boxes!</p>
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