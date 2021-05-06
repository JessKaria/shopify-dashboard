import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment, { months } from 'moment'
import OrdersData from '../Data/OrdersData'
import CustomerData from '../Data/CustomerData'
import Subscriptions from './Subscriptions/Subscriptions'
import SearchCustomers from './Customers/SearchCustomers'
import TotalOrdersData from '../Data/TotalOrdersData.json'
import TotalCustomersData from '../Data/TotalCustomersData.json'
import Chart from './Chart/Chart'
import Products from './Products/Products'
import FilterProducts from './Products/Products'


const Dashboard = () => {
  const [orders, setOrders] = useState([])
  const [customers, setCustomers] = useState([])



  useEffect(() => {
    //!!<---Insert your get request here for both customer & order endpoints--->!!//
    //?? For demo purposes we are are importing JSON data from another file //??
    //?? Set the response data in state
    setCustomers(TotalCustomersData)
    setOrders(TotalOrdersData)
  }, [])



  return <>
    <div className="page-container">
      <div className="columns">
        <div id="white-sidebar" className="column is-2 ">
          <aside className="menu is-hidden-mobile">
            <p className="menu-label">
              General</p>
            <ul className="menu-list">
              <li><a>Dashboard</a></li>
              <li><a>Customers</a></li>
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