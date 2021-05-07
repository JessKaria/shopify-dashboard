import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment, { months } from 'moment'
import Subscriptions from './Subscriptions/Subscriptions'
import SearchCustomers from './Customers/SearchCustomers'
import TotalOrdersData from '../Data/TotalOrdersData.json'
import TotalCustomersData from '../Data/TotalCustomersData.json'
import Chart from './Chart/Chart'
import Products from './Products/Products'
import FilterProducts from './Products/Products'
import Sidebar from './Sidebar/Sidebar'


const Dashboard = () => {
  const [orders, setOrders] = useState([])
  const [customers, setCustomers] = useState([])




  useEffect(() => {

    //?? For demo purposes we are are importing JSON data from another file //??
    //?? Set the response data in state

    axios.get('../Data/TotalOrdersData.json')
      .then(resp => {
        setOrders(resp.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios.get('../Data/TotalCustomersData.json')
      .then(resp => {
        setCustomers(resp.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])



  return <>
    <div className="page-container">
      <div className="columns">
        <div id="white-sidebar" className="column is-2 ">
          <aside className="menu is-hidden-mobile">
            <ul className="menu-list">
              <Sidebar orders={orders} />
            </ul>
          </aside>
        </div>
        <div className="column is-10">
          <Chart orders={orders} />
          <Subscriptions orders={orders} customers={customers} />
          <div className="columns">
            <div className="column is-6">
              <SearchCustomers customers={customers} />
            </div>
            <div className="column is-6">
              <FilterProducts orders={orders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>




}

export default Dashboard