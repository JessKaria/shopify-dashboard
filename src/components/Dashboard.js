import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Subscriptions from './Subscriptions/Subscriptions'
import SearchCustomers from './Customers/SearchCustomers'
import TotalOrdersData from './Data/TotalOrdersData.json'
import TotalCustomersData from './Data/TotalCustomersData.json'
import Chart from './Chart/Chart'
import FilterProducts from './Products/Products'
import SidebarTop from './Sidebar/SidebarTop'
import SidebarBottom from './Sidebar/SidebarBottom'

const Dashboard = () => {
  const [orders, setOrders] = useState([])
  const [customers, setCustomers] = useState([])
  console.log(orders)
  console.log(customers)

  useEffect(() => {

    // For demo purposes we are are importing JSON data from another file //??
    //?? Set the response data in state

    // axios.get('../Data/TotalOrdersData.json')
    //   .then(resp => {
    //     setOrders(resp.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    // axios.get('../Data/TotalCustomersData.json')
    //   .then(resp => {
    //     setCustomers(resp.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    setOrders(TotalOrdersData)
    setCustomers(TotalCustomersData)

  }, [])

  return <>
    <div className="page-container">
      <div className="columns">
        <div id="white-sidebar" className="column is-2 ">
          <aside className="menu is-hidden-mobile">
            <ul className="menu-list">
              <SidebarTop orders={orders} />
              <SidebarBottom customers={customers} />
            </ul>
          </aside>
        </div>
        <div className="column is-10">
          <Subscriptions orders={orders} customers={customers} />
          <Chart orders={orders} />
          <div className="columns">
            <div className="column is-6">
              <FilterProducts orders={orders} />
            </div>
            <div className="column is-6">
              <SearchCustomers customers={customers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Dashboard