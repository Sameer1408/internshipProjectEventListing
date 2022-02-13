import React from 'react'
import sampleImage from '../images/eventDemo.png'

function Event(props) {
  const {title,date,tag,price,mode,image} = props.event;
  return (
    <div className="EventBox">
    <div className="modeTag">{mode}</div>
   <img className="eventImage" src={image.url}/>
    <div className="downIamge">
        <p className="EventDate">{date.slice(0,10)}</p>
    </div>
    <p className="EventTitle">{title}</p>
    <p className="EventTag">{tag}</p>
    <p className="EventPrice">Rs {price}/- per ticket</p>
    </div>
  )
}

export default Event