import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import moment from 'moment'
import TotalOrdersData from '../Data/TotalOrdersData.json'

const Chart = () => {
  const [chartData, setChartData] = useState({})

  const chart = () => {
    const emptyCount = []
    const emptyCreated = []
    
    const dateConverter = a => moment(a)
    const ordersClean = TotalOrdersData.map(item => Object.assign(item, { created_at: dateConverter(item.created_at) }) )

    const sotedDate = ordersClean.sort(function (a, b) {
      return (a.created_at - b.created_at)
    })
    
    for (const dataObj of sotedDate) {
      emptyCount.push(dataObj.line_items[0].total_price)
      emptyCreated.push(dataObj.created_at.format('YYYY-MM-DD'))
    }
    setChartData({
      labels: emptyCreated,
      datasets: [
        {
          label: 'Orders over time',
          data: emptyCount,
          backgroundColor: [
            '#fe5000'
          ],
          borderWidth: 1
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [])

  return <>
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Overview</p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="chart-area">
            <Bar
              data={chartData}
              height={'55%'}
              options={{
                responsive: true,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        display: false
                        // maxTicksLimit: 10,
                        // beginAtZero: true
                      },
                      gridLines: {
                        display: false,
                        drawBorder: false
                      }
                    }
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Chart


