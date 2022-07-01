
## Bauce Brothers | eCommerce Dashboard
### ![here](https://cdn.shopify.com/s/files/1/0306/1016/1723/files/Untitled_design_14_2d5ee133-84c1-4344-aeb6-c0db4b734503_100x.png?v=1641845853)

## Company overview 🔥

In 2019 a close friend and I started a hot sauce subscription service, called Bauce Brothers. What started as two friends comparing notes on their favourite sauces quickly transformed into the UK’s best hot sauce club. 

You can view our store [here](https://baucebrothers.com).

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/1.png?raw=true)

## Project overview 📊

For my side business, Bauce Brothers I have built a custom dashboard by manipulating the Shopify Rest API to reveal information that was previously hidden in downloadable CSV files or nested in disapparate systems.

- [VIEW THE REPO](https://github.com/JessKaria/shopify-dashboard)
- [VIEW THE DEMO](https://jesskaria.github.io/shopify-dashboard/)

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/2.png?raw=true)

## Technologies used ! 💻

- React
- JSX
- JavaScript (ES6)
- React Chart.js
- React Datepicker
- Bulma
- Git and GitHub
- Google Fonts
- Babel
- Axios

## Problem 🤞

When we joined Shopify, they didn't have a native subscriptions offering, so we used a third party application called BOLD Subscriptions to allow us to provide products that would automatically recur. 

However, this did come with some trade offs. We had to have two seperate checkouts for recurring and single order products. This caused lots of issues with reporting but also meant that we couldn't dynamically add shipping for European customers if they selected pre-paid products. 

The result, was that we had to use Shopify's single product checkout for our pre-pay products, and manually keep track of them. This meant we were spending a lots of time in excel and reporting was incredibly cumbersome, confusing and often inaccurate.

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/3.png?raw=true)

The top three products are correctly set up, the bottom three pre-pay products are not. The above photo shows how those are split.

## Goal 🎯

The goal was to create a central dashboard that could monitor KPI's, update dynamically.

Key stats or features that it must include:

* Total subscribers
* New subscribers
* Subscribers by pre-paid products
* Total sales
* Sales by product
* Search customers to see if they are a subscriber or not
* Visually show order value over time

## Shopify Endpoints 🛒

For the purposes of the demo site, I have created fake JSON data that I am importing locally. I have replicated the structure of the responses, although I have only kept specific fields relevant to the project. 

The key attributes of this data object are that 'customer' is a nested object in the order, with key information on the customer but we also have 'line_items' which is nested array that contains information about the specific product.

You can view the structure of the shopify endpoints below and below are my fake JSON objects.

- [Orders](https://shopify.dev/docs/admin-api/rest/reference/orders/order#index-2021-04)
- [Customers](https://shopify.dev/docs/admin-api/rest/reference/customers/customer#index-2021-04)


```
Orders Object
{
    "_id": "6096e2315cf3883309af015c",
    "age": 39,
    "eyeColor": "brown",
    "email": "jansharp@sarasonic.com",
    "address": "724 Powell Street, Sena, West Virginia, 7221",
    "about": "Veniam nostrud aliquip ea dolor ullamco proident nostrud amet ullamco labore cillum laboris quis. Eiusmod sunt incididunt exercitation ex cillum. In sint magna minim excepteur esse in magna irure sint voluptate.\r\n",
    "created_at": "2021-03-25T09:40:12-00:00",
    "line_items": [
      {
        "id": "6096e231165722bb2e785141",
        "total_price": 25.46,
        "name": "Three Hot Boxes - 9 Month Sub"
      }
    ],
    "customer": {
      "first_name": "Finley",
      "last_name": "Roach",
      "gender": "male",
      "email": "finleyroach@sarasonic.com",
      "phone": "+44 (953) 532-3737",
      "total_spend": 134.19,
      "total_orders": 38,
      "tags": "active_subscriber"
    },
    "tags": "newsletter"
  },
  
```

```
Customers Object
  {
    "token": "6096f58887502351c08a8d26",
    "first_name": "Ellison",
    "last_name": "Roach",
    "gender": "male",
    "email": "ellisonroach@beadzza.com",
    "phone": "+44 (870) 461-3811",
    "total_spend": 149.86,
    "total_orders": 23,
    "tags": "newsletter"
  },
  
```

## Dashboard 📊

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/2.png?raw=true)

The above is snapshot of the modular dashboard that I have built you can view the repo [here] (https://github.com/JessKaria/shopify-dashboard), or view the demo [here](https://jesskaria.github.io/shopify-dashboard/).

Despite importing the JSON data I have also provided code demonstrating how I would conduct the get request in the top dashboard component using Axios.
 

## Subscribers 📩

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/Untitled%20design%20(1).png?raw=true)

The top subscribers module contains all the logic, and I then pass the props down to seperate dumb components which return just JSX.

Below is a breakdown of how I was able to get to deduct the figures for each tile in the subscribers component.

```
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
```

## Overview 🔭

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/Untitled%20design%20(2).png?raw=true)

In the overview module, I am using Chart.js to display the order number/value over time. This was my first time using Chart.js and it was really exciting to see some of the data come to life. The set up for this was super straight forward. 

- First I converted the datetime string to a moment object. 
- I then sorted the array and created a two new arrays with values from the 'createdat' property and the 'totalprice' property.
- Then I pushed each of those property's to two seperate arrays which I set in state through the data and labels properties.

```
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
```

## Customers 🙋🏾

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/Untitled%20design%20(4).png?raw=true)

The customers component, unfortunatley doesn't look that great - however this is a super useful tool for checking if a subscriber is active or not as we would previously have to drill down into seperate reports within the Bold subscriptions app.

The search feature will match the input on either firstname or lastname.

```
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
```

## Products 🔥

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/Untitled%20design%20(3).png?raw=true)

The products component is incomplete as I have a bunch more products to add, I also want to refactor the functions in here. This component is however super useful, as it allows us dynamically filter a count of which products have been sold, between any date we choose.

The react datepicker docs specified how to set up a datetime range picker, firstly create two pieces of state for the start and end date. and intialise it.

I then conversted those to moment objects and used a simple filter function which I then later mapped over which would dynamically update the values as the dates changed.

```
  const [startDate, setStartDate] = useState(new Date('2021/01/01'))
  const [endDate, setEndDate] = useState(new Date('2021/06/01'))
  const cleanDate = moment(startDate)
  const cleanEnd = moment(endDate)


  function filterOrders() {
    return orders.filter(item => item.created_at >= cleanDate && item.created_at <= cleanEnd)
  }
  
```

## Sales 💰

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/Untitled%20design%20(5).png?raw=true)

The top sales sidebar again takes advantage of the moment.js library to calculate a snapshot of sales over previous a few different time periods.

```
  const dateConverter = a => moment(a)
  const ordersClean = orders.map(item => Object.assign(item, { created_at: dateConverter(item.created_at) }))

  const sevenDays = moment().subtract(7, 'days')
  const oneMonths = moment().subtract(1, 'months')
  const threeMonthsAgo = moment().subtract(3, 'months')

  const clean = orders.map(item => item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)
  const lastSeven = orders.map(item =>item.created_at >= sevenDays && item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)
  const lastThirdy = orders.map(item => item.created_at >= oneMonths && item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)
  const lastThreeMonths = orders.map(item => item.created_at >= threeMonthsAgo && item.line_items[0].total_price).reduce((acc, count) => acc + count, 0)]
  
```

## Other 🔗

![here](https://github.com/JessKaria/shopify-dashboard/blob/main/src/images/Untitled%20design%20(6).png?raw=true)

The final sidebar component returns the data which shows the average orders per customer, the average revenue per customer and how many have opted in to recieve marketing communications.

```
  const averageOrders = customers.map(item => item.total_orders).reduce((acc, val) => acc + val, 0) / customers.length
  const averageValue = customers.map(item => item.total_spend).reduce((acc, val) => acc + val, 0) / customers.length
  const marketing = customers.filter(item => item.tags === 'newsletter')
  
```

## Wins 👍🏾

The dashboard has solved a real-world problem that myself and my business partner ran into daily. We know have one central place to understand the KPI's that matter to us the most.

## Future Features

- I have already started thinking about new features and potentially integrating a Google Analytics API so we can get better data on website and campaign conversion rates. 

- Inside the products component I want to also add the total revenue by product.

- I also plan on rebuilding this with GraphQL to better understand the differences between that and REST.

## What I learned... 🔮

This was my first time using the Datepicker, Chart.js and moment.js libraries and it was awesome to see how they enabled me to visualise, and manipulate by day and time. I also feel confident in adding more complex visualisations and integrating data from other API's.









