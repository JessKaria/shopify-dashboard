import React, { useState } from 'react'

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
            <table className="table">
              <thead>
                <tr>
                  <th><abbr>First</abbr></th>
                  <th><abbr>Last</abbr></th>
                  <th><abbr >Spend</abbr></th>
                  <th><abbr >Orders</abbr></th>
                  <th><abbr >Sub</abbr></th>
                  <th><abbr >AOV</abbr></th>
                </tr>
              </thead>
            </table>
            {customers.filter((item) => {
              if (search === '') {
                return item
                //Put this into a helper function
              } else if (item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase())) {
                return item
              }
            }).map((item) => {
              return <article className="card-table" key={item.token} >
                <table className="table">
                  <tbody>
                    <tr>
                      <td >{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.total_spend}</td>
                      <td>{item.address}</td>
                      <td>{item.total_orders}</td>
                      <td>{item.tags === 'active_subscriber' ? '👍🏾' : '👎🏾'}</td>
                      <td className="level-right"><a className="button is-small is-primary" href="#">£{Math.round(item.total_spend / item.total_orders)}</a></td>
                    </tr>
                  </tbody>
                </table>
              </article>
            })}
          </div>
        </div>
      </div>
    </div>
  </>
}
export default SearchCustomers





