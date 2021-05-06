import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SearchCustomers = ({ customers }) => {
  const [search, setSearch] = useState('')
  console.log(search)



  return <>
    <div className="card events-card">
      <header className="card-header">
        <p className="card-header-title">
          Customers</p>
          <input className="search" onChange={(event) => setSearch(event.target.value)} placeholder="Search..." />
      </header>
      <header className="card-header">
        <p className="card-header-title">Firstname</p>
        <p className="card-header-title">Lastname</p>
        <p className="card-header-title">Country</p>
        <p className="card-header-title">Spend</p>
        <p className="card-header-title">Orders</p>
        <p className="card-header-title">AOV</p>
        
        

      </header>
      <div className="card-table">
        <div className="content">
          <div id="main-box" className="table is-fullwidth is-stripeds">
            <div className="main-box">
              <table className="tile">
                <tbody>
                
                  {customers.filter((item) => {
                    if (search === '') {
                      return item
                    } else if (item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase())  ) {
                      return item
                    }
                  }).map((item) => {
                    return <tr key={item.token}>
                      <td width="5%"><i className="fa fa-bell-o" /></td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.address}</td>
                      <td>£{item.total_spend}</td>
                      <td>{item.total_orders} Orders</td>
                      <td>£{Math.round(item.total_spend / item.total_orders)} </td>
                      
                    </tr>
                  })}

                </tbody>
              </table>
            </div>
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