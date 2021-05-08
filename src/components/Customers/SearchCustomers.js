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
      <div className="content">
        <div id="main-box" className="container">
          <div className="main-box">
            <div className="card-table">
              <div className="content">
                <table className="table is-fullwidth is-striped">
                  <tbody>
                    <tr>
                      <td width="5%"><i className="fa fa-bell-o" /></td>
                      <td>First</td>
                      <td>Last</td>
                      <td>Total Spend</td>
                      <td>Order Count</td>
                      <td>Subscriber</td>
                      <td>AOV</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {customers.filter((item) => {
              if (search === '') {
                return item
                //Add a helper function from another file
              } else if (item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase())) {
                return item
              }
            }).map((item) => {
              return <article className="card-table" key={item.token} >
                <div className="card-table">
                  <div className="content">
                    <table className="table is-fullwidth is-striped">
                      <tbody>
                        <tr>
                          <td width="5%"><i className="fa fa-bell-o" /></td>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.total_spend}</td>
                          <td>{item.total_orders}</td>
                          <td>{item.tags === 'active_subscriber' ? '👍🏾' : '👎🏾'}</td>
                          <td className="level-right"><a className="button is-small is-primary" href="#">£{Math.round(item.total_spend / item.total_orders)}</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            })}
          </div>
        </div>
      </div>
    </div>

  </>
}
export default SearchCustomers