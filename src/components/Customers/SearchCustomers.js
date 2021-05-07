import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SearchCustomers = ({ customers }) => {
  const [search, setSearch] = useState('')

  return <>
    <div className="card events-card">
      <header id="input-align" className="card-header">
        <p className="card-header-title">
          Customers</p>
        <div className="control">
          <input className="input is-focused" type="text" onChange={(event) => setSearch(event.target.value)} placeholder="Search..." />
        </div>
      </header>
      <header className="card-header">
        <p className="card-header-title">First</p>
        <p className="card-header-title">Last</p>
        <p className="card-header-title">Country</p>
        <p className="card-header-title">Spend</p>
        <p className="card-header-title">Orders</p>
        <p className="card-header-title">AOV</p>
      </header>
      <div className="content">
        <div id="main-box" className="container">
          <div className="main-box">
            {customers.filter((item) => {
              if (search === '') {
                return item
                //Add a helper function from another file
              } else if (item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase())) {
                return item
              }
            }).map((item) => {
              return <header className="card-header" key={item.token}>
                <p className="card-header-title">{item.first_name}</p>
                <p className="card-header-title">{item.last_name}</p>
                <p className="card-header-title">{item.address}</p>
                <p className="card-header-title">£{item.total_spend}</p>
                <p className="card-header-title">{item.total_orders}</p>
         
                <p className="card-header-title">£{Math.round(item.total_spend / item.total_orders)} </p>
              </header>
            })}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">View All</a>
      </footer>
    </div>

  </>
}
export default SearchCustomers