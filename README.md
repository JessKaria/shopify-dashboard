## Bauce Brothers | e-Commerce Dashboard

## Company overview

In 2019 a close friend and I started a hot sauce subscription service, called Bauce Brothers. What started as two friends comparing notes on their favourite sauces quickly transformed into the UK’s best hot sauce club.

You can view our store here: [here](https://baucebrothers.com)

This project is a custom dashboard I have created by manipulating the Shopify Rest API to reveal information that was previously hidden in downloadable CSV files or other systems.

## Technologies used !

- React
- JSX
- JavaScript (ES6)
- React Chart.js
- Bulma
- Git and GitHub
- Google Fonts
- Babel
- Axios

## Overview

When we joined Shopify, they didn't have a native subscriptions offering, so we used a third party application cald BOLD Subscriptions to allow us to provide products that would automatically recurr. 

However, this did come with some trade offs. We had to have two seperate checkouts for recurring and single orders products. This caused lots of issues with reporting but also meant that we couldn't dynamically add shipping for European customers if they selected pre-paid products. 

This meant we had three products being tagged as 'subscribers' correctly, but anyone who had bought a pre-paid product, we were only able to deduct by filtering the product subscription duration and the order date.


e.g. If someone has purchased a pre-paid product that lasts 12 months, AND there order was created in the last 12 months, they are an active subscriber.

The top three products are correctly set up, the bottom three pre-pay products are not. 


![here](https://github.com/JessKaria/project-2/blob/main/p2.gif?raw=true)

The above photo shows how those are split

## Brief...

* Create a react app that talks to an API and displays some data nicely on the page. 

* Make it look awesome

* Filter that data somehow in your app (e.g. search or a dropdown, or anything else that you like). Have your UI update as your user interacts with your page.



## Approach

I chose to use the iTunes API for the simplicity of the results it displayed and the ability to increase the limit.

## Features

- Filtered results
- Video Modal
- Audio Modal
- Filtered Dropdown
- 
## Challenges

I had some trouble getting the modals to work as this branched into two areas we hadn't yet covered. I did some reaserch and was able to build a really custom modal that played the audio and video depending on the file.

## Wins !

This was my first time building anything in React and I wanted to focus on deliverying DRY code as well as refactorig code into seperate components.

```

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ open, children, onClose }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className="show-modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal

 
import React, { useState } from 'react'
import Modal from './Modal'
import ReactPlayer from 'react-player'

function MoviesModal({ trackViewUrl, trackName, primaryGenreName, contentAdvisoryRating, previewUrl, artworkUrl100 }) {
  const [isOpen, modalIsOpen] = useState(false)

  return <div className="card" key={trackViewUrl}>
    <div className="text">
      <h5>{trackName}</h5>
      <p>{primaryGenreName} | {contentAdvisoryRating}</p>
      <div>
        <button className="play" onClick={() => modalIsOpen(true)}>Play Trailer</button>
        <Modal open={isOpen} onClose={() => modalIsOpen(false)} >
          <ReactPlayer url={previewUrl}
            controls={true}
          />
          <h5>{trackName} | {contentAdvisoryRating} </h5>
        </Modal>
        <div className="modal-show">{isOpen}</div>
      </div>

    </div>
    <div className="image">
      <img src={artworkUrl100} alt={trackName} />
    </div>
  </div >
}

export default MoviesModal
  
```










